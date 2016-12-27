<template>
<table :style="{ width: 672 + 'px' }">
  <tbody>
    <tr :style="{ height: 168 + 'px' }">
      <!-- QR code -->
      <td valign="top" :style="{ width: 192 + 'px' }">
        <img :style="{ width: 144 + 'px' }" src="http://blog.mokahr.com/wp-content/uploads/2016/10/qrcode.jpg"/>
      </td>
      <!-- Contact info -->
      <td valign="top">
        <table>
          <tbody>
            <tr :style="{ height: 40 + 'px' }">
              <td :style="{ width: 30 + 'px' }">
                <img :style="{ width: 15 + 'px' }" src="https://public-cdn.mokahr.com/mkt/tel.png"/>
              </td>
              <td :style="{ fontSize: 13 + 'px', color: '#5C6170' }">
                {{phone}}
              </td>
            </tr>
            <tr :style="{ height: 40 + 'px' }">
              <td :style="{ width: 30 + 'px' }">
                <img :style="{ width: 15 + 'px' }" src="https://public-cdn.mokahr.com/mkt/tel.png"/>
              </td>
              <td :style="{ fontSize: 13 + 'px', color: '#5C6170' }">
                <a :style="{ color: '#0C8CF6', textDecoration: 'none' }" :href="`mailto:${email}`">
                  {{email}}
                </a>
              </td>
            </tr>
            <tr :style="{ height: 40 + 'px' }">
              <td :style="{ width: 30 + 'px' }">
                <img :style="{ width: 15 + 'px' }" src="https://public-cdn.mokahr.com/mkt/tel.png"/>
              </td>
              <td :style="{ fontSize: 13 + 'px', color: '#5C6170' }">
                {{location}}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center" :style="{ height: 90 + 'px', borderTop: '1px solid #DDDFE3' }">
        <table>
          <tbody>
            <tr>
              <td :style="{ fontSize: 13 + 'px', lineHeight: 24 + 'px', color: '#9A9FAC' }">
                {{copyrightZh}}
              </td>
            </tr>
            <tr>
              <td :style="{ fontSize: 13 + 'px', lineHeight: 24 + 'px', color: '#9A9FAC' }">
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

  data() {
    return {
      phone: '(010) 57134227',
      email: 'hello@mokahr.com',
      location: '北京市海淀区 中关村大街 1 号 海龙大厦 1502#',
      copyrightZh: '版权所有©北京希瑞亚斯科技有限公司',
      copyrightEn: 'Copyright© Sirius Corporation,LTD.'
    }
  }
}
</script>
