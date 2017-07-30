<template>
<div class="panel">
  <div class="section-title text-input">
    <label>标题</label>
    <input
      :value="title"
      @input="sectionChange('newFeatures', 'title', $event.target.value)"
      placeholder="段落标题"
    />
  </div>
  <div class="text-input">
    <label>左底图</label>
    <input
      :value="bottomLeftImg"
      @input="sectionChange('newFeatures', 'bottomLeftImg', $event.target.value)"
      placeholder="左侧图片链接"
    />
  </div>
  <div class="text-input">
    <label>左底文字</label>
    <input
      :value="bottomLeftTxt"
      @input="sectionChange('newFeatures', 'bottomLeftTxt', $event.target.value)"
      placeholder="左侧图片文字"
    />
  </div>
  <div class="text-input">
    <label>左底链接</label>
    <input
      :value="bottomLeftLink"
      @input="sectionChange('newFeatures', 'bottomLeftLink', $event.target.value)"
      placeholder="左侧图片链接"
    />
  </div>
  <div class="text-input">
    <label>右底图</label>
    <input
      :value="bottomLeftImg"
      @input="sectionChange('newFeatures', 'bottomRightImg', $event.target.value)"
      placeholder="右侧图片文字"
    />
  </div>
  <div class="text-input">
    <label>右底文字</label>
    <input
      :value="bottomRightTxt"
      @input="sectionChange('newFeatures', 'bottomRightTxt', $event.target.value)"
      placeholder="右侧图片文字"
    />
  </div>
  <div class="text-input">
    <label>右底链接</label>
    <input
      :value="bottomRightLink"
      @input="sectionChange('newFeatures', 'bottomRightLink', $event.target.value)"
      placeholder="右侧图片链接"
    />
  </div>
  <div v-for="(article, articleIdx) in articles" :key="article.id" class="panel">
    <div class="order">
      {{{ newFeature: '新功能', enhancement: '优化' }[article.type]}}#{{articleIdx + 1}}
      <button class="delete-btn" @click="removeArticle('newFeatures', article.id)">删除</button>
    </div>
    <div class="article-title text-input">
      <label :for="`article-title-${article.id}`">标题</label>
      <input
        :id="`article-title-${article.id}`"
        :value="article.title"
        @input="articleChange('newFeatures', article.id, 'title', $event.target.value)"
        placeholder="文章标题"
      />
    </div>
    <div class="article-preview-text text-input">
      <label :for="`article-preview-text-${article.id}`">简介</label>
      <textarea
        :id="`article-preview-text-${article.id}`"
        :value="article.abstract"
        @input="articleChange('newFeatures', article.id, 'abstract', $event.target.value)"
        placeholder="文章简介"
      />
    </div>
  </div>
  <div class="add-btn-wrapper">
    <button class="add-btn" @click="appendArticle('newFeatures', defaultNewFeature)">添加新功能</button>
    <button class="add-btn" @click="appendArticle('newFeatures', defaultEnhancement)">添加优化</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'NewFeatures',

  props: {
    title: String,
    articles: Array,
    bottomLeftImg: String,
    bottomLeftTxt: String,
    bottomLeftLink: String,
    bottomRightImg: String,
    bottomRightTxt: String,
    bottomRightLink: String,
    appendArticle: Function,
    removeArticle: Function,
    sectionChange: Function,
    articleChange: Function
  },

  data() {
    return {
      defaultNewFeature: {
        type: 'newFeature',
        title: '',
        abstract: ''
      },
      defaultEnhancement: {
        type: 'enhancement',
        title: '',
        abstract: ''
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
