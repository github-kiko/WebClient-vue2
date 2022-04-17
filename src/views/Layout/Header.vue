<template>
    <div>
            <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>

    </div>
</template>

<script>
    export default {
            computed: {
             rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
        },
            methods: {
            collapsedSider () {
                this.$bus.$emit('collapsedSider')
              
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

</style>