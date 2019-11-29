<template>
  <div :class="$style.card">
    <el-card shadow="hover">
      <img
        :class="$style['head-diagram']"
        src="http://localhost:3001/carousel/1499593583742.jpg"
      />
      <div :class="$style.main">
        <el-row :gutter="20" type="flex" align="bottom">
          <el-col :span="5">
            <div :class="$style.calendar">
              <div :class="$style.line">
                <div v-for="(item, index) in 5" :key="index"></div>
              </div>
              <p :class="$style.time">28</p>
              <p :class="$style.year">2019年7月</p>
            </div>
          </el-col>
          <el-col :span="19">
            <div :class="$style.text">
              <h3>这部9.2高分纪录片，即将拯救你无聊的大脑</h3>
              <p :class="$style['text-main']">
                第二季来拯救我们了！每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑，让观众在创造力爆表的脑回路中经历一次漫游。
                我们介绍过的第一季作为“设计大咖集邮册”，涵盖了漫画、平面、建筑、舞台、汽车、鞋履、摄影、室内领域，而现在期待已久的第二季终于来了！
                阵容包括艺术家、生物建筑师、戏服设计师、玩具设计师、数字产品设计师、字体设计师，叙述角度小至他们的童年回忆，大到对未来的无限设想，观众的视野随之自由拉伸，看完脑袋神清气爽。今天，我们先剧透前四集的设计师——他们的想法正在改变未来世界的样貌🤫
              </p>
              <div :class="$style['test-footer']">
                <p :class="$style.pv">
                  Money, Sad And The City, Shopping - 5 days ago
                </p>
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  circle
                ></el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" module>
.card {
  margin: 20px 0;
  .head-diagram {
    width: 100%;
  }
  .main {
    .calendar {
      text-align: center;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      padding-bottom: 10px;
      .line {
        display: flex;
        div {
          height: 10px;
          background: #3c3b4a;
          flex-grow: 1;
        }
        div:nth-of-type(4) {
          background: #409eff;
        }
      }
      .time {
        font-size: 42px;
        line-height: 0;
        font-weight: bold;
      }
      .year {
        font-size: 12px;
        color: #aaaaaa;
      }
    }
    .text {
      .text-main {
        font-size: 14px;
        color: #3c3b4a;
        line-height: 21px;
      }
      .test-footer {
        display: flex;
        justify-content: space-between;
        .pv {
          font-size: 12px;
          color: #aaaaaa;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 360px;
        }
      }
    }
  }
}
</style>
