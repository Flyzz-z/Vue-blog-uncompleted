<template>
    <div class="show">
        <div class="show-header-bg" v-bind:style="{background: this.$store.state.showColor}">
            <profile-card></profile-card>
        </div>
        <div class="show-content">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue';
export default {
    
    components: {
        ProfileCard
    },

}
</script>

<style lang="scss" scoped>
    .show-header-bg{
        background: #7bbfea;
        height: 36vh;
        min-height: 320px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: background-color 1s;
        @media screen and(min-width: 1200px) {
            min-height: 350px;
        }
    }
    
    .show-content{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>
