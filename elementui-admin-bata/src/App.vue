<template>
  <div id="app">
    <v-header></v-header>
    <v-slider></v-slider>
    <router-view id="content"></router-view>
  </div>
</template>
<script>
import header from '@/components/public/header';
import slider from '@/components/public/slider';
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  components: {
    'v-header': header,
    'v-slider': slider
  },
  methods: {
    addgo () {
      this.$store.commit('increment');
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<<style>
html,body{
  margin: 0;
  padding: 0;
  height:100%;
}
#header{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  background: #ccc;
}
#slider{
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  width:200px;
  background:#ddd;
}
#content{
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 200px;
  background:#bbb;
}
</style>

