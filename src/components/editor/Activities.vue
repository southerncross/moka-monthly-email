<template>
<div class="panel">
  <div class="section-title text-input">
    <label>标题</label>
    <input
      :value="title"
      @input="sectionChange('activities', 'title', $event.target.value)"
      placeholder="段落标题"
    />
  </div>
  <div v-for="(article, articleIdx) in articles" :key="article.id" class="panel">
    <div class="order">
      活动#{{articleIdx + 1}}
      <button class="delete-btn" @click="removeArticle('activities', article.id)">删除</button>
    </div>
    <div class="article-title text-input">
      <label :for="`article-title-${article.id}`">标题</label>
      <input
        :id="`article-title-${article.id}`"
        :value="article.title"
        @input="articleChange('activities', article.id, 'title', $event.target.value)"
        placeholder="文章标题"
      />
    </div>
    <div class="article-title text-input">
      <label :for="`article-title-${article.id}`">副标题</label>
      <input
        :id="`article-title-${article.id}`"
        :value="article.subtitle"
        @input="articleChange('activities', article.id, 'subtitle', $event.target.value)"
        placeholder="文章副标题"
      />
    </div>
    <div class="article-preview-text text-input">
      <label :for="`article-preview-text-${article.id}`">简介</label>
      <textarea
        :id="`article-preview-text-${article.id}`"
        :value="article.abstract"
        @input="articleChange('activities', article.id, 'abstract', $event.target.value)"
        placeholder="文章简介"
      />
    </div>
    <div class="article-link text-input">
      <label :for="`article-link-${article.id}`">链接</label>
      <input
        :id="`article-link-${article.id}`"
        :value="article.link"
        @input="articleChange('activities', article.id, 'link', $event.target.value)"
        placeholder="文章链接"
      />
    </div>
    <div class="article-link-text text-input">
      <label :for="`article-link-text-${article.id}`">链接文字</label>
      <input
        :id="`article-link-text-${article.id}`"
        :value="article.linkText"
        @input="articleChange('activities', article.id, 'linkText', $event.target.value)"
        placeholder="文章链接显示文字，例如“查看更多”"
      />
    </div>
  </div>
  <div class="add-btn-wrapper">
    <button class="add-btn" @click="appendArticle('activities', defaultArticle)">添加活动</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Activities',

  props: {
    title: String,
    articles: Array,
    appendArticle: Function,
    removeArticle: Function,
    sectionChange: Function,
    articleChange: Function
  },

  data() {
    return {
      defaultArticle: {
        title: '',
        subtitle: '',
        abstract: '',
        link: '',
        linkText: ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require './commonStyle'

.text-input
  @extends $text-input

.panel
  @extends $panel

.editor
  padding 20px

.order
  height 30px

.add-btn-wrapper
  text-align right

.add-btn
  @extends $add-btn

.delete-btn
  @extends $delete-btn
</style>
