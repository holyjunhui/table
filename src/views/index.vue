<template>
    <div class="main-container">
        <CertHeader />
        <div class="main-layout">
            <div class="left-side">
                <OverviewWidget />
                <DetectAssetView />
            </div>
            <div class="middle-map">
                <MapWidget />
            </div>
            <div class="right-side">
                <ClockWidget />
                <AlarmRankWidget />
                <OperationalStatisticsView />
            </div>
        </div>
        <div class="bottom-layout">
            <AssetConditionView />
            <AlarmDetectionView />
            <AlarmTypeView />
            <SiteBlackChainView />
        </div>
    </div>
</template>
<script>
import OverviewWidget from "./overview-widget";
import MapWidget from "./map-widget";
import ClockWidget from "./clock-widget";
import AlarmRankWidget from "./alarm-rank-widget";
import Example from "./Example";
import CertHeader from "./header";
import DetectAssetView from "./detect-asset-view";
import OperationalStatisticsView from "./operational-statistics-view";
import AlarmDetectionView from "./alarm-detection-view";
import SiteBlackChainView from "./site-black-chain-view";
import AlarmTypeView from "./alarm-type-view";
import AssetConditionView from "./assest-condition-view";
export default {
    name: "Home",
    components: {
        AssetConditionView,
        AlarmTypeView,
        SiteBlackChainView,
        AlarmDetectionView,
        OperationalStatisticsView,
        DetectAssetView,
        OverviewWidget,
        MapWidget,
        ClockWidget,
        AlarmRankWidget,
        Example,
        CertHeader
    }
};
</script>
<style lang="scss" scoped>
.main-container {
    background: #03091b url("../assets/images/page-background.png") center
        no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .main-layout {
        flex: auto;
        display: flex;
    }
    .left-side,
    .middle-map,
    .right-side {
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