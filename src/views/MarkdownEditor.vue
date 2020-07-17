<template>
  <div class="editor">
    <textarea id="markdown-editor" :value="input" @input="handleInput"></textarea>
    <div class="text" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from '@/utils/debounce'

export default {
  name: 'MarkdownEditor',
  data() {
    return {
      input: '# Hello'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input)
    }
  },
  methods: {
    handleInput: debounce(function(e) {
      this.input = e.target.value
    })
  }
}
</script>

<style lang="stylus" scoped>
.editor {
  display flex
  height: 100%
  width 100%

  #markdown-editor {
    width 50%
    border 0
    outline 0
    resize none
    padding 20px
    font-size 14px
    background #f6f6f6
    border-right 1px solid #ccc
  }

  .text {
    flex 1
    padding 0 20px
  }
}
</style>