<template>
<table :style="[{ width: '720px', fontSize: '13px' }, tableStyle]">
  <tbody>
    <tr :style="{ height: '24px' }">
      <td :style="{ paddingBottom: '10px', color: '#5C6170' }">
        Moka -- 智能化招聘CRM
      </td>
      <td :style="{ paddingBottom: '10px', textAlign: 'right', color: '#0C8CF6' }">
        <a :style="{ color: '#0C8CF6', textDecoration: 'none' }" href="http://www.mokahr.com">www.mokahr.com</a>
      </td>
    </tr>
    <tr>
      <td :style="{ height: '3px', backgroundColor: '#DDDFE3' }" colspan="2"></td>
    </tr>
    <tr>
      <td :style="{ paddingTop: '10px', color: 'black' }">
        北京希瑞亚斯科技有限公司
      </td>
      <td :style="{ paddingTop: '10px', color: 'black', textAlign: 'right' }">
        联系电话：010-57169313
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
  }
}
</script>
