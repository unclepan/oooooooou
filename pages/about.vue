<template>
  <div :class="$style.about">
    <el-card shadow="never">
      <p :class="$style.motto">从来处来，到来处去！</p>
      <div :class="$style.wrap">
        <header>
          <h1>杨盼</h1>
          <p>6年工作经验 | 本科 统招 | 29岁 | 男</p>
          <p>联系电话： 18910788378</p>
          <p>
            电子邮箱： <a href="mailto:738912168@qq.com">738912168@qq.com</a>
          </p>
          <p>
            Github：
            <a href="https://github.com/unclepan/" target="_blank"
              >https://github.com/unclepan/
            </a>
          </p>
        </header>

        <main>
          <div :class="$style.block">
            <div :class="[$style.title, $style.clearfix]">
              <h2 :class="$style.fl">个人优势</h2>
            </div>
            <div :class="$style.content">
              <p :class="$style.tag">
                综合能力： 沟通协调能力 | 团队精神 | 执行力 | 业务流程管理 |
                CRM系统
              </p>
              <p>
                前端基础知识扎实，能高度还原设计稿的视觉与交互。现阶段vue技术栈（vue，vue-router，vuex，axios，es6）使用最多。
              </p>
              <p>
                开发过大型项目。其他前端当前流行技能均也有所涉猎及应用)，后端能熟练使用nodejs技术栈进行开发，最重要的是能时刻保持学习，关注技术最新动态。
              </p>
            </div>
          </div>

          <div :class="$style.block">
            <div :class="[$style.title, $style.clearfix]">
              <h2 :class="$style.fl">工作经历</h2>
            </div>
            <div :class="$style.content">
              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">新东方教育科技集团</h3>
                  <time :class="$style.fr">2018.07 - 至今</time>
                </div>
                <p :class="$style.label">职位：前端工程师</p>
                <ul>
                  <li>带队开发算薪系统，UPE，CRM等业务系统。</li>
                  <li>主导完成中台前端标准化。</li>
                  <li>
                    提供公用包，抽离公共化组件，发布到私库或者npm上，减少相同业务场景再次造轮子。
                  </li>
                </ul>
              </section>

              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">36氪</h3>
                  <time :class="$style.fr">2017.01 - 2018.07</time>
                </div>
                <p :class="$style.label">职位：前端工程师</p>
                <ul>
                  <li>
                    主要开发面向投资机构募、投、管、退的一款saas产品，“鲸准机构版（资管系统）”。
                  </li>
                  <li>从0到1，从1到3，总共三个版本的迭代都全程参与。</li>
                  <li>
                    负责参与基础库/框架等选取、难点、前沿技术的攻关及核心代码的编写与优化。
                  </li>
                  <li>与前后端同事一起研讨技术实现方案，制定服务接口。</li>
                  <li>
                    与产品，设计、后端、测试等人员紧密配合，确保资管系统的开发顺利进行。
                  </li>
                </ul>
              </section>

              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">广告门</h3>
                  <time :class="$style.fr">2015.07 - 2016.11</time>
                </div>
                <p :class="$style.label">职位：前端工程师</p>
                <ul>
                  <li>
                    独立负责公司官网的前端开发，以及日常的传播如 H5
                    的开发、商业项目的开发。
                  </li>
                  <li>负责公司专题的开发制作。</li>
                  <li>
                    与后台工程师配合完成各部门系统的研发，如;财务系统，报奖系统等等。
                  </li>
                </ul>
              </section>

              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">北京华讯传播广告公司</h3>
                  <time :class="$style.fr">2014.04 - 2015.07</time>
                </div>
                <p :class="$style.label">职位：前端工程师</p>
                <ul>
                  <li>负责公司的官方网站的开发及维护。</li>
                  <li>
                    各个项目组下达的web前端开发任务。主要工作内容包括，微信h5、手机微网站。Pc网站，专题制作。微博minisite等前端任务。
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <div :class="$style.block">
            <div :class="[$style.title, $style.clearfix]">
              <h2 :class="$style.fl">项目经历</h2>
            </div>
            <div :class="$style.content">
              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">薪酬管理系统</h3>
                  <time :class="$style.fr">2019.01 - 至今</time>
                </div>
                <p :class="$style.label">所属公司：(新东方教育科技集团)</p>

                <p>
                  项目描述：新东方全国教师的薪酬计算，管理，处理报表，定义字段。
                </p>

                <p>
                  工作内容：前端项目的架构及业务开发、迭代、性能及体验上的优化等。
                </p>
                <p>
                  技术栈：vue，axios，element-ui，vue-router，vuex，其他插件lodash，moment，mock.js
                </p>
              </section>

              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">鲸准机构版</h3>
                  <time :class="$style.fr">2017.01 – 2018.07</time>
                </div>
                <p :class="$style.label">所属公司：(36氪)</p>
                <p>
                  项目描述：面向投资机构的一款saas系统，付费系统，宣传主页请参考：
                  <a href="https://www.jingdata.com/ziguan#f1" target="_blank">
                    https://www.jingdata.com/ziguan#f1
                  </a>
                </p>
                <p>工作内容：从0到3全程参与，调研，开发，优化，迭代。</p>
                <p>
                  技术栈：Javascrpt，Vue.js全家桶，Webpack，基于element-ui自定义实现的jingdata-element-ui的UI库。
                </p>
                <p>
                  其他插件：code-matrix(处理代码块)，lodash，moment，Less预处理样式，wolfy87-eventemitter（组件通信），vue-i18n（国际化），Echarts，Go.js处理图表，定义流程交互等。
                </p>
              </section>

              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">垂直媒体网站</h3>
                  <time :class="$style.fr">2015.07 – 2016.11</time>
                </div>
                <p :class="$style.label">所属公司：(广告门)</p>
                <p>
                  项目描述：垂直媒体，广告行业资讯类网站，c端产品，该项目前端使用jQuery实现，后端使用PHP。
                </p>
                <p>
                  主要负责项目的开发，重构，产品体验及性能上的优化，网站链接：
                  <a href="https://www.adquan.com/" target="_blank">
                    https://www.adquan.com/
                  </a>
                </p>
                <p>
                  工作内容前端项目的架构及业务开发、迭代、性能及体验上的优化等。
                </p>
                <p>
                  技术栈：Html5,
                  css3,还原页面，jQuery（pc），Zepto(mobile)实现交互，RequireJs
                  实现模块加载，canvas实现动画，使用jdf作为自动化构建工具。
                </p>
              </section>

              <section>
                <div :class="$style.subhead">
                  <h3>其他主要技术应用</h3>
                </div>
                <p>
                  Koa，MongoDB：
                  <a
                    href="https://github.com/unclepan/uncle-saas-koa/"
                    target="_blank"
                  >
                    https://github.com/unclepan/uncle-saas-koa/
                  </a>
                </p>
                <p>
                  Nuxt：
                  <a
                    href="https://github.com/unclepan/blog-nuxt/"
                    target="_blank"
                  >
                    https://github.com/unclepan/blog-nuxt/
                  </a>
                </p>
                <p>
                  Vue：
                  <a
                    href="https://github.com/unclepan/uncle-saas-vue/"
                    target="_blank"
                  >
                    https://github.com/unclepan/uncle-saas-vue/
                  </a>
                </p>
                <p>
                  原生-前端监控包：
                  <a
                    href="https://github.com/unclepan/zui-monitor/"
                    target="_blank"
                  >
                    https://github.com/unclepan/zui-monitor/
                  </a>
                </p>
              </section>
            </div>
          </div>

          <div :class="$style.block">
            <div :class="[$style.title, $style.clearfix]">
              <h2 :class="$style.fl">教育经历</h2>
            </div>
            <div :class="$style.content">
              <section>
                <div :class="[$style.subhead, $style.clearfix]">
                  <h3 :class="$style.fl">吉林农业大学</h3>
                  <p :class="[$style.fl]">
                    本科 统招 / 商业广告学
                  </p>
                  <time :class="[$style.fr, $style.time]"
                    >2010.09 - 2014.07
                  </time>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '关于我',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是ANTCP网站的作者杨盼'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.about {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  .motto {
    color: #aaaaaa;
    font-style: italic;
    border-left: 3px solid #aaaaaa;
    padding-left: 10px;
  }
  .wrap {
    header {
      h1 {
        font-size: 28px;
        padding: 10px 0;
      }
    }
    .title {
      margin-top: 10px;
      cursor: pointer;
      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 32px;
      }
      .icon {
        display: none;
        line-height: 32px;
      }
    }
    .tag {
      color: #000;
    }
    section {
      padding-bottom: 20px;
    }
    .subhead {
      h3 {
        font-size: 12px;
        line-height: 21px;
        font-weight: bold;
        color: #000;
      }
    }
    .label {
      color: #333333;
      line-height: 28px;
    }
  }
}
</style>
