<template>
  <div class='shop-car'>
    <div class="header">
      <span style="flex:1;text-align:left;font-size:18px">购物车</span>
      <span class="vouchers" >领券</span>
    </div>
    <div class="label">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
   
  },
  methods: {
   
  }
}
</script>
<style scoped lang="less">
@base: 37.5rem;
.shop-car{
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
</style>
