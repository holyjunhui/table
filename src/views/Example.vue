<template>
    <Widget title="示例">
        <div class="main-charts">
            <p class="text-gradient">Hello World</p>
            <p class="text-gradient">网站</p>
            <CountTo class="count-to" :start-val="0" :end-val="2017" :duration="4000" :decimals="0" />
        </div>
    </Widget>
</template>

<script>
import Widget from "@/components/Widget";
export default {
    components: {Widget}
};
</script>

<style lang="scss" scoped>
.count-to {
    font-size: 28px;
    font-weight: bold;
    font-family: "汉仪菱心体", "张海山草泥马体";
}
</style>
