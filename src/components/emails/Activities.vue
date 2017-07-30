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
            <tr v-for="(article, idx) in articles" :key="article.id" :style="{ height: '153px' }">
              <td :style="{ width: '17px', borderLeft: '1px solid #F4F4F6' }" valign="top">
                <div :style="{ height: '38px', borderBottom: '1px solid #F4F4F6' }"/>
              </td>
              <td :style="{ width: '35px', paddingTop: '22px' }" valign="top">
                <div :style="[spriteStyle, speakSprite]" :src="article.imgUrl"/>
              </td>
              <td valign="top" :style="{ padding: '14px 48px 18px 0' }">
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
                    <tr>
                      <td>
                        <a
                          _target="blank"
                          :href="article.link"
                          :style="{
                            display: 'inline-block',
                            padding: '7px 16px',
                            fontSize: '13px',
                            color: 'white',
                            backgroundColor: '#0C8CF6',
                            borderColor: '#087BD9',
                            borderRadius: '28px',
                            textDecoration: 'none'
                          }"
                        >
                          {{article.linkText}}
                        </a>
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
  </tbody>
</table>
</template>

<script>
export default {
  name: 'Activities',

  props: {
    tableStyle: Object,
    title: String,
    articles: Array
  },

  data() {
    return {
      spriteStyle: {
        backgroundImage: 'url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)',
        backgroundRepeat: 'no-repeat'
      },
      speakSprite: {
        width: '28px',
        height: '28px',
        backgroundPosition: '-28px -32px'
      }
    }
  }
}
</script>

<style>
</style>
