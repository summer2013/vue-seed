<template>
  <div class="example">{{ msg }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      msg: '菜品大类'
    }
  }
}
</script>

<style scoped>
.example {
  color: blue;
}
</style>
