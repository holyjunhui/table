const drawPieLabel = function drawPieLabel(chart, colors) {
    // draw label
    const startAngle = -Math.PI / 2 - Math.PI / 4;
    const OFFSET = 50;
    const APPEND_OFFSET = 0;
    const LINEHEIGHT = 60;
    const coord = chart.get("coord"); // 获取坐标系对象
    const center = coord.center; // 极坐标圆心坐标
    const r = 35; // 极坐标半径
    const canvas = chart.get("canvas");
    const canvasWidth = chart.get("width");
    const canvasHeight = chart.get("height");
    const labelGroup = canvas.addGroup();
    const labels = [];

    const getEndPoint = function getEndPoint(center, angle, r) {
        return {
            x: center.x + r * Math.cos(angle),
            y: center.y + r * Math.sin(angle)
        };
    };

    const drawLabel = function drawLabel(label) {
        const _anchor = label._anchor,
            _router = label._router,
            fill = label.fill,
            y = label.y;

        const labelAttrs = {
            y: y + 18,
            fontSize: 12, // 字体大小
            fill: label.fill,
            text: label._data.percent.toFixed(2) + "%" + "\n" + label._data.num,
            textBaseline: "bottom",
            textAlign: "center",
            lineHeight: 20
        };
        const lastPoint = {
            y
        };

        const padding = chart.get("padding") || [0, 0, 0, 0];
        if (label._side === "left") {
            // 具体文本的位置
            lastPoint.x = APPEND_OFFSET - 20 - padding[3];
            labelAttrs.x = APPEND_OFFSET - padding[3]; // 左侧文本左对齐并贴着画布最左侧边缘
        } else {
            lastPoint.x = canvasWidth + 20 - APPEND_OFFSET - 20 - padding[1];
            labelAttrs.x = canvasWidth - APPEND_OFFSET - 20 - padding[1]; // 右侧文本右对齐并贴着画布最右侧边缘
        }

        // 绘制文本
        const text = labelGroup.addShape("Text", {
            attrs: labelAttrs
        });
        labels.push(text);
        // 绘制连接线
        let points = void 0;
        if (_router.y !== y) {
            // 文本位置做过调整
            points = [
                [_anchor.x, _anchor.y],
                [_router.x, y],
                [lastPoint.x, lastPoint.y]
            ];
        } else {
            points = [
                [_anchor.x, _anchor.y],
                [_router.x, _router.y],
                [lastPoint.x, lastPoint.y]
            ];
        }

        labelGroup.addShape("polyline", {
            attrs: {
                points,
                lineWidth: 1,
                stroke: fill
            }
        });
    };

    const antiCollision = function antiCollision(half, isRight) {
        const startY = center.y - r - OFFSET - LINEHEIGHT;
        let overlapping = true;
        let totalH = canvasHeight;
        let i = void 0;

        let maxY = 0;
        let minY = Number.MIN_VALUE;
        const boxes = half.map(label => {
            const labelY = label.y;
            if (labelY > maxY) {
                maxY = labelY;
            }
            if (labelY < minY) {
                minY = labelY;
            }
            return {
                size: LINEHEIGHT,
                targets: [labelY - startY]
            };
        });
        if (maxY - startY > totalH) {
            totalH = maxY - startY;
        }

        while (overlapping) {
            // eslint-disable-next-line no-loop-func
            boxes.forEach(box => {
                const target =
                    (Math.min.apply(minY, box.targets) +
                        Math.max.apply(minY, box.targets)) /
                    2;
                box.pos = Math.min(
                    Math.max(minY, target - box.size / 2),
                    totalH - box.size
                );
            });

            // detect overlapping and join boxes
            overlapping = false;
            i = boxes.length;
            while (i--) {
                if (i > 0) {
                    const previousBox = boxes[i - 1];
                    const box = boxes[i];
                    if (previousBox.pos + previousBox.size > box.pos) {
                        // overlapping
                        previousBox.size += box.size;
                        previousBox.targets = previousBox.targets.concat(
                            box.targets
                        );

                        // overflow, shift up
                        if (previousBox.pos + previousBox.size > totalH) {
                            previousBox.pos = totalH - previousBox.size;
                        }
                        boxes.splice(i, 1); // removing box
                        overlapping = true;
                    }
                }
            }
        }

        // step 4: normalize y and adjust x
        i = 0;
        boxes.forEach(b => {
            let posInCompositeBox = startY; // middle of the label
            b.targets.forEach(() => {
                half[i].y = b.pos + posInCompositeBox + LINEHEIGHT / 2;
                posInCompositeBox += LINEHEIGHT;
                i++;
            });
        });

        // (x - cx)^2 + (y - cy)^2 = totalR^2
        half.forEach(label => {
            const rPow2 = label.r * label.r;
            const dyPow2 = Math.pow(Math.abs(label.y - center.y), 2);
            if (rPow2 < dyPow2) {
                label.x = center.x;
            } else {
                const dx = Math.sqrt(rPow2 - dyPow2);
                if (!isRight) {
                    // left
                    label.x = center.x - dx;
                } else {
                    // right
                    label.x = center.x + dx;
                }
            }

            drawLabel(label);
        });
    };

    const addPieLabel = function addPieLabel(chart, colors) {
        const halves = [[], []];
        const data = chart.get("data");
        let angle = startAngle;

        for (let i = 0; i < data.length; i++) {
            const percent = data[i].percent;
            const targetAngle = angle + Math.PI * 2 * percent;
            const middleAngle = angle + (targetAngle - angle) / 2;
            angle = targetAngle;
            const edgePoint = getEndPoint(center, middleAngle, r);
            const routerPoint = getEndPoint(center, middleAngle, r + OFFSET);
            // label
            // console.log(data);
            const label = {
                _anchor: edgePoint,
                _router: routerPoint,
                _data: data[i],
                x: routerPoint.x,
                y: routerPoint.y,
                r: r + OFFSET,
                fill: colors[i]
            };
            // 判断文本的方向
            if (edgePoint.x < center.x) {
                label._side = "left";
                halves[0].push(label);
            } else {
                label._side = "right";
                halves[1].push(label);
            }
        } // end of for

        const maxCountForOneSide = parseInt(canvasHeight / LINEHEIGHT, 10);
        halves.forEach((half, index) => {
            // step 2: reduce labels
            if (half.length > maxCountForOneSide) {
                half.sort((a, b) => {
                    return b._percent - a._percent;
                });
                half.splice(
                    maxCountForOneSide,
                    half.length - maxCountForOneSide
                );
            }

            // step 3: distribute position (x and y)
            half.sort((a, b) => {
                return a.y - b.y;
            });
            antiCollision(half, index);
        });
    };

    addPieLabel(chart, colors);
    canvas.draw();
};

export default {
    drawPieLabel
};
