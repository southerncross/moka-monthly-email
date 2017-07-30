<template>
<table :style="[{ width: '720px', height: '80px', padding: '20px 0' }, tableStyle]">
  <tbody>
    <tr>
      <td>
        <a href="http://www.mokahr.com" target="_blank">
          <div :style="[spriteStyle, logoSprite]"/>
        </a>
      </td>
      <td :style="{ textAlign: 'right' }">
        <a
          _target="blank"
          href="http://www.mokahr.com/subscribe-email"
          :style="{
            display: 'inline-block',
            padding: '6px 16px',
            fontSize: '13px',
            lineHeight: 1,
            textDecoration: 'none',
            color: 'white',
            backgroundColor: '#0C8CF6',
            border: '1px solid #087BD9',
            borderRadius: '28px',
            cursor: 'pointer'
          }"
        >
          申请订阅
          <span :style="[{ display: 'inline-block', verticalAlign: '-3px' }, spriteStyle, checkSprite]"/>
        </a>
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
      spriteStyle: {
        backgroundImage: 'url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)',
        backgroundRepeat: 'no-repeat'
      },
      logoSprite: {
        width: '158px',
        height: '32px',
        backgroundPosition: '-0px -0px'
      },
      checkSprite: {
        width: '16px',
        height: '16px',
        backgroundPosition: '-84px -32px'
      }
    }
  }
}
</script>
