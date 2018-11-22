<template>
    <div class="layout">
        <Layout>
            <img src="../../image/swiper.jpg" alt="" class="img">
            <Content>
                <Navbar/>
                <div class="content">
                    <div class="intro contentWidth">
                        <div class="title">
                            <h2 class="fontSize26 MicrosoftYaHei">300+家企业客户为希鸟共同见证</h2>
                            <!-- <p class="color7f8d9f fontSize14 MicrosoftYaHei">ABOUT US</p> -->
                        </div>
                        <Carousel v-model="value2" autoplay :dots="setting.dots" :radiusDot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow"
                        :autoplaySpeed="setting.autoplaySpeed">
                            <CarouselItem>
                                <ul class="demo-carousel">
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                </ul>
                            </CarouselItem>
                            <CarouselItem>
                                <ul class="demo-carousel">
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../../image/icon2.png" alt="">
                                    </li>
                                </ul>
                            </CarouselItem>
                           
                        </Carousel>
                    </div>
                </div>
            </Content>
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
            Footerbar,
        },
        data() {
            return {
                value2: 0,
                setting: {
                    dots: 'outside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'never',
                    autoplaySpeed: 5000,
                }
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        color: #000;
        text-align: center;
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
    .demo-carousel {
        text-align: center;
    }
    .demo-carousel li {
        float: left;
        margin-bottom: 48px;
        width:25%;
    }
</style>