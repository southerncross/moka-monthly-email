<template>
<table :style="[{ width: '672px' }, tableStyle]">
  <tbody>
    <tr :style="{ height: '168px' }">
      <!-- QR code -->
      <td valign="top" :style="{ width: '192px' }">
        <div :style="[{ width: '144px', height: '144px' }, spriteStyle, qrcodeSprite]"/>
      </td>
      <!-- Contact info -->
      <td valign="top">
        <table :style="tableStyle">
          <tbody>
            <tr :style="{ height: '40px' }">
              <td :style="{ width: '30px' }">
                <div :style="[{ width: '15px', height: '15px' }, spriteStyle, telephoneSprite]"/>
              </td>
              <td :style="{ fontSize: '13px', color: '#5C6170' }">
                {{phone}}
              </td>
            </tr>
            <tr :style="{ height: '40px' }">
              <td :style="{ width: '30px' }">
                <div :style="[{ width: '15px', height: '15px' }, spriteStyle, emailSprite]"/>
              </td>
              <td :style="{ fontSize: '13px', color: '#5C6170' }">
                <a :style="{ color: '#0C8CF6', textDecoration: 'none' }" :href="`mailto:${email}`">
                  {{email}}
                </a>
              </td>
            </tr>
            <tr :style="{ height: '40px' }">
              <td :style="{ width: '30px' }">
                <div :style="[{ width: '15px', height: '15px' }, spriteStyle, locationSprite]"/>
              </td>
              <td :style="{ fontSize: '13px', color: '#5C6170' }">
                {{location}}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center" :style="{ height: '90px', borderTop: '1px solid #DDDFE3' }">
        <table :style="tableStyle">
          <tbody>
            <tr>
              <td :style="{ fontSize: '13px', lineHeight: '24px', color: '#9A9FAC' }" align="center">
                {{copyrightZh}}
              </td>
            </tr>
            <tr>
              <td :style="{ fontSize: '13px', lineHeight: '24px', color: '#9A9FAC' }" align="center">
                {{copyrightEn}}
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
  name: 'EmailHeader',

  props: {
    tableStyle: Object
  },

  data() {
    return {
      phone: '(010) 57134227',
      email: 'hello@mokahr.com',
      location: '北京市海淀区 中关村大街 1 号 海龙大厦 1502#',
      copyrightZh: '版权所有©北京希瑞亚斯科技有限公司',
      copyrightEn: 'Copyright© Sirius Corporation,LTD.',
      spriteStyle: {
        backgroundImage: 'url(https://public-cdn.mokahr.com/mkr/email_sprite.png)',
        backgroundRepeat: 'no-repeat'
      },
      qrcodeSprite: {
        width: '144px',
        height: '144px',
        backgroundPosition: '-155px -5px'
      },
      locationSprite: {
        width: '16px',
        height: '16px',
        backgroundPosition: '-31px -5px'
      },
      emailSprite: {
        width: '16px',
        height: '16px',
        backgroundPosition: '-5px -5px'
      },
      telephoneSprite: {
        width: '16px',
        height: '16px',
        backgroundPosition: '-57px -5px'
      }
    }
  }
}
</script>
