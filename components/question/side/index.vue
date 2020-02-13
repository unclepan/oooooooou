<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-col :span="12">
          <div :class="$style.info">
            <p :class="$style.label">关注数</p>
            <p :class="$style.num">
              {{ informationStatistics.followingQuestionNum }}
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <div :class="$style.info">
            <p :class="$style.label">回答数</p>
            <p :class="$style.num">{{ informationStatistics.answersNum }}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <recommend-questions />
    <recommend-periodical />
    <recommend-advertisement />
  </div>
</template>

<script>
import recommendAdvertisement from '~/components/recommend/advertisement'
import recommendQuestions from '~/components/recommend/questions'
import recommendPeriodical from '~/components/recommend/periodical'
export default {
  components: {
    recommendAdvertisement,
    recommendQuestions,
    recommendPeriodical
  },
  props: {
    informationStatistics: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" module>
.info {
  text-align: center;
  .label {
    font-size: 14px;
    color: #aaaaaa;
    margin: 0;
  }
  .num {
    font-size: 16px;
    color: #3c3b4a;
    font-weight: 600;
    margin: 20px 0 0 0;
  }
}
</style>
