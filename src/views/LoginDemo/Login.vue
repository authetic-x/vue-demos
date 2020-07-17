<template>
  <div class="login-form">
    <Back />
    <input id="username" type="text" v-model="username">
    <input id="password" type="password" v-model="password">
    <button id="submit" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
import {setCookie} from '@/utils/cookie'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$http.post('/api/login', {username: this.username, password: this.password})
      .then(res => {
        const data = res.data
        if (data.resCode === 0) {
          setCookie('username', data.username, 300)
          this.$router.push({name: 'loginHome'})
        } else {
          alert('用户名或密码错误！')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form {
  position: fixed
  top: 0
  left 0
  right 0
  bottom 0
  width 300px
  height 300px
  margin auto

  #username, #password {
    width 100%
    height 2em
    padding: 5px 15px
    margin-bottom 1em
    outline-color skyblue
    border none
    border 1px solid #ccc
    border-radius 5px
  }
  
  #submit {
    display inline-block
    width 150px
    height 30px
    border none 
    outline none
    background skyblue 
    color #ffffff
    border-radius 5px

    &:hover{
      background pink
    }
  }
}
</style>