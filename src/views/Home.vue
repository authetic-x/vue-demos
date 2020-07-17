<template>
  <div class="home">
    <div id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'Ball'}">
          <span>小球弹入弹出动画</span>
        </router-link>
      </div>
    </div>
    <div id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'LoginDemo'}">LoginDemo</router-link>
      </div>
    </div>
    <div id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'markdown'}">markdown编辑器</router-link>
      </div>
    </div>
    <div id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'githubCommit'}">查看github的commit记录</router-link>
      </div>
    </div>
    <div id="navbar">
      <div class="nav-item">
        <router-link :to="{name:'treeView'}">递归组件</router-link>
      </div>
    </div>
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
    width 100%
    height 56px
    background skyblue 
    color #ffffff

    .nav-item {
      height 100%
      line-height 56px
      font-size 1.5em
      font-weight 700
      padding 0 1em
      text-align center
      
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
