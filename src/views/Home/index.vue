<template>
    <div class="main-container">
        <CertHeader />
        <div class="main-layout">
            <div class="left-side">
                <Overview />
                <Example />
            </div>
            <div class="middle-map">
                <Map />
            </div>
            <div class="right-side">
                <Example />
                <Example />
                <Example />
            </div>
        </div>
        <div class="bottom-layout">
            <Example />
            <Example />
            <Example />
            <Example />
        </div>
    </div>
</template>

<script>
import Overview from "./Overview";
import Map from "./Map";
import Example from "./Example";
import CertHeader from "./Header";

export default {
    name: "Home",
    components: {
        Overview,
        Map,
        Example,
        CertHeader
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    background: #03091B url("../../assets/images/page-background.png") center no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .main-layout {
        flex: auto;
        display: flex;
    }

    .left-side, .middle-map, .right-side {
        flex: 1;
    }

    .bottom-layout {
        flex: auto;
        display: flex;

        .widget {
            flex: auto;
        }
    }
}
</style>
