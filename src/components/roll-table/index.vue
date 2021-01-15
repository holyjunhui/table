<template>
    <div class="rollTabel">
        <div class="rollTabel-stripeContainer">
            <div class="stripe"></div>
            <template v-for="(v,i) in showNum">
                <div :key="i" v-if="(i + 1) % 2 === 0" class="stripe"></div>
            </template>
        </div>
        <div class="rollTabel-showBox">
            <tabel-head :head-data="headData" />
            <div
                ref="rollContainer"
                class="roll-container"
                :style="{height: rollContainerHeight + `px`}"
            >
                <template v-for="(item,index) in showDataList">
                    <Item :key="index" :item-data="item" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";
import Item from "./table-item.vue";
import tabelHead from "./table-head.vue";
export default {
    props: {
        headData: {
            type: Array,
            "default": () => {
                return [];
            }
        },
        bodyData: {
            type: Array,
            "default": () => {
                return [];
            }
        },
        showNum: {
            type: Number,
            "default": 6
        },
        interval: {
            type: Number,
            "default": 5000
        }
    },
    components: {Item, tabelHead},
    data() {
        return {
            timeoutId: null,
            showDataList: [],
            itemHeight: 26
        };
    },
    watch: {
        bodyData(newData) {
            this.bodyData = newData;
            this.update();
        }
    },
    computed: {
        rollContainerHeight() {
            return this.itemHeight * this.showNum;
        }
    },
    methods: {
        rollItem() {
            let count = 0;
            let currentIndex = 0;
            let currentRealIndex = this.showNum;
            const self = this;
            const itemHeight = this.itemHeight;
            const containerHeight = itemHeight * this.showNum;
            const showItems = this.$refs.rollContainer.children;

            // 总数据不足时 不在滚动
            if (self.bodyData.length <= self.showNum) { return; }

            const setTopItemTranslateY = () => {
                const topItem = showItems[currentIndex];
                topItem.style.transform = `translateY(${containerHeight - itemHeight * currentIndex}px)`;
            };

            const setNewData = prevIndex => {
                const newIndex = currentRealIndex % self.bodyData.length;
                const newData = self.bodyData[newIndex];
                self.$set(self.showDataList, prevIndex, newData);
            };

            const updateCurrentIndex = () => {
                currentIndex = (currentIndex + 1) % (self.showNum + 1);
            };
            const f = () => {
                self.reset();
                self.timeoutId = setTimeout(() => {
                    for (let i = 0; i < showItems.length; i++) {
                        const itemDom = showItems[i];
                        const translateY = self.getTranslateY(itemDom);
                        anime({
                            targets: itemDom,
                            translateY: translateY - itemHeight,
                            complete() {
                                count++;
                                if (count === self.showNum + 1) {
                                    count = 0;
                                    setTopItemTranslateY();
                                    const prevIndex = currentIndex;
                                    updateCurrentIndex();
                                    currentRealIndex++;
                                    setNewData(prevIndex);
                                    f();
                                }
                            }
                        });
                    }
                }, this.interval);
            };
            f();
        },
        getTranslateY(dom) {
            const s = dom.style.transform || "";
            const list = s.match(/\((-?\d+)px/);
            return list && list[1] ? Number(list[1]) : 0;
        },
        initShowData() {
            this.showDataList = this.bodyData.slice(0, this.showNum + 1);
        },
        reset() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
        },
        update() {
            this.initShowData();
            this.rollItem();
        }
    },
    mounted() {
        this.update();
    }
};
</script>
<style lang="scss" scoped>
.rollTabel {
    position: relative;
    box-sizing: border-box;
    padding: 9px 20px;
    min-width: 422px;
    background: rgba(3, 128, 255, 0.1);
    width: 100%;

    .rollTabel-stripeContainer {
        position: absolute;
        //width: 422px - 40px;
        width: calc(100% - 40px);
        .stripe {
            margin-bottom: 26px;
            height: 26px;
            background: rgba(3, 128, 255, 0.1);
        }
    }
    .rollTabel-showBox {
        position: relative;
        .roll-container {
            overflow: hidden;
        }
    }
}
</style>

