<template>
    <div class="radio" @click="onClick">
        <div class="radio-button" :class="isActivate ? 'isActivate' : ''">
            <span class="radio-button-label">{{ label }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            "default": false
        },
        label: {
            type: String,
            "default": false
        },
        name: {
            type: Number,
            "default": true
        }
    },
    methods: {
        onClick() {
            this.$emit("click", {
                name: this.name,
                label: this.label
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.radio {
    user-select: none;
    cursor: pointer;
    .radio-button {
        width: 66px;
        line-height: 32px;
        background: rgb(6, 8, 24);
        color: rgb(3, 128, 255);
        text-align: center;
        font-size: 14px;
        border: 1px solid rgb(3, 128, 255);
    }

    .isActivate {
        color: #fff;
        background: rgb(3, 128, 255);
    }
}
</style>

