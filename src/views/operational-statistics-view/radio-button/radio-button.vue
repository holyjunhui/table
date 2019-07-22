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
    width: 70px;
    line-height: 40px;
    background: rgb(6, 8, 24);
    color: rgb(40, 80, 150);
    text-align: center;
    border: 1px solid rgb(40, 80, 150);
  }

  .isActivate {
    color: #fff;
    background: rgb(5, 81, 162);
  }
}
</style>

