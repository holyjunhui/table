<template>
    <div class="main-container">
        <CertHeader />
        <div class="main-layout">
            <div class="left-side">
                <Overview />
                <DetectAssetView></DetectAssetView>
            </div>
            <div class="middle-map">
                <div>Map</div>
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
import Example from "./Example";
import CertHeader from "./Header";
import DetectAssetView from "../detect-asset-view"

export default {
    name: "Home",
    components: {
        DetectAssetView,
        Overview,
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
        flex: auto;
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
