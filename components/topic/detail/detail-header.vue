<template>
  <div :class="$style['detail-header']">
    <el-card shadow="hover">
      <el-row :class="$style.main" :gutter="20">
        <el-col :span="5">
          <img :class="$style.pic" :src="topicDataInfo.pic" />
        </el-col>
        <el-col :span="19">
          <h3 :class="$style.title">
            {{ topicDataInfo.name }}
          </h3>
          <p :class="$style.describe">
            {{ topicDataInfo.introduction }}
          </p>
        </el-col>
      </el-row>

      <div :class="$style.handler">
        <el-button size="small" type="primary">
          关注话题
        </el-button>

        <div :class="$style['test-button']">
          <el-button type="text" icon="el-icon-chat-dot-square">
            关注人数：123
          </el-button>
          <el-button type="text" icon="el-icon-document">
            问题数：11234
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    topicDataInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" module>
.detail-header {
  margin-bottom: 20px;
  .main {
    padding-bottom: 16px;
    .pic {
      width: 100%;
    }
    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
    }
    .describe {
      margin-top: 16px;
      color: #3c3b4a;
      font-size: 14px;
    }
  }

  .handler {
    display: flex;
    align-items: center;
    .test-button {
      padding-left: 30px;
      :global(.el-button--text) {
        color: #aaaaaa;
      }
    }
  }
}
</style>
