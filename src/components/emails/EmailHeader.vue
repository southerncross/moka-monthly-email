<template>
<table :style="[{ width: '672px', height: '100px' }, tableStyle]">
  <tbody>
    <tr>
      <td>
        <a href="http://www.mokahr.com" target="_blank">
          <div :style="[{ width: '142px', height: '28px' }, spriteStyle, logoSprite]"/>
        </a>
      </td>
      <td :style="{ textAlign: 'right' }">
        <a
          _target="blank"
          href="http://www.mokahr.com"
          :style="{
            display: 'inline-block',
            padding: '13px 16px',
            fontSize: '14px',
            lineHeight: 1,
            textDecoration: 'none',
            color: '#787E91',
            border: '1px solid #DDDFE3',
            borderRadius: '2px',
            cursor: 'pointer'
          }"
        >
          进入官网
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
        backgroundImage: 'url(https://public-cdn.mokahr.com/mkr/email_sprite.png)',
        backgroundRepeat: 'no-repeat'
      },
      logoSprite: {
        width: '140px',
        height: '28px',
        backgroundPosition: '-5px -31px'
      }
    }
  }
}
</script>
