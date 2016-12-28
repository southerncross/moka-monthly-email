<template>
<table :style="{ width: 672 + 'px', height: 100 + 'px', borderCollapse: 'collapse' }">
  <tbody>
    <tr>
      <td>
        <a href="http://www.mokahr.com" target="_blank">
          <div :style="[{ width: 142 + 'px', height: 28 + 'px' }, spriteStyle, logoSprite]"/>
        </a>
      </td>
      <td :style="{ textAlign: 'right' }">
        <a
          _target="blank"
          href="www.mokahr.com"
          :style="{
            display: 'inline-block',
            height: 40 + 'px',
            padding: '0 16px',
            fontSize: 14 + 'px',
            lineHeight: 40 + 'px',
            textDecoration: 'none',
            color: '#787E91',
            border: '1px solid #DDDFE3',
            borderRadius: 2 + 'px'
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
