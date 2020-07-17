<template>
  <div class="tree-view">
    <TreeItem 
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    />
  </div>
</template>

<script>
import TreeItem from './TreeItem'
import Vue from 'vue'

export default {
  name: 'TreeView',
  components: {
    TreeItem
  },
  data() {
    return {
      treeData: {
        name: "My Tree",
        children: [
          { name: "hello" },
          { name: "wat" },
          {
            name: "child folder",
            children: [
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              },
              { name: "hello" },
              { name: "wat" },
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    makeFolder(item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem(item) {
      item.children.push({
        name: 'new Stuff'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree-view {
  margin 100px
}
</style>