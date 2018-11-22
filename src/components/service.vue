<template>
    <div class="layout">
        <Layout>
            <img class="icon" src="../../image/service.png" alt="">
            <Navbar/>
            <Footerbar/>
        </Layout>
    </div>
</template>

<script>
    import Navbar from "./Navbar.vue";
    import Footerbar from "./footer.vue";
    export default {
        components: {
            Navbar,
            Footerbar
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .ivu-layout{
        background: #fff;
    }
    .icon {
        width: 100%;
        margin-bottom: 95px;
    }
</style>
