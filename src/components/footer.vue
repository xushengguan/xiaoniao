<template>
    <footer class="colorfff fontSize16 flex-center">
        <ul class="footerlist flex-center SimSun">
            <li @click="goRoute(0,'index')">
                首页
            </li>
            <li @click="goRoute(1,'service')">
                服务
            </li>
            <li @click="goRoute(2,'CasePage')">
                案例
            </li>
            <li @click="goRoute(3,'about')">
                关于我们
            </li>
        </ul>
        <div class="copyright MicrosoftYaHei">
            © 2016-2017 广州希鸟信息科技有限公司 粤ICP备12345678号-2
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            goRoute: function(index, path) {
                this.$router.push({
                    name: path,
                    query: {
                        index: index
                    }
                });
            }
        }
    }
</script>

<style scoped>
    footer {
        width: 100%;
        background: #000;
        height: 179px;
        flex-direction: column;
    }
    .footerlist li {
        margin: 0 28px;
        cursor: pointer;
    }
    .copyright {
        margin-top: 35px;
    }
</style>


