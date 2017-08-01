<template>
  <div>
    <p>{{count}}</p>
    <button type="button" @click="addgo">++++2</button>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        count: state => state.count
      })
    },
    methods: {
      addgo () {
        this.$store.commit('increment');
      }
    }
  };
</script>