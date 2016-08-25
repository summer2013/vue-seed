<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
console.log('list');
export default {
  data () {
    return {
      msg: '活动列表'
    }
  }
}
</script>

<style scoped lang="scss">
.example {
  color: red;
}
</style>
