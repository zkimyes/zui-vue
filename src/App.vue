<template>
  <div id="app">
      <div class="box1">
        <div v-for="i in bdata">{{i}}</div>
      </div>
      <tab>
        <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
        <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
        <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
      </tab>
  </div>
</template>

<script>
    import scroller from 'vux/src/components/scroller'
    import Tab from 'vux/src/components/tab'

    export default {
        name: 'app',
        components: {
            Tab,
            scroller
        },
        data() {
            return {
                bdata: [1, 2, 3, 4, 5, 6, 7],
                demo1: '已发货'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>