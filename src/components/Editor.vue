<template>
<div class="editor">
  <div class="panel">
    <div class="text-input">
      <label for="banner">Banner图片</label>
      <input id="banner" :value="bannerImgUrl" @input="bannerImgUrlChange($event.target.value)"/>
    </div>
  </div>
  <div v-if="sections.length <= 0" class="empty-hint">邮件里面什么也没有，你不会打算就这样发了吧？</div>
  <div v-else v-for="(section, sectionIdx) in sections" :key="section.id" class="panel">
    <div class="order">
      段落#{{sectionIdx + 1}}
      <button class="delete-btn" @click="removeSection(section.id)">删除</button>
    </div>
    <div class="section-title text-input">
      <label :for="section.id">标题</label>
      <input
        :id="section.id"
        :value="section.title"
        @input="sectionChange(section.id, 'title', $event.target.value)"
      />
    </div>
    <div v-for="(article, articleIdx) in section.articles" :key="article.id" class="panel">
      <div class="order">
        文章#{{articleIdx + 1}}
        <button class="delete-btn" @click="removeArticle(section.id, article.id)">删除</button>
      </div>
      <div class="article-title text-input">
        <label :for="`article-title-${article.id}`">标题</label>
        <input
          :id="`article-title-${article.id}`"
          :value="article.title"
          @input="articleChange(section.id, article.id, 'title', $event.target.value)"
        />
      </div>
      <div class="article-preview-text text-input">
        <label :for="`article-preview-text-${article.id}`">简介</label>
        <textarea
          :id="`article-preview-text-${article.id}`"
          :value="article.previewText"
          @input="articleChange(section.id, article.id, 'previewText', $event.target.value)"
        />
      </div>
      <div class="article-img-url text-input">
        <label :for="`article-img-url-${article.id}`">配图</label>
        <input
          :id="`article-img-url-${article.id}`"
          :value="article.imgUrl"
          @input="articleChange(section.id, article.id, 'imgUrl', $event.target.value)"
        />
      </div>
      <div class="article-link text-input">
        <label :for="`article-link-${article.id}`">链接</label>
        <input
          :id="`article-link-${article.id}`"
          :value="article.link"
          @input="articleChange(section.id, article.id, 'link', $event.target.value)"
        />
      </div>
      <div class="article-link-text text-input">
        <label :for="`article-link-text-${article.id}`">链接文字</label>
        <input
          :id="`article-link-text-${article.id}`"
          :value="article.linkText"
          @input="articleChange(section.id, article.id, 'linkText', $event.target.value)"
        />
      </div>
    </div>
    <div class="add-btn-wrapper">
      <button class="add-btn" @click="appendArticle(section.id)">添加文章</button>
    </div>
  </div>
  <div class="add-btn-wrapper add-section">
    <button class="add-btn" @click="appendSection">添加段落</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Editor',

  props: {
    bannerImgUrl: String,
    sections: Array,
    sectionChange: Function,
    articleChange: Function,
    appendSection: Function,
    appendArticle: Function,
    removeSection: Function,
    removeArticle: Function,
    bannerImgUrlChange: Function
  }
}
</script>

<style lang="stylus" scoped>
@require '../palette'

.text-input
  display flex
  min-height 30px
  width 100%
  margin 5px 0
  font-size 1.125rem
  line-height 1.5
  label
    flex none
    width 100px
    margin-right 1em
    text-align right
  input
    flex 1
    height 30px
    padding 0 .8em
    border none
    background-color color-grey-lighten-4
    border-radius 2px
  textarea
    flex 1
    min-height 6em
    padding .5em .8em
    border none
    background-color color-grey-lighten-4
    border-radius 2px
    resizable none

.panel
  margin 10px 0
  padding 10px 20px
  border 1px solid color-grey-lighten-3
  border-radius 2px
  box-shadow 1px 1px 2px 0px rgba(0,0,0,0.2)
  transition box-shadow .2s
  &:hover
    box-shadow 3px 3px 5px 0px rgba(0,0,0,0.3)

.editor
  padding 20px

.order
  margin-bottom 10px
  font-size 1.5rem
  color color-blue

.section-title
  margin-bottom 20px

.add-section
  padding-right 20px

.add-btn-wrapper
  text-align right

$common-btn
  padding .3em .5em
  font-size 1rem
  color white
  border 2px solid
  border-radius 4px
  cursor pointer

.add-btn
  @extends $common-btn
  background-color color-blue
  &:hover
    background-color color-blue-lighten-2

.delete-btn
  @extends $common-btn
  float right
  font-size .8rem
  background-color color-red-darken-1
  &:hover
    background-color color-red-lighten-1

.empty-hint
  margin 50px 0
  text-align center
  font-size 1.5rem
  color color-grey
</style>

