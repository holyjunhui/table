<template>
    <div class="widget" v-loading="loading">
        <h4>{{ title }}</h4>
        <div class="widget-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.widget {
    border-image: url("../assets/images/widget-frame.png") round;
    border-image-slice: 45 fill;
    border-image-width: 45px;
    padding: 24px 30px;
    flex-grow: auto;
    position: relative;
    z-index: 200;
    margin: 8px;

    h4 {
        color: #fff;
        font-size: 24px;
        line-height: 30px;
        height: 30px;
        margin: 0;
        font-weight: normal;
    }

    .widget-container {
        min-height: 100px;
        color: #fff;
    }
}
</style>
