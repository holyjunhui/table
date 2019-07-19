<template>
    <div class="marker-point">
        <div class="marker-dot"></div>
        <div class="marker-1"></div>
        <div class="marker-2"></div>
        <div class="marker-3"></div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes ripple {
    0% {
        opacity: 0;
        transform: scale(0.2);
    }

    5% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.marker-point {
    width: 50px;
    height: 50px;
    transition: opacity 0.5s ease-out;

    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-clip: padding-box;

        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 50%;
            border: 2px solid #F5F049;
            opacity: 0;
        }
    }

    .marker-dot {
        z-index: 1;
        background-color: #F5F049;
        border: 1px solid rgba(245, 240, 73, 0.4);
    }

    .marker-1, .marker-2, .marker-3 {
        width: 100%;
        height: 100%;
    }

    .marker-1::after {
        animation: ripple 4500ms ease-out 225ms infinite;
    }

    .marker-2::after {
        animation: ripple 4500ms ease-out 900ms infinite;
    }

    .marker-3::after {
        animation: ripple 4500ms ease-out 1800ms infinite;
    }
}
</style>
