<template>
<div class="workshop">
  <div class="workshop__editor">
    <editor
      :sections="sections"
      :sectionChange="sectionChange"
      :articleChange="articleChange"
      :appendSection="appendSection"
      :appendArticle="appendArticle"
      :removeSection="removeSection"
      :removeArticle="removeArticle"
    />
  </div>
  <div class="workshop__previewer">
    <previewer :sections="sections"/>
  </div>
</div>
</template>

<script>
import Editor from './Editor'
import Previewer from './Previewer'

import { randomId } from '../utils'

export default {
  name: 'Workshop',

  components: {
    Editor,
    Previewer
  },

  data () {
    return {
      sections: []
    }
  },

  mounted() {
    this.loadDataFromLS()
  },

  methods: {
    createArticle() {
      return {
        id: randomId(),
        title: '',
        previewText: '',
        imgUrl: '',
        link: '',
        linkText: ''
      }
    },
    createSection() {
      return {
        id: randomId(),
        title: '',
        articles: [this.createArticle()]
      }
    },
    sectionChange(sectionId, key, value) {
      const section = this.sections.find((section) => section.id === sectionId)
      section[key] = value
      this.saveDataToLS()
    },
    articleChange(sectionId, articleId, key, value) {
      const section = this.sections.find((section) => section.id === sectionId)
      const article = section.articles.find((article) => article.id === articleId)
      article[key] = value
      this.saveDataToLS()
    },
    appendSection() {
      this.sections.push(this.createSection())
      this.saveDataToLS()
    },
    appendArticle(sectionId) {
      const section = this.sections.find((section) => section.id === sectionId)
      section.articles.push(this.createArticle())
      this.saveDataToLS()
    },
    removeSection(sectionId) {
      this.sections = this.sections.filter((section) => section.id !== sectionId)
      this.saveDataToLS()
    },
    removeArticle(sectionId, articleId) {
      const section = this.sections.find((section) => section.id === sectionId)
      section.articles = section.articles.filter((article) => article.id !== articleId)
      this.saveDataToLS()
    },
    loadDataFromLS() {
      const value = window.localStorage.getItem('moka-weekly-email')
      try {
        this.sections = JSON.parse(value) || [this.createSection()]
      } catch (e) {
        console.error('Failed to load data from local storage: ' + e)
        this.sections = [this.createSection()]
      }
    },
    saveDataToLS() {
      window.localStorage.setItem('moka-weekly-email', JSON.stringify(this.sections))
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../palette'

.workshop
  display flex
  flex-flow row no-wrap

  &__editor
    width 50%
    height 100vh
    overflow auto

  &__previewer
    width 50%
    height 100vh
    border-left 1px solid color-grey
    overflow auto
</style>
