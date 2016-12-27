<template>
<table :style="{ width: 672 + 'px' }">
  <tbody>
    <!-- Title image -->
    <tr :style="{ height: 245 + 'px' }">
      <td>
        <img :style="{ width: 672 + 'px' }" src="http://blog.mokahr.com/wp-content/uploads/2016/12/%E6%9C%88%E5%88%8Abanner.png"/>
      </td>
    </tr>

    <!-- Sections -->
    <tr v-for="section in sections">
      <td>
        <table :style="{ width: '100%' }">
          <tbody>
            <!-- Section title -->
            <tr :style="{ height: 84 + 'px' }">
              <td
                colspan="2"
                :style="{
                  fontSize: 24 + 'px',
                  fontWeight: 'bold',
                  color: '#40444F',
                  borderBottom: '1px solid #DDDFE3'
                }"
              >
                {{section.title}}
              </td>
            </tr>
            <!-- Articles -->
            <tr v-for="article in section.articles" :style="{ height: 153 + 'px' }">
              <td :style="{ width: 192 + 'px' }">
                <img :style="{ width: 114 + 'px', borderRadius: 2 + 'px' }" :src="article.imgUrl"/></td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: 12 + 'px',
                          fontSize: 20 + 'px',
                          fontWeight: 'bold',
                          lineHeight: 30 + 'px',
                          color: '#40444F'
                        }"
                      >
                        {{article.title}}
                      </td>
                    </tr>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: 5 + 'px',
                          fontSize: 13 + 'px',
                          lineHeight: 20 + 'px',
                          color: '#40444F'
                        }">
                          {{article.previewText}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          _target="blank"
                          :href="article.link"
                          :style="{
                            fontSize: 13 + 'px',
                            color: '#0C8CF6',
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
  name: 'EmailBody',

  props: {
    sections: Array
  }
}
</script>
