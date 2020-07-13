<template>
  <div class="back-btn" @click="handleClick">
    <span>Back</span>
  </div>
</template>

<script>
export default {
  name: 'Back',
  activated() {
    this.$setgoindex()
  },
  methods: {
    handleClick() {
      if (this.$route.query.goIndex === 'true') {
        this.$router.push('/')
      } else {
        this.$router.back(-1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .back-btn {
    position fixed
    left 50px
    top 50px
    width 50px
    height 50px
    line-height 50px
    text-align center
    background skyblue
    color #ffffff
    transition all .2s ease-in
    transform-origin center
    border-radius 50%
    cursor pointer

    &:hover {
      background pink
      transform scale(1.2)
    }
  }
</style>