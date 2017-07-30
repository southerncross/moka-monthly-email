<template>
<div class="workshop">
  <div class="workshop__editor">
    <editor
      :bannerImgUrl="bannerImgUrl"
      :typeToSection="typeToSection"
      :sectionChange="sectionChange"
      :articleChange="articleChange"
      :appendArticle="appendArticle"
      :removeArticle="removeArticle"
      :bannerImgUrlChange="bannerImgUrlChange"
    />
  </div>
  <div class="workshop__previewer">
    <previewer :bannerImgUrl="bannerImgUrl" :typeToSection="typeToSection"/>
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
      bannerImgUrl: 'http://www.mokahr.com/images/home/banner.jpg',
      typeToSection: {
        weeklyNews: {
          title: '本周内容',
          articles: [
            {
              title: '干货 | HR的三支柱与「灰度」',
              abstract: 'HR三支柱模型大约形成在上世纪90年代，分别是COE、HRBP、SSC。本文从三支柱是什么入手，介绍了三个部门的工作以及企业应该在什么时候从六模块转向三支柱，希望能给你启发。',
              imgUrl: 'http://www.mokahr.com/images/home/banner.jpg',
              link: 'http://www.mokahr.com',
              linkText: '了解更多'
            },
            {
              title: '经验 | 招聘——得渠道者得天下',
              abstract: '招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合适的渠道。',
              imgUrl: 'http://www.mokahr.com/images/home/banner.jpg',
              link: 'http://www.mokahr.com',
              linkText: '了解更多'
            }
          ]
        },
        activities: {
          title: 'Moka活动',
          articles: [
            {
              title: 'Selecting The Right Hotel',
              subtitle: '时间：2017-02-23  15：23    地点：北京市朝阳区望京桥77 Enoch Branch',
              abstract: '招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合',
              link: 'http://www.mokahr.com',
              linkText: '了解更多'
            },
            {
              title: 'A Sound Way To Treat Hearing Loss In Children',
              subtitle: '时间：2017-02-23  15：23    地点：北京市朝阳区望京桥77 Enoch Branch',
              abstract: '招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合',
              link: 'http://www.mokahr.com',
              linkText: '了解更多'
            }
          ]
        },
        newFeatures: {
          title: 'Moka产品更新',
          articles: [
            {
              title: '优化 | 移动端微官网全面升级',
              abstract: '此次更新使得移动端微官网有了PC端官网一样强大的可配置性。用户可以为主页添加四类模块，并上传不同的图片，充分展示雇主特色，打造雇主品牌。',
              type: 'enhancement'
            },
            {
              title: '新增 | 用人部门移动端联系候选人',
              abstract: '用人部门移动端可以在面试环节下的候选人详情页里直接打电话联系候选人。省去了输入电话再拨打的麻烦。',
              type: 'newFeature'
            }
          ],
          bottomLeftImg: 'http://www.mokahr.com/images/home/banner.jpg',
          bottomLeftTxt: '12 Handy Tips For Generating Leads Through Cold Calling',
          bottomLeftLink: 'http://www.mokahr.com',
          bottomRightImg: 'http://www.mokahr.com/images/home/banner.jpg',
          bottomRightTxt: '12 Handy Tips For Generating Leads Through Cold Calling',
          bottomRightLink: 'http://www.mokahr.com'
        }
      }
    }
  },

  mounted() {
    this.loadTypeToSectionFromLS()
    this.loadBannerFromLS()
  },

  methods: {
    sectionChange(sectionType, key, value) {
      const section = this.typeToSection[sectionType]
      section[key] = value
      console.warn('boring wtf', JSON.parse(JSON.stringify(this.typeToSection)))
      this.saveTypeToSectionToLS()
    },
    articleChange(sectionType, articleId, key, value) {
      const section = this.typeToSection[sectionType]
      const article = section.articles.find((article) => article.id === articleId)
      article[key] = value
      this.saveTypeToSectionToLS()
    },
    appendArticle(sectionType, defaultValue) {
      const section = this.typeToSection[sectionType]
      section.articles.push({ ...defaultValue, id: randomId() })
      this.saveTypeToSectionToLS()
    },
    removeArticle(sectionType, articleId) {
      const section = this.typeToSection[sectionType]
      section.articles = section.articles.filter((article) => article.id !== articleId)
      this.saveTypeToSectionToLS()
    },
    bannerImgUrlChange(url) {
      this.bannerImgUrl = url
      this.saveBannerToLS()
    },
    loadBannerFromLS() {
      const value = window.localStorage.getItem('moka-weekly-email__banner')
      try {
        this.bannerImgUrl = JSON.parse(value) || this.bannerImgUrl
      } catch (e) {
        console.error('Failed to load data from local storage: ' + e)
      }
    },
    saveBannerToLS() {
      window.localStorage.setItem('moka-weekly-email__banner', JSON.stringify(this.bannerImgUrl))
    },
    loadTypeToSectionFromLS() {
      const value = window.localStorage.getItem('moka-weekly-email__type-to-section')
      try {
        this.typeToSection = JSON.parse(value) || this.typeToSection
      } catch (e) {
        console.error('Failed to load data from local storage: ' + e)
      }
    },
    saveTypeToSectionToLS() {
      window.localStorage.setItem('moka-weekly-email__type-to-section', JSON.stringify(this.typeToSection))
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
    width 40%
    height 100vh
    overflow auto

  &__previewer
    width 60%
    height 100vh
    border-left 1px solid color-grey
    background-color color-grey-lighten-4
    overflow auto
</style>
