<template>
<div class="layout">
    <Layout>
        <img src="../../image/swiper.jpg" alt="" class="img">
        <Content>
          <Navbar/>
          <article class="MicrosoftYaHei fontSize16 color666">
              <h1 class="fontSize24 color333 indextitle">当今互联网发展趋势</h1>
              <div class="fontSize16 color666" style="line-height:30px;margin-top:67px;">
                  <p>
                      互联网是个人、商家、组织、媒体比较追捧的一个领域，它不仅可以提供个人、商家在线查询资料、休闲娱乐，同时还提供个人、商家在线商务工作。
                  </p>
                  </br>
                  <p>
                      互联网最初的状态是以查询信息为主，慢慢发展成为企业所用、个人创业所有的平台；这也是当下很多年轻人的生活习惯、工作方式、以及社会发展趋势。
                  </p>
                  </br>
                  <p>
                      一、生活化</br>
这是比较基本的表现，个人休闲生活都可以直接在线进行查询、选择、选择不同的人群等；一方面是可以在线选择不同的站点或平台，在线互动或是分享信息；另一方面可以根据个人时间调控在线时间段与查看的内容。
                  </p>
                  </br>
                  <p>
                      二、商务化</br>
在随着互联网进入千家万户后，很多店铺从线下搬到了线上，这也是很多年轻人群所喜欢的购物模式。慢慢的让很多新颖企业、传统企业、创业类的商务人群在线从商，同时也可以让个人在线开通店铺运营。按照网络申请流程在线操作，互联网将会对商务化越来越精细，网络类目也会越来越明朗。
                  </p>
                  </br>
                  <p>
                      
                      三、国际化</br>
互联网是针对全球而来的，也就是说互联网是向所有大众开放的，只要拥有互联网上相应的资料或是群体可以随时随地的进行交流、互动、商业化、生活分享等；它可以不分平台、领域、人群等在线进行。
                  </p>
                  </br>
                  <p>
                      四、科研化</br>
在科研刚开始时，发展的相对比较慢的。加上了计算机诞生，再加上互联网的进步为科研增加了很大的便利；同时也为国家、社会增加了新的发明与进步。
                  </p>
                  </br>
                  <p>
                      五、创新化</br>
很多时候很多有想法、有创意、有特色的人群，居于某种原因不能直接在现实中实现的工作、设计、社会理念等；可以通过互动网在线组织、互动、并积累相应爱好的人群在一起为社会服务，为大众奉献一份力量，也能积极收集现实生活中的真实想法。
                  </p>
                  </br>
                  <p>
                      互联网也会随着人群所需、社会变化、生活动态进展，建议从事互联网的人群以及使用互联网的人群、企业等更友好的运用它，并让它为大众更好的谋取福利与社会创造美好前景。
                  </p>
              </div>
              <div class="flex-align-center page">
                  <a href="javascript:;" class="flex1">上一篇：当今互联网的发展趋势</a>
                  <a href="javascript:;" class="flex1">下一篇：当今互联网的发展趋势</a>
              </div>
          </article>
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
    Footerbar
  },
  data() {
    return {
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-layout {
  background: #fff;
}
.img{
    max-height: 535px;
}
article{
    width: 1000px;
    margin: 59px auto 89px;
}
.indextitle{
    text-align: center;
}
a{
    color: #666;
}
.page{
    margin-top: 90px;
}
.page a:nth-child(2){
    text-align: right;
}
</style>
