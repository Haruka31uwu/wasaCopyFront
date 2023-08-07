<template >
    <div class="bar">
        <div class="user-info">
            <b-icon icon="person-circle" font-scale="3" ></b-icon>
        </div>
        <div class="user-options">
            <b-icon icon="camera-video" font-scale="1.5" />
            <b-icon icon="telephone" font-scale="1.5" />
            <b-icon icon="search" font-scale="1.5" />
            <b-icon icon="three-dots-vertical" font-scale="1.5" />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .bar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 75px;
        background-color: #E5E7E9;
        border-bottom: 1px solid #D7DBDD;
        padding: 0 1em;
    }
</style>