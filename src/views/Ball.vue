<template>
  <div class="ball-page">
    <button class="btn" @click="showMenu">{{text}}</button>
    <transition name="move">
      <div class="menu" v-show="show">
        <div class="inner inner-1">1</div>
        <div class="inner inner-2">2</div>
        <div class="inner inner-3">3</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Ball',
  data() {
    return {
      show: true
    }
  },
  methods: {
    showMenu() {
      this.show = !this.show
    }
  },
  computed: {
    text() {
      return !this.show ? '开' : '关'
    }
  }
}
</script>

<style lang="stylus" scoped>
.ball-page {
  .btn {
    position fixed
    display inline-block
    width 50px
    height 50px
    line-height 50px
    background pink 
    color #ffffff
    border-radius 50%
    outline none 
    border 0
    bottom 50px
    right 10px
    z-index 10
  }

  .menu {
    position fixed
    width 50px
    height 50px
    bottom 50px
    right 10px
    transition: all .7s ease-in
    .inner {
      position absolute
      display inline-block
      width 30px
      height 30px
      line-height 30px
      border-radius 50%
      background skyblue 
      text-align center
      color #ffffff
    }
    .inner-1 {
      top -50px 
      left 10px
    }
    .inner-2 {
      top -30px
      left -30px
    }
    .inner-3 {
      left -50px
      top 10px
    }

    &.move-enter-active {
      .inner {
        transform translate3d(0, 0, 0)
        transition-timing-function cubic-bezier(0, .57, .44, 1.97)
      }
      .inner-1 {
        transition-delay .1s
      }
      .inner-2 {
        transition-delay .2s
      }
      .inner-3 {
        transition-delay .3s
      }
    }

    &.move-enter, &.move-leave-active {
      .inner {
        transition-timing-function ease-in-out
      }
      .inner-1 {
        transform: translate3d(0, 60px, 0)
        transition-delay: .3s
      }
      .inner-2 {
        transform translate(40px, 40px)
        transition-delay .2s
      }
      .inner-3 {
        transform translate(60px, 0)
        transition-delay .1s
      }
    }
  }
}
</style>