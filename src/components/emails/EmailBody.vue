<template>
<table :style="[{ width: '720px' }, tableStyle]">
  <tbody>
    <!-- Title image -->
    <tr :style="{ height: '240px' }">
      <td>
        <img :style="{ width: '720px' }" :src="bannerImgUrl"/>
      </td>
    </tr>

    <tr>
      <td>
        <weekly-news
          :tableStyle="tableStyle"
          :title="typeToSection['weeklyNews'].title"
          :articles="typeToSection['weeklyNews'].articles"
        />
      </td>
    </tr>
    <tr>
      <td :style="{ paddingTop: '24px' }">
        <activities
          :tableStyle="tableStyle"
          :title="typeToSection['activities'].title"
          :articles="typeToSection['activities'].articles"
        />
      </td>
    </tr>
    <tr>
      <td :style="{ paddingTop: '24px' }">
        <new-features
          :tableStyle="tableStyle"
          :title="typeToSection['newFeatures'].title"
          :articles="typeToSection['newFeatures'].articles"
          :bottomLeftImg="typeToSection['newFeatures'].bottomLeftImg"
          :bottomLeftTxt="typeToSection['newFeatures'].bottomLeftTxt"
          :bottomLeftLink="typeToSection['newFeatures'].bottomLeftLink"
          :bottomRightImg="typeToSection['newFeatures'].bottomRightImg"
          :bottomRightTxt="typeToSection['newFeatures'].bottomRightTxt"
          :bottomRightLink="typeToSection['newFeatures'].bottomRightLink"
        />
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import Activities from './Activities'
import WeeklyNews from './WeeklyNews'
import NewFeatures from './NewFeatures'

export default {
  name: 'EmailBody',

  components: {
    Activities,
    WeeklyNews,
    NewFeatures
  },

  props: {
    tableStyle: Object,
    bannerImgUrl: String,
    typeToSection: Object
  }
}
</script>
