<template>
 <div class="layout">
            <LeftMenu></LeftMenu>
            <Layout>
                <Header></Header>
                <Content :style="{margin: '20px', background: '#fff', height: '100%', overflow:'auto'}">
                  <router-view/>
                </Content>
            </Layout>
    </div>
</template>

<script>
 import LeftMenu from "./LeftMenu.vue";
 import Header from "./Header.vue";
export default {
    components: {
        LeftMenu,
        Header
    },
   


    }

</script>

<style lang="scss" scoped>
 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        height: 100%;
        background: #515a6e;
    }

    
</style>