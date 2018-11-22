<template>
  <nav class="nav flex-align-center fontSize24 SimSun">
    <img src="../../image/logo.png" alt="">
    <ul class="clearfix navlist SimSun">
      <li :class="{colorffab00:changeindex==index}" v-for="(v,index) in list" @click="change(index,v.path)">{{v.nav}}</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        changeindex: 0,
        list: [{
            nav: '首页',
            path: 'index'
          },
          {
            nav: '服务',
            path: 'service'
          },
          {
            nav: '案例',
            path: 'CasePage'
          },
          {
            nav: '关于',
            path: 'about'
          }
        ]
      };
    },
    methods: {
      change: function(index, path) {
        this.changeindex = index;
        this.$router.push({
          name: path,
          query: {
            index: index
          }
        });
      }
    },
    created: function() {
      this.changeindex = this.$route.query.index;
    }
  };
</script>

<style scoped>
  .nav {
    width: 1047px;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 58px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 6px 16px;
    color: #fff;
  }
  /* .nav img {
    height: 31px;
  } */
  .navlist li {
    float: left;
    margin-left: 70px;
    cursor: default;
  }
</style>
