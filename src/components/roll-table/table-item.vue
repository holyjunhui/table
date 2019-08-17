<template>
    <div class="tableItem">
        <template v-for="(item,index) in itemData">
            <div :key="index" :class="{font,[`table-${index}`]: true}">
                <p :class="font" :style="{fontSize: (fontSize ? fontSize : 12) + 'px'}">{{ item }}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["itemData", "font", "fontSize"]
};
</script>

<style lang="scss" scoped>
.tableItem {
    display: flex;
    justify-content: space-around;
    div {
        width: 33%;
        height: 100%;
        text-align: center;

        p {
            font-size: 12px;
            line-height: 26px;
            user-select: none;
            margin: 0px 0;
        }
    }
    .table-0 {
        width: 45%;
    }
    .table-0 p {
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .table-1 {
        width: 18%;
    }
    .table-1 p{
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
       .table-2 {
        width: 37%;
    }
    .table-2 p {
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
