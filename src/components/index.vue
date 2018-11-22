<template>
  <div class="layout">
    <Layout>
      <Carousel v-model="value2" autoplay loop>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../image/swiper.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../image/swiper.jpg" alt=""></div>
        </CarouselItem>
      </Carousel>
      <Content>
        <Navbar/>
        <div class="content">
          <div class="intro contentWidth">
            <div class="title">
              <h2 class="fontSize26 MicrosoftYaHei">企业简介</h2>
              <p class="color7f8d9f fontSize14 MicrosoftYaHei">INTRODUCTION</p>
            </div>
            <p class="text SimSun">
              广州希鸟信息科技有限公司（简称希鸟科技），双软认证、国家高新技术企业，专注于软件开发领域，2 位十二年品牌管理行业与网络架构行业的联合创始人亲自操刀带队，与 3 家商学院建立合作关系，和 4 家战略合作伙伴组成企业联盟，拥有 8 项技术专利认证、22 项技术储备、25 家行业领先的标杆企业，300 家企业客户案例与我们共同见证。
            </p>
            <img src="../../image/icon1.png" alt="w1047">
          </div>
          <div class="news">
            <div class="contentWidth">
              <div class="title">
                <h2 class="fontSize26 MicrosoftYaHei">新闻资讯</h2>
                <p class="color7f8d9f fontSize14 MicrosoftYaHei">NEWS</p>
              </div>
              <ul class="flex-align-center">
                <router-link :to="{name:'newDetail'}">
                  <li class="flex1 flex-align-center">
                    <div class="date fontSize14 color333">
                      <div class="box">
                        <i class="MicrosoftYaHei fontSize24 colorffab00">07</i>
                        <p>2018/03</p>
                      </div>
                    </div>
                    <div class="flex1 newtext">
                      <p class="newtitle fontSize16 color000">双向跨境电商，购物商城网站开发解决方案</p>
                      <p class="more">跨境购商城是指能够在线开展跨境电子商务交易的商城，和普通商城的区别在于，它可以直接连跨境购商城是指能够在线开展跨境电子商务交易的商城，和普通商城的区别在于，它可以直接连</p>
                    </div>
                  </li>
                </router-link>
                <li style="width:76px"></li>
                <router-link :to="{name:'newDetail'}">
                  <li class="flex1 flex-align-center">
                    <div class="date fontSize14 color333">
                      <div class="box">
                        <i class="MicrosoftYaHei fontSize24 colorffab00">07</i>
                        <p>2018/03</p>
                      </div>
                    </div>
                    <div class="flex1 newtext">
                      <p class="newtitle fontSize16 color000">双向跨境电商，购物商城网站开发解决方案</p>
                      <p class="more">跨境购商城是指能够在线开展跨境电子商务交易的商城，和普通商城的区别在于，它可以直接连跨境购商城是指能够在线开展跨境电子商务交易的商城，和普通商城的区别在于，它可以直接连</p>
                    </div>
                  </li>
                </router-link>
              </ul>
              <button class="newbtn fontSize colorfff">更多资讯</button>
            </div>
          </div>
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
      return {
        value2: 0,
        setting: {
          // height: 400
        }
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ivu-carousel img {
    width: 100%;
  }
  .ivu-layout {
    background: #fff;
  }
  .contentWidth {
    width: 1047px;
    margin: 0 auto;
  }
  .content {
    color: #000;
    text-align: center;
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
  .news {
    background-color: #f8f9fa;
  }
  .date {
    width: 84px;
    height: 84px;
    background-color: #f2f2f2;
    text-align: center;
    position: relative;
  }
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .newtext {
    text-align: left;
    margin-left: 14px;
    line-height: 26px;
  }
  .newbtn {
    width: 89px;
    height: 29px;
    background-color: #ffab00;
    margin-top: 63px;
    margin-bottom: 83px;
  }
</style>
