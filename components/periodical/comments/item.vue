<template>
  <div :class="$style['comments']">
    <el-row
      :class="{
        [$style.fa]: true,
        [$style['none-line']]: !(
          commentItem.replys && commentItem.replys.length
        )
      }"
    >
      <el-col :span="2">
        <el-avatar
          :size="60"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        >
        </el-avatar>
      </el-col>
      <el-col :span="22" :class="$style['com-main']">
        <div :class="$style.participant">
          <h4>
            {{ commentItem.commentator.name }}
          </h4>
          <template v-if="commentItem.replyTo">
            <span :class="$style.r">回复</span>
            <h4>
              {{ commentItem.replyTo.name }}
            </h4>
          </template>
        </div>

        <p :class="$style.time">
          {{ moment(commentItem.updatedAt).format('YYYY-MM-DD HH:mm') }}
        </p>
        <div :class="$style.content">
          <span>
            {{ commentItem.content }}
          </span>
        </div>
        <div>
          <el-button
            @click="handlerReply()"
            icon="el-icon-edit-outline"
            circle
            size="mini"
            type="primary"
          >
          </el-button>
          <el-button
            v-if="!commentItem.replyTo"
            @click="handlerDiscussMore()"
            :icon="
              commentItem.replys && commentItem.replys.length
                ? 'el-icon-arrow-down'
                : 'el-icon-arrow-right'
            "
            circle
            size="mini"
            type="success"
          >
          </el-button>
        </div>
      </el-col>
    </el-row>
    <div
      v-if="commentItem.replys && commentItem.replys.length"
      :class="$style['child-item']"
    >
      <comments-item
        :commentItem="item"
        v-for="(item, index) in commentItem.replys"
        :key="index"
        @reply="handlerReply"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CommentsItem',
  props: {
    commentItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      moment
    }
  },
  methods: {
    handlerReply(val) {
      this.$emit('reply', val || this.commentItem)
    },
    handlerDiscussMore() {
      this.$emit('discussMore', this.commentItem)
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
      .participant {
        display: flex;
        justify-content: flex-start;
        line-height: 21px;
        h4 {
          margin: 0;
        }
        .r {
          font-size: 12px;
          padding: 0 5px;
          color: #aaaaaa;
        }
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
