<template>
  <div id="app">
    {{this.$store.state.count}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {};
  },
  methods: {
    addgo () {
      this.$store.commit('increment');
    }
  }
};
</script>
