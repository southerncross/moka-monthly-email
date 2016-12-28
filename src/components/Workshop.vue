<template>
<div class="workshop">
  <div class="workshop__editor">
    <editor
      :bannerImgUrl="bannerImgUrl"
      :sections="sections"
      :sectionChange="sectionChange"
      :articleChange="articleChange"
      :appendSection="appendSection"
      :appendArticle="appendArticle"
      :removeSection="removeSection"
      :removeArticle="removeArticle"
      :bannerImgUrlChange="bannerImgUrlChange"
    />
  </div>
  <div class="workshop__previewer">
    <previewer :bannerImgUrl="bannerImgUrl" :sections="sections"/>
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
      bannerImgUrl: '',
      sections: []
    }
  },

  mounted() {
    this.loadSectionsFromLS()
    this.loadBannerFromLS()
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
      this.saveSectionsToLS()
    },
    articleChange(sectionId, articleId, key, value) {
      const section = this.sections.find((section) => section.id === sectionId)
      const article = section.articles.find((article) => article.id === articleId)
      article[key] = value
      this.saveSectionsToLS()
    },
    appendSection() {
      this.sections.push(this.createSection())
      this.saveSectionsToLS()
    },
    appendArticle(sectionId) {
      const section = this.sections.find((section) => section.id === sectionId)
      section.articles.push(this.createArticle())
      this.saveSectionsToLS()
    },
    removeSection(sectionId) {
      this.sections = this.sections.filter((section) => section.id !== sectionId)
      this.saveSectionsToLS()
    },
    removeArticle(sectionId, articleId) {
      const section = this.sections.find((section) => section.id === sectionId)
      section.articles = section.articles.filter((article) => article.id !== articleId)
      this.saveSectionsToLS()
    },
    bannerImgUrlChange(url) {
      this.bannerImgUrl = url
      this.saveBannerToLS()
    },
    loadBannerFromLS() {
      const value = window.localStorage.getItem('moka-weekly-email__banner')
      try {
        this.bannerImgUrl = JSON.parse(value) || ''
      } catch (e) {
        console.error('Failed to load data from local storage: ' + e)
        this.bannerImgUrl = ''
      }
    },
    saveBannerToLS() {
      window.localStorage.setItem('moka-weekly-email__banner', JSON.stringify(this.bannerImgUrl))
    },
    loadSectionsFromLS() {
      const value = window.localStorage.getItem('moka-weekly-email__section')
      try {
        this.sections = JSON.parse(value) || [this.createSection()]
      } catch (e) {
        console.error('Failed to load data from local storage: ' + e)
        this.sections = [this.createSection()]
      }
    },
    saveSectionsToLS() {
      window.localStorage.setItem('moka-weekly-email__section', JSON.stringify(this.sections))
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
