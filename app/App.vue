<template>
  <div class="nav">
    <a v-link="{ path: '/activity' }">某个活动</a>
    <a v-link="{ path: '/my' }">我的活动页</a>
    <router-view></router-view>
  </div>
</template>
<script>
  export default { }
</script>
