<template>
<div class="previewer">
  <table :style="{ width: '100%', backgroundColor: '#f4f4f6' }" ref="email">
    <tbody>
      <tr>
        <td>
          <table class="root-table" :style="[{ width: '720px', height: '100%', margin: '0 auto' }, commonTableStyle]">
            <tbody>
              <!-- head -->
              <tr>
                <td align="center">
                  <email-header :tableStyle="commonTableStyle"/>
                </td>
              </tr>

              <!-- body -->
              <tr>
                <td align="center">
                  <email-body :bannerImgUrl="bannerImgUrl" :typeToSection="typeToSection" :tableStyle="commonTableStyle"/>
                </td>
              </tr>

              <!-- footer -->
              <tr>
                <td :style="{ padding: '32px 0' }" valign="bottom">
                  <email-footer :tableStyle="commonTableStyle"/>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <button class="source-btn" @click="openSourceCodeModal">查看源代码</button>
  <div :class="['source-overlay', { active: showSourceCodeModal }]" @click="closeSourceCodeModal">
    <div class="source-modal" @click.stop="">
      <div class="modal-header">
        邮件源代码
        <span class="close-btn" @click="closeSourceCodeModal">&times;</span>
      </div>
      <div class="modal-body">
        <textarea class="source-code" :value="sourceCode"/>
      </div>
      <div class="modal-footer">
        <button class="copy-btn" @click="copySourceCode">复制</button>
        <span :class="['copy-hint', { active: copyHintActive }]">已复制！</span>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import EmailHeader from './emails/EmailHeader'
import EmailBody from './emails/EmailBody'
import EmailFooter from './emails/EmailFooter'

export default {
  name: 'Previewer',

  components: {
    EmailHeader,
    EmailBody,
    EmailFooter
  },

  props: {
    bannerImgUrl: String,
    typeToSection: Object
  },

  data() {
    return {
      commonTableStyle: {
        borderCollapse: 'collapse',
        borderSpacing: '0',
        msoTableLspace: '0',
        msoTableRspace: '0',
        fontFamily: 'Helvetica Neue, Arial, Open Sans, Hiragino Sans GB, -apple-system, Lantinghei SC, Microsoft Yahei, sans-serif'
      },
      copyHintActive: false,
      copyHintTimer: null,
      showSourceCodeModal: false,
      sourceCode: ''
    }
  },

  methods: {
    openSourceCodeModal() {
      this.sourceCode = this.$refs.email.outerHTML
      this.showSourceCodeModal = true
    },
    closeSourceCodeModal() {
      this.showSourceCodeModal = false
    },
    copySourceCode() {
      var copyTextarea = document.querySelector('.source-code')
      copyTextarea.select()

      try {
        const success = document.execCommand('copy')
        if (success) {
          clearTimeout(this.copyHintTimer)
          this.copyHintActive = true
          setTimeout(() => { this.copyHintActive = false }, 3000)
        }
      } catch (err) {
      }

      if (document.selection) {
        document.selection.empty()
      } else if (window.getSelection) {
        window.getSelection().removeAllRanges()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../palette'

.previewer
  padding 20px 0
  &:hover
    .source-btn
      right 20px

.root-table
  margin 0 auto

.source-btn
  position fixed
  right -100px
  bottom 40px
  padding .3em .5em
  font-size 1rem
  color white
  background-color color-green
  border none
  border-radius 4px
  cursor pointer
  transition right .2s
  &:hover
    background-color color-green-lighten-2

.source-modal
  width 80vw
  padding 20px
  margin 10vh auto
  background-color white
  border 1px solid color-grey-lighten-3
  border-radius 2px
  box-shadow 3px 3px 5px 0px rgba(0,0,0,0.3)

.source-overlay
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 2
  background-color rgba(0,0,0,0.7)
  opacity 0
  pointer-events none
  transition opacity .2s
  &.active
    opacity 1
    pointer-events initial

.modal-header
  position relative
  height 40px
  font-size 1.5rem

.modal-body
  margin 10px 0
  textarea
    width 100%
    height 60vh
    resize none
    border-color color-grey-lighten-3
    border-radius 2px

.modal-footer
  height 40px

.close-btn
  position absolute
  right 0
  cursor pointer
  transition transform .2s
  &:hover
    transform rotate(90deg)

.copy-btn
  float right
  padding .3em .5em
  font-size 1rem
  color white
  border 2px solid
  border-radius 4px
  cursor pointer
  background-color color-blue
  &:hover
    background-color color-blue-lighten-2

.copy-hint
  float right
  line-height 30px
  color color-green
  opacity 0
  transition opacity .2s
  &.active
    opacity 1
</style>
