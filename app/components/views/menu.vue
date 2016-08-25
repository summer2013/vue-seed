<template>
  <div class="example">{{ msg }}</div>
  <router-view></router-view>
</template>

<script>
console.log('menu');
export default {
  data () {
    return {
      msg: '菜单'
    }
  }
}
</script>

<style scoped>
.example {
  color: green;
}
</style>
