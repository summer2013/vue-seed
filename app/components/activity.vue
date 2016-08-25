<template>
  <div class="example">{{ msg }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      msg: '活动'
    }
  }
}
</script>

<style scoped>
.example {
  color: green;
}
</style>
