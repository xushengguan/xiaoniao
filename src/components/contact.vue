<template>
    <div class="intro contentWidth">
        <div class="title">
            <h2 class="fontSize26 MicrosoftYaHei">联系我们</h2>
            <p class="color1 fontSize14 MicrosoftYaHei">CONTACT US</p>
        </div>
        <p class="contacttext SimSun color666">
            您好，如有任何问题请联系我们，欢迎提交任何关于我们的问题和建议，我们将尽快回复您。
        </p>
        <p class="contacttext SimSun color666">
            感谢您对我们的帮助。我们7*24小时竭诚为您服务
        </p>
        <ul class="flex-center contactlist">
            <li class="flex1 icon">
                <p class="color010101 SimSun fontSize18">广州市天河区陶庄路5号五号空间</p>
            </li>
            <li class="flex1 icon1">
                <p class="color010101 SimSun fontSize18">400-969-9818</p>
            </li>
            <li class="flex1 icon2">
                <p class="color010101 SimSun fontSize18">xiniaovip@163.com</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

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
  .contacttext {
    line-height: 24px;
  }
  .contactlist {
    margin-top: 70px;
  }
  .icon {
    background: url(../../image/map.png) no-repeat center top;
    padding-top: 30px;
  }
  .icon1 {
    background: url(../../image/tel.png) no-repeat center top;
    padding-top: 30px;
  }
  .icon2 {
    background: url(../../image/msg.png) no-repeat center top;
    padding-top: 30px;
  }
  .contactlist p {
    margin-top: 26px;
  }
</style>
