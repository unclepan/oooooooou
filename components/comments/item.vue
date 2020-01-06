<template>
  <div :class="$style['comments']">
    <el-row :class="{ [$style.fa]: true, [$style['none-line']]: !test }">
      <el-col :span="2">
        <el-avatar
          :size="60"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        >
        </el-avatar>
      </el-col>
      <el-col :span="22" :class="$style['com-main']">
        <h4>杰克苏艾伦<i class="el-icon-medal-1"></i></h4>
        <p :class="$style.time">2019-01-08</p>
        <div :class="$style.content">
          <span>
            第二季来拯救我们了！每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑，让观众在创造力爆表的脑回路中经历一次漫游。
          </span>
          <el-button type="text" size="mini" icon="el-icon-more-outline">
            展开
          </el-button>
        </div>
        <div>
          <el-button icon="el-icon-apple" circle size="mini"></el-button>
          <el-button icon="el-icon-edit-outline" circle size="mini"></el-button>
        </div>
      </el-col>
    </el-row>
    <div v-if="test" :class="$style['child-item']">
      <comments-item v-for="(item, index) in 3" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    test: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" module>
.comments {
  .fa {
    padding: 20px 0;
    border-bottom: 1px solid #ebeef5;
    .com-main {
      h4 {
        margin: 0;
      }
      .time {
        font-size: 12px;
        color: #aaaaaa;
        margin: 10px 0;
      }
      .content {
        font-size: 14px;
        color: #3c3b4a;
        line-height: 21px;
        padding-bottom: 10px;
      }
    }
  }
  .none-line {
    border: none;
  }

  .child-item {
    padding-left: 78.16px;
    .comments:last-child {
      .fa {
        border: none;
      }
    }
  }
}
</style>
