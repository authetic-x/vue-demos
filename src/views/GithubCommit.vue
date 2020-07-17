<template>
  <div class="commit-page">
    <h1 class="title">Latest Vue.js Commits</h1>
    <div class="branch" v-for="branch in branches" :key="branch">
      <input 
        type="radio"
        id="branch"
        :value="branch"
        v-model="currentBranch"
      >
      <label :for="branch">{{branch}}</label>
    </div>
    <p>authetic-x/React_Practice@{{ currentBranch }}</p>
    <ul>
      <li class="commit-item" v-for="record of this.commits" :key="record.html_url">
        <a :href="record.html_url" target="_blank" class="commit">{{record.sha.slice(0, 7)}}</a>
        <span class="message">{{record.commit.message | truncate}}</span>
        <br>by
        <span class="author">
          <a :href="record.author.html_url" target="_blank">{{record.commit.author.name}}</a>
        </span>
        at
        <span class="date">{{record.commit.author.date | formatDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
let apiURL = 'https://api.github.com/repos/authetic-x/React_Practice/commits?per_page=5&sha='

export default {
  name: 'GithubCommit',
  data() {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData'
  },
  filters: {
    truncate(v) {
      const newLine = v.indexOf('\n')
      return newLine > 0 ? v.slice(0, newLine) : v
    },
    formatDate(v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    fetchData() {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', apiURL + this.currentBranch)
      xhr.onload = () => {
        this.commits = JSON.parse(xhr.responseText)
        console.log(this.commits)
      }
      xhr.send()
    }
  }
}
</script>

<style lang="stylus" scoped>
.commit-page {
  margin 100px
  .title {
    font-size 1.5em
    font-weight 700
    margin 20px 0
  }
  .branch {
    display inline-block
    margin-right 1em
    margin-bottom 2em
  }

  .commit-item {
    padding: 10px 0
    line-height 1.2em
    .commit {
      color skyblue
      font-weight 700
      font-size 1.2em
      margin-right 1em
    }
    .author {
      color red
      font-weight 700
      font-style italic
    }
  }
}
</style>