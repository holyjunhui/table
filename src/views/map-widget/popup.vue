<template>
    <div class="popup">
        <h4>{{ value.area }}</h4>
        <p>网址: {{ value.address }}</p>
        <p>告警状态: {{ value.name }}</p>
        <p>漏洞等级: {{ value.level }}</p>
        <p>漏洞类型: {{ value.type }}</p>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            "default": () => ({})
        }
    }
};
</script>

<style lang="scss" scoped>
.popup {
    h4, p {
        margin: 0;
        font-size: 12px;
        line-height: 22px;
        word-break: break-all;
    }
}
</style>
