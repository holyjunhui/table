<template>
    <h1>{{ title }}网站监测态势感知平台</h1>
</template>
<script>
export default {
    computed: {
      title(){
        return this.$store.state.geoConfig.title;
      }
    }
};
</script>
<style lang="scss" scoped>
h1 {
    margin: 0;
    width: 100%;
    background: url("../../assets/images/title-bg-slice.png") bottom center no-repeat;
    height: 88px;
    overflow: hidden;
    /*line-height: 500px;*/
    line-height: 88px;
    color: #fff;
    font-family: "汉仪菱心体简";
    font-size: 36px;
    text-align: center;
    /*text-shadow: 0 4px 7.52px rgba(16,132,251, 1);*/
    text-shadow:
            0 0 6px rgba(16,132,251,0.98),
            0 0 30px rgba(16,132,251,0.42),
            0 0 12px rgba(16,132,251,0.58);
    /*0 0 22px rgba(16,132,251,0.84);*/
    /*0 0 38px rgba(16,132,251,0.88),*/
    /*0 0 60px rgba(16,132,251,1);*/
}
</style>
