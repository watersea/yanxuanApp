<template>
  <div class='shop-car'>
    <div class="header">
      <span style="flex:1;text-align:left;font-size:18px">购物车</span>
      <span class="vouchers" @click="showToast">领券</span>
    </div>
    <div class="label">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="shopcar-content">
      <div class="shop-nothing">
        <img width=100% src="static/image/shopCar.png" alt="">
        <p style="color:#999">购物车空空如也～～</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    showToast () {
      console.log(this)
      this.QMessage('hello')
    }
  }
}
</script>
<style scoped lang="less">
@base: 37.5rem;
.shop-car{
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f4f4f4
}
.header{
  display: flex;
  background: #fff;
  padding: 0 15/@base;
  height: 40/@base;
  line-height: 40/@base;
    .vouchers{
      color: #B4282D;
      width: 50/@base;
    }
}
.label{
  display: flex;
  span{
    position: relative;
    flex: 1;
    font-size: 12px;
    line-height: 36/@base;
    color: #666;
    background: #eee
  }
  span::before{
    content: '';
    display: block;
    position: absolute;
    top: 15px;
    left: 8px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    border: 1px solid #666
  }
}
.shopcar-content{
  flex: 1;
  .shop-nothing{
    width:128/@base;
    height: 170/@base;
    margin: 150/@base auto 0
  }
}
</style>
