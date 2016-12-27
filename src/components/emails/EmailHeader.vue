<template>
<table :style="{ width: 672 + 'px', height: 100 + 'px' }">
  <tbody>
    <tr>
      <td>
        <img :style="{ height: 28 + 'px' }" src="http://blog.mokahr.com/wp-content/uploads/2016/10/logo-250.png"/>
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
  name: 'EmailHeader'
}
</script>
