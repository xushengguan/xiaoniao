<template>
    <div class="layout">
        <Layout>
            <img src="../../image/swiper.jpg" alt="" class="img">
            <Content>
                <Navbar/>
                <div class="content">
                    <div class="intro contentWidth">
                        <div class="title">
                            <h2 class="fontSize26 MicrosoftYaHei">关于我们</h2>
                            <p class="color7f8d9f fontSize14 MicrosoftYaHei">ABOUT US</p>
                        </div>
                        <p class="text SimSun fontSize16 color333">
                            广州希鸟信息科技有限公司（简称希鸟科技），双软认证、国家高新技术企业，专注于软件开发领域，2 位十二年品牌管理行业与网络架构行业的联合创始人亲自操刀带队，与 3 家商学院建立合作关系，和 4 家战略合作伙伴组成企业联盟，拥有 8 项技术专利认证、22 项技术储备、25 家行业领先的标杆企业，300 家企业客户案例与我们共同见证。 希鸟科技拥有精锐的研发团队和运营团队，目前分公司分别驻扎广州白云区、广州天河区、佛山顺德区，旗下软件工程师 60 余位，企业团队年轻有活力、敢担当、磨合多年配合无间。 希鸟科技提供多种互联网软件开发服务，涵盖
                            5 大主流流量入口，其中包括移动 APP 定制开发、微信第三方端口开发，PC 端大型平台开发，提供互联网落地解决方案，赋予行业全新的商业模式和客户体验。
                        </p>
                    </div>
                    <img src="../../image/about.png" alt="">
                    <Contact/>
                </div>
            </Content>
            <Footerbar/>
        </Layout>
    </div>
</template>

<script>
    import Navbar from "./Navbar.vue";
    import Footerbar from "./footer.vue";
    import Contact from "./contact.vue";
    export default {
        components: {
            Navbar,
            Footerbar,
            Contact
        },
        data() {
            return {};
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        color: #000;
        text-align: center;
        background: #fff;
    }
    .contentWidth {
        width: 1047px;
        margin: 0 auto;
    }
    .intro {
        padding-bottom: 50px;
    }
    .title {
        text-align: center;
        color: #010101;
        position: relative;
        margin-bottom: 78px;
        padding-top: 60px;
    }
    .intro .title::after {
        content: "";
        width: 30px;
        height: 3px;
        background-color: #ffab00;
        position: absolute;
        margin-top: 28px;
        left: 50%;
        margin-left: -15px;
    }
    .text {
        text-indent: 2em;
        padding-bottom: 50px;
        text-align: left;
        line-height: 36px;
    }
</style>
