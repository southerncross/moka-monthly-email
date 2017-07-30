<template>
<div class="editor">
  <div class="panel">
    <div class="text-input">
      <label for="banner">Banner图片</label>
      <input id="banner" :value="bannerImgUrl" @input="bannerImgUrlChange($event.target.value)" placeholder="Banner图片链接"/>
    </div>
  </div>
  <weekly-news
    :title="typeToSection['weeklyNews'].title"
    :articles="typeToSection['weeklyNews'].articles"
    :appendArticle="appendArticle"
    :removeArticle="removeArticle"
    :sectionChange="sectionChange"
    :articleChange="articleChange"
  />
  <activities
    :title="typeToSection['activities'].title"
    :articles="typeToSection['activities'].articles"
    :appendArticle="appendArticle"
    :removeArticle="removeArticle"
    :sectionChange="sectionChange"
    :articleChange="articleChange"
  />
  <new-features
    :title="typeToSection['newFeatures'].title"
    :articles="typeToSection['newFeatures'].articles"
    :bottomLeftImg="typeToSection['newFeatures'].bottomLeftImg"
    :bottomLeftTxt="typeToSection['newFeatures'].bottomLeftTxt"
    :bottomLeftLink="typeToSection['newFeatures'].bottomLeftLink"
    :bottomRightImg="typeToSection['newFeatures'].bottomRightImg"
    :bottomRightTxt="typeToSection['newFeatures'].bottomRightTxt"
    :bottomRightLink="typeToSection['newFeatures'].bottomRightLink"
    :appendArticle="appendArticle"
    :removeArticle="removeArticle"
    :sectionChange="sectionChange"
    :articleChange="articleChange"
  />
</div>
</template>

<script>
import WeeklyNews from './editor/WeeklyNews'
import NewFeatures from './editor/NewFeatures'
import Activities from './editor/Activities'

export default {
  name: 'Editor',

  components: {
    WeeklyNews,
    NewFeatures,
    Activities
  },

  props: {
    bannerImgUrl: String,
    typeToSection: Object,
    sectionChange: Function,
    articleChange: Function,
    appendArticle: Function,
    removeArticle: Function,
    bannerImgUrlChange: Function
  }
}
</script>

<style lang="stylus" scoped>
@require '../palette'
@require './editor/commonStyle'

.text-input
  @extends $text-input

.panel
  @extends $panel

.editor
  padding 20px

.add-btn-wrapper
  text-align right

.add-btn
  @extends $add-btn

.delete-btn
  @extends $delete-btn
</style>

