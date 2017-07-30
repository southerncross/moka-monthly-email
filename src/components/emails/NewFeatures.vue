<template>
<table :style="[{ width: '100%', backgroundColor: 'white' }, tableStyle]">
  <tbody>
    <!-- Section title -->
    <tr>
      <td
        colspan="2"
        :style="{
          padding: '36px 48px 0 48px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black'
        }"
      >
        {{title}}
      </td>
    </tr>
    <!-- Articles -->
    <tr>
      <td :style="{ padding: '20px 48px' }" valign="top">
        <table>
          <tbody>
            <tr v-for="(article, idx) in articles" :key="article.id">
              <td :style="{ width: '17px', borderLeft: '1px solid #F4F4F6' }" valign="top">
                <div :style="{ height: '38px', borderBottom: '1px solid #F4F4F6' }"/>
              </td>
              <td :style="{ width: '35px', paddingTop: '23px' }" valign="top">
                <div :style="[spriteStyle, article.type === 'newFeature' ? rocketSprite: thunderSprite]" :src="article.imgUrl"/>
              </td>
              <td valign="top" :style="{ padding: '14px 48px 0 0' }">
                <table :style="tableStyle">
                  <tbody>
                    <tr>
                      <td
                        :style="{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          lineHeight: '40px',
                          color: 'black'
                        }"
                      >
                        {{article.title}}
                      </td>
                    </tr>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '5px',
                          fontSize: '15px',
                          lineHeight: '20px',
                          color: '#090A0B'
                        }">
                          {{article.subtitle}}
                      </td>
                    </tr>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '5px',
                          fontSize: '13px',
                          lineHeight: '20px',
                          color: '#5C6170'
                        }">
                          {{article.abstract}}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>

    <tr>
      <td :style="{ paddingTop: '10px', textAlign: 'center' }">
        <a href="http://www.mokahr.com"
          _target="blank"
          :style="{
            display: 'inline-block',
            padding: '13px 91px',
            fontSize: '13px',
            color: 'white',
            backgroundColor: '#0C8CF6',
            borderColor: '#087BD9',
            borderRadius: '28px',
            textDecoration: 'none'
          }"
        >
          申请试用
        </a>
      </td>
    </tr>

    <tr>
      <td :style="{ padding: '24px 47px' }">
        <table :style="tableStyle">
          <tbody>
            <tr>
              <td :style="{ width: '312px', padding: '15px 16px', border: '1px solid #DDDFE3' }">
                <a :href="bottomLeftLink" target="_blank">
                  <img :src="bottomLeftImg" :style="{ width: '100%' }"/>
                </a>
                <div :style="{ padding: '10px 0 4px 0', fontSize: '15px', lineHeight: '20px', color: '#5C6170', textAlign: 'center' }">{{bottomLeftTxt}}</div>
              </td>
              <td :style="{ width: '312px', padding: '15px 16px', border: '1px solid #DDDFE3' }">
                <a :href="bottomRightLink" target="_blank">
                  <img :src="bottomRightImg" :style="{ width: '100%' }"/>
                </a>
                <div :style="{ padding: '10px 0 4px 0', fontSize: '15px', lineHeight: '20px', color: '#5C6170', textAlign: 'center' }">{{bottomRightTxt}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'NewFeatures',

  props: {
    tableStyle: Object,
    title: String,
    articles: Array,
    bottomLeftImg: String,
    bottomLeftTxt: String,
    bottomLeftLink: String,
    bottomRightImg: String,
    bottomRightTxt: String,
    bottomRightLink: String
  },

  data() {
    return {
      spriteStyle: {
        backgroundImage: 'url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)',
        backgroundRepeat: 'no-repeat'
      },
      rocketSprite: {
        width: '28px',
        height: '28px',
        overflow: 'hidden',
        backgroundPosition: '-0px -32px'
      },
      thunderSprite: {
        width: '28px',
        height: '28px',
        backgroundPosition: '-56px -32px'
      }
    }
  }
}
</script>

<style>
</style>
