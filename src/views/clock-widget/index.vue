<template>
    <div class="clock-widget">
        <div class="time-title">
            <div class="now-datetime">
                <p class="now-date">{{ date }}</p>
                <p class="now-time">{{ time }}</p>
            </div>
            <div class="beijing-time">北京时间</div>
        </div>
        <div class="event-summary">
            <div class="summary-item" v-for="(item, index) in events" :key="index">
                <p class="item-title">{{ item.title }}</p>
                <CountTo class="item-value text-gradient" :end-val="item.value" separator />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            date: "",
            time: "",
            timer: null,
            events: [
                {title: "今日处理事件", value: 8966},
                {title: "今日探查告警量", value: 4358},
                {title: "今日事件通报", value: 3247},
                {title: "当前正在处理事件", value: 9651}
            ]
        };
    },

    mounted() {
        this.initClock();
    },
    methods: {
        initClock() {
            this.timer = setInterval(() => {
                const now = new Date();
                this.date = this.dayjs(now).format("YYYY年MM月DD日");
                this.time = this.dayjs(now).format("HH:mm:ss");
            }, 200);
        }
    }
};
</script>

<style lang="scss" scoped>
.clock-widget {
    margin: 0px 30px;

    .time-title {
        display: flex;
        color: #fff;
    }

    .now-datetime {
        position: relative;
        flex: auto;
        display: flex;
        font-size: 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        height: 37px;
        line-height: 42px;
        margin-right: 48px;

        .now-date {
            flex: auto;
            margin: 0;
        }

        .now-time {
            flex: none;
            margin: 0;
        }

        &::after {
            position: absolute;
            content: "";
            width: 48px;
            height: 38px;
            top: 0;
            right: -48px;
            background: url("../../assets/images/lines.svg") center bottom
                no-repeat;
        }
    }

    .beijing-time {
        flex: none;
        height: 36px;
        font-size: 20px;
        line-height: 36px;
        padding: 0 16px 0 48px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.05)
            url("../../assets/images/icon-clock.png") 14px center no-repeat;
    }

    .event-summary {
        display: flex;
        flex-wrap: wrap;
        margin-top: 8px;
        margin-right: -30px;

        .summary-item {
            display: flex;
            margin: 0 30px 5px 0;
            min-width: 30%;
            flex: 1;
            color: #fff;
            height: 34px;
            padding: 0 8px 0 40px;
            border-radius: 4px;
            background: linear-gradient(
                    90deg,
                    rgba(238, 238, 238, 0.05) 0%,
                    rgba(198, 224, 253, 0.05) 100%
                ),
                url("../../assets/images/icon-1.svg") 12px center no-repeat;
        }

        .item-title {
            margin: 0;
            line-height: 34px;
            font-size: 14px;
            margin-right: auto;
        }

        .item-value {
            font-size: 24px;
            font-weight: bold;
            line-height: 36px;
            font-family: "汉仪菱心体", sans-serif;
            letter-spacing: 2px;
        }
    }
}
</style>
