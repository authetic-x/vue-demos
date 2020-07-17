<template>
  <li>
    <div
      :class="{'bold': isFolder}"
      @click="toggle"
      @dblclick="makeFolder"
    >
      {{item.name}}
      <span v-if="isFolder">[{{isOpen ? '-' : '+'}}]</span>
    </div>

    <ul v-if="isFolder" v-show="isOpen">
      <TreeItem 
        class="item"
        v-for="(child, index) of item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      />
      <li class="add" @click="$emit('add-item', item)">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder() {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>

<style>

</style>