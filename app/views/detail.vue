<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
console.log('detail');
export default {
  data () {
    return {
      msg: '活动详情'
    }
  }
}
</script>

<style scoped>
.example {
  color: blue;
}
</style>
