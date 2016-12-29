<template>
<table :style="[{ width: '672px' }, tableStyle]">
  <tbody>
    <!-- Title image -->
    <tr :style="{ height: '245px' }">
      <td>
        <img :style="{ width: '672px' }" :src="bannerImgUrl"/>
      </td>
    </tr>

    <!-- Sections -->
    <tr v-for="section in sections">
      <td>
        <table :style="[{ width: '100%' }, tableStyle]">
          <tbody>
            <!-- Section title -->
            <tr :style="{ height: '84px' }">
              <td
                colspan="2"
                :style="{
                  paddingTop: '20px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#40444F',
                  borderBottom: '1px solid #DDDFE3'
                }"
              >
                {{section.title}}
              </td>
            </tr>
            <!-- Articles -->
            <tr v-for="(article, idx) in section.articles" :style="{ height: '153px' }">
              <td :style="{ width: '192px', paddingTop: '23px', borderTop: (section.articles.length > 1 && idx > 0 ? '1px solid #F4F4F6' : null) }" valign="top">
                <img :style="{ width: '144px', borderRadius: '2px' }" :src="article.imgUrl"/></td>
              <td valign="top" :style="{ paddingTop: '14px', borderTop: (section.articles.length > 1 && idx > 0 ? '1px solid #F4F4F6' : null) }">
                <table :style="tableStyle">
                  <tbody>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '8px',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          lineHeight: '30px',
                          color: '#40444F'
                        }"
                      >
                        {{article.title}}
                      </td>
                    </tr>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '5px',
                          fontSize: '13px',
                          lineHeight: '20px',
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
                            fontSize: '13px',
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
    tableStyle: Object,
    bannerImgUrl: String,
    sections: Array
  }
}
</script>
