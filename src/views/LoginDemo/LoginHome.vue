<template>
  <div class="container">
    <Back />
    <h1 id="title">Welcome, {{username}}</h1>

    <button id="sign-out" v-if="username" @click="handleSignout">退出</button>
  </div>
</template>

<script>
import {getCookie, deleteCookie} from '@/utils/cookie'

export default {
  name: 'LoginHome',
  computed: {
    username() {
      return getCookie('username')
    }
  },
  mounted() {
    if (getCookie('username') === '') {
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    handleSignout() {
      deleteCookie('username')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  position relative
  width 60%
  margin 200px auto

  #title {
    font-weight 700
    font-size 1.5em
    font-style italic
  }

  #sign-out {
    position absolute
    border 0
    ountline none
    right 0
    padding .5em 1em
    background skyblue 
    color #fff
    border-radius 5px
    transition all .3s ease-in
    cursor pointer
    
    &:hover {
      background pink 
      transform scale(1.5)
    }
  }
}
</style>