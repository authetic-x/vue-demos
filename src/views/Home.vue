<template>
  <div class="home">
    <nav id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'Ball'}">Ball</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="stylus" scoped>
.home {
  #navbar {
    display flex
    width 100%
    height 56px
    background skyblue 
    color #ffffff
    padding 0 10%

    .nav-item {
      height 100%
      line-height 56px
      font-size 1.5em
      font-weight 700
      padding 0 1em
      
      a {
        color #ffffff
      }
      
      &:hover {
        background pink 
      }
    }
  }
}
</style>
