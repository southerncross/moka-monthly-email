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
      <td :style="{ padding: '0 48px 20px 48px' }" valign="top">
        <table :style="tableStyle">
          <tbody>
            <tr v-for="(article, idx) in articles" :key="article.id">
              <td :style="{ width: '234px', borderTop: (articles.length > 1 && idx > 0 ? '1px solid #F4F4F6' : null) }">
                <img :style="{ width: '100%', border: '1px solid rgba(0,0,0,0.10)', borderRadius: '2px' }" :src="article.imgUrl"/>
              </td>
              <td :style="{ padding: '24px 0 24px 24px', borderTop: (articles.length > 1 && idx > 0 ? '1px solid #F4F4F6' : null) }">
                <table :style="tableStyle">
                  <tbody>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '10px',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          lineHeight: '24px',
                          color: 'black'
                        }"
                      >
                        {{article.title}}
                      </td>
                    </tr>
                    <tr>
                      <td
                        :style="{
                          paddingBottom: '10px',
                          fontSize: '13px',
                          lineHeight: '20px',
                          color: '#40444F'
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
  name: 'WeeklyNews',

  props: {
    tableStyle: Object,
    title: String,
    articles: Array
  }
}
</script>

<style>
</style>
