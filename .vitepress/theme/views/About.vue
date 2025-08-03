<template>
  <div class="about">
    <h1 class="title">关于本站</h1>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 介绍 -->
      <div class="about-item hello">
        <span class="text1">你好，很高兴认识你</span>
        <span class="text2 title2">我是 清凤 / kilock</span>
        <span class="text3">是两名 学生、独立开发者、Mtf</span>
      </div>
      <!-- 追求 -->
      <div class="about-item pursuit">
        <span class="tip">追求</span>
        <span class="title2">活下去</span>
        <span class="title2">去做更多</span>
        <span class="title2">更优秀的作品</span>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 技能 -->
      <div class="about-item skills">
        <span class="tip">技能</span>
        <span class="title2">我们会的东西</span>
        <div class="skills-list">
          <a
            v-for="(item, index) in skillsData"
            :key="index"
            :style="{ '--color': item.color }"
            :href="item.link"
            class="skills-item"
            target="_blank"
          >
            <div class="skills-logo">
              <i :class="`iconfont icon-${item.icon}`"></i>
            </div>
            <span class="skills-name">{{ item.name }}</span>
          </a>
        </div>
      </div>
      <!-- 生涯 -->
      <div class="about-item career">
        <span class="tip">生涯</span>
        <span class="title2">
          <i>成长中...</i>
        </span>
        <div class="list">
          <span class="list-item" style="--color: #357ef5">象山县塔山中学 · 学生</span>
          <span class="list-item" style="--color: #eb372a">连云港市外国语中学 · 学生</span>
        </div>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 性格 -->
      <div class="about-item character" style="--color: #4298b4">
        <span class="tip">性格</span>
        <span class="title2">鉴赏家 / 逻辑学家</span>
        <span class="title2">
          <span style="color: #f1c40f">ISTP</span> / <span style="color: #9b59b6">INTP</span>
        </span>
        <span class="more">
          在
          <a href="https://www.16personalities.com/ch/" target="_blank">16personalities</a>
          了解更多关于
          <a href="https://www.16personalities.com/ch/istp-%E4%BA%BA%E6%A0%BC" target="_blank">
            鉴赏家
          </a>
          和
          <a href="https://www.16personalities.com/ch/intp-%E4%BA%BA%E6%A0%BC" target="_blank">
            逻辑学家
          </a>
        </span>
      </div>
      <!-- 座右铭 -->
      <div class="about-item">
        <span class="tip">座右铭</span>
        <span class="title1" style="margin-top: 20px">活在当下，</span>
        <span class="title2">及时享乐。</span>
      </div>
    </div>
    <div class="about-content" style="display: flex">
      <div
        class="about-item like image"
        style="
          background-image: url(/images/logo/nacho2.jpeg);
        "
      >
        <div class="image-content">
          <span class="tip">关注偏好</span>
          <span class="title2">量化交易、虚拟货币、科技、AI、游戏<br/>逆向工程、猫猫！！</span>
          <div class="image-desc">
            <span class="left">手机、电脑及软硬件、网络等</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 数据 -->
      <div
          class="about-item static image"
          style="background-image: url(/images/logo/nacho3.jpg);"
      >
        <div class="image-content">
          <span class="tip">数据</span>
          <span class="title2">访问统计</span>
          <div class="static-data">
            <div v-for="(item, key, index) in statisticsData" :key="index" class="static-item">
              <span class="static-name">{{ key }}</span>
              <span class="static-num">{{ item }}</span>
            </div>
          </div>
          <div class="image-desc opacity">
            <span class="left">
              统计信息来自 <a href="https://v6.51.la/" target="_blank">51la</a>
            </span>
          </div>
        </div>
      </div>
      <!-- 信息 --> 
      <div class="about-item child">

        <a
          class="about-item map image"
          href="https://ditu.amap.com/place/B023E0Z0HD"
          target="_blank"
          style="background-image: url(/images/logo/ningbo-map.png)"
        >
          <span class="position">我现在住在 <strong>中国，浙江省，宁波市</strong></span>
        </a>
        <div class="about-item info">
          <div class="info-item">
            <span class="info-name">生于</span>
            <span class="info-num" style="--color: #43a6c6">2009 / 2008</span>
          </div>
          <div class="info-item">
            <span class="info-name">现在职业</span>
            <span class="info-num" style="--color: #dfac46">学生</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于这个小破站 -->
    <div class="about-content" style="display: flex">
      <div class="about-item">
        <span class="tip">关于这个小破站</span>
        <span class="title2">一个见证我们存在的小站</span>
        <p class="text">
          这里记录着我们生活的片段，虽然不广为人知，
        </p>
        <p class="text">
          但它承载了我们过去的时光，证明我们曾真实存在过。
        </p>
        <p style="position: absolute; bottom: -8px; left: 10px; font-size: 12px; color: gray;">
          由Kilock提供技术支持
        </p>
        <p style="position: absolute; bottom: -8px; right: 10px; font-size: 12px; color: gray;">
          这只是我们的一小部分
        </p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { getStatistics } from "@/api";

const { theme } = useData();

// 技能数据
const skillsData = [
  {
    name: "C++",
    color: "#00599C",
    icon: "code",
    link: "https://learn.microsoft.com/zh-cn/cpp/",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "python",
    link: "https://www.python.org/",
  },
    {
    name: "HTML5",
    color: "#e34f26",
    icon: "html5",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
  },
    {
    name: "Vue",
    color: "#41b883",
    icon: "vue",
    link: "https://cn.vuejs.org/",
  },
    {
    name: "Node.js",
    color: "#026E00",
    icon: "nodejs",
    link: "https://nodejs.org/",
  },
    {
    name: "Git",
    color: "#F05032",
    icon: "git",
    link: "https://git-scm.com/",
  },
  {
    name: "Photoshop",
    color: "#31A8FF",
    icon: "photoshop",
    link: "https://www.adobe.com/cn/lead/creativecloud/business.html",
  },
  {
    name: "ChatGPT",
    color: "#4AA181",
    icon: "chatgpt",
    link: "https://chat.openai.com/",
  },
];

// 站点统计数据
const statisticsData = ref(null);

// 获取站点统计数据
const getStatisticsData = async () => {
  const result = await getStatistics(theme.value.tongji["51la"]);
  statisticsData.value = result;
};

onMounted(() => {
  getStatisticsData();
});
</script>

<style lang="scss" scoped>
.about {
  .title {
    font-size: 2.4rem;
    text-align: center;
    border: none;
  }
  .about-content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    margin-bottom: 20px;
    .about-item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.2rem 2rem;
      border-radius: 12px;
      background-color: var(--main-card-background);
      border: 1px solid var(--main-card-border);
      box-shadow: 0 8px 12px -4px var(--main-border-shadow);
      overflow: hidden;
      .tip {
        font-size: 14px;
        opacity: 0.8;
        margin-bottom: 12px;
      }
      .title1 {
        font-size: 36px;
        font-weight: bold;
        opacity: 0.6;
      }
      .title2 {
        font-size: 36px;
        font-weight: bold;
        margin-right: 4rem;
      }
      .text {
        font-size: 18px;
        margin: 0.6rem 0;
      }
      &.child {
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        gap: 20px;
        .about-item {
          height: 100%;
        }
      }
      &.hello {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 2rem;
        color: #2C3E50; /* 字体保持清晰 */
        background-color: #5BCEFA; /* 底色兜底统一蓝色调 */
        overflow: hidden;
        font-weight: 600;

        /*
        * 平滑的跨性别旗帜渐变：不要硬切条，利用临近重叠来柔化分界
        */
        background-image: linear-gradient(
          120deg,
          #5BCEFA 0%,
          #5BCEFA 15%,
          rgba(245, 169, 184, 0.9) 28%,
          rgba(245, 169, 184, 0.7) 38%,
          rgba(255, 255, 255, 0.85) 48%,
          rgba(255, 255, 255, 0.6) 52%,
          rgba(245, 169, 184, 0.7) 62%,
          rgba(245, 169, 184, 0.9) 72%,
          #5BCEFA 85%,
          #5BCEFA 100%
        );
        background-size: 250% 250%; /* 扩大以便流动有空间 */
        animation: smoothFlow 30s linear infinite alternate;

        .title2 {
          position: relative;
          line-height: 1.2;
          font-size: 2.2rem;
          z-index: 2; /* 确保在模糊层之上 */
        }

        /* 叠加柔和模糊层进一步打散分界 */
        &::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: inherit; /* 取同样渐变 */
          filter: blur(35px);
          opacity: 0.45;
          transform: scale(1.05);
          mix-blend-mode: screen;
          z-index: 0;
          animation: slowShift 60s ease-in-out infinite alternate;
        }

        /* 轻微动态光晕增加层次，但不影响文字清晰 */
        &::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 50%,
            rgba(255,255,255,0.15) 0%,
            transparent 70%);
          filter: blur(80px);
          opacity: 0.6;
          z-index: 1;
          animation: haloDrift 25s ease-in-out infinite alternate;
        }

        /* GPU 优化防抖 */
        backface-visibility: hidden;
        transform: translateZ(0);
      }

      @keyframes smoothFlow {
        from {
          background-position: 0% 0%;
        }
        to {
          background-position: 100% 100%;
        }
      }

      @keyframes slowShift {
        0% {
          transform: scale(1.05) translate(0, 0);
        }
        50% {
          transform: scale(1.08) translate(2%, 2%);
        }
        100% {
          transform: scale(1.05) translate(0, 0);
        }
      }

      @keyframes haloDrift {
        0% {
          transform: scale(1) translate(0, 0);
          opacity: 0.55;
        }
        50% {
          transform: scale(1.02) translate(-1%, 1%);
          opacity: 0.65;
        }
        100% {
          transform: scale(1) translate(0, 0);
          opacity: 0.55;
        }
      }

      &.pursuit {
        .title2 {
          line-height: 1.2;
          &:nth-child(2) {
            display: inline-block;
            background-size: 100% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
          }
          &:nth-child(4) {
            display: inline-block;
            background-size: 100% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-image: linear-gradient(45deg, #4CAF50 50%, #8BC34A);
          }
        }
      }
      &.character {
        min-height: 220px;
        cursor: pointer;
        .more {
          margin-top: auto;
          font-size: 14px;
          color: var(--main-color-gray);
          a {
            color: var(--main-color-gray);
            &:hover {
              color: var(--color);
            }
          }
        }
        .male {
          position: absolute;
          top: 20px;
          right: -10px;
          height: 140%;
          width: auto;
          transition: transform 0.5s;
          transform-origin: top center;
          @media (max-width: 768px) {
            height: 80%;
          }
        }
        &:hover {
          .male {
            transform: scale(1.2);
          }
        }
      }
      &.skills {
        .skills-list {
          margin-top: 12px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .skills-item {
            display: flex;
            align-items: center;
            margin-right: 10px;
            margin-top: 10px;
            padding: 8px 12px 8px 8px;
            border-radius: 40px;
            background-color: var(--main-site-background);
            border: 1px solid var(--main-card-border);
            box-shadow: 0 8px 12px -4px var(--main-border-shadow);
            transition: background-color 0.3s;
            cursor: pointer;
            .skills-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              margin-right: 8px;
              border-radius: 50%;
              background-color: var(--color);
              .iconfont {
                color: #fff;
              }
            }
            .skills-name {
              font-weight: bold;
              transition: color 0.3s;
            }
            &:hover {
              background-color: var(--main-card-background);
            }
          }
        }
      }
      &.career {
        .title2 {
          letter-spacing: 0.2rem;
          font-size: 40px;
        }
        .list {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          .list-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 12px;
            color: var(--main-font-second-color);
            &::before {
              content: "";
              display: block;
              width: 16px;
              height: 16px;
              background-color: var(--color);
              border-radius: 50%;
              margin-right: 8px;
            }
          }
        }
        .career-img {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          @media (max-width: 768px) {
            position: static;
          }
        }
      }
      &.game {
        min-height: 300px;
        @media (max-width: 768px) {
          min-height: 240px;
        }
      }
      &.like {
        min-height: 400px;
        @media (max-width: 768px) {
          min-height: 300px;
        }
      }
      &.image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        .image-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          z-index: 2;
          color: #2C3E50;
          .image-desc {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            &.opacity {
              font-size: 14px;
              color: #eee;
              opacity: 0.8;
              a {
                color: #eee;
                &:hover {
                  color: var(--main-color);
                }
              }
            }
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: inset 0 -70px 204px 10px var(--color);
          z-index: 0;
        }
      }
      &.static {
        .static-data {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr 1fr;
          margin: 20px 0;
          .static-item {
            display: flex;
            flex-direction: column;
            .static-name {
              font-size: 15px;
              opacity: 0.8;
            }
            .static-num {
              font-size: 34px;
              font-weight: bold;
            }
          }
        }
      }
      &.map {
        min-height: 170px;
        background-size: 100%;
        transition: background 1.5s ease-in-out;
        cursor: pointer;
        @media (max-width: 768px) {
          background-size: cover;
          pointer-events: none;
        }
        .position {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 20px 30px;
          color: #fff;
          background-color: #636352;
          font-size: 20px;
          transition: bottom 1s;
        }
        &:hover {
          background-size: 120%;
          background-position-x: 0;
          background-position-y: 36%;
          .position {
            bottom: -80px;
          }
        }
      }
      &.info {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .info-item {
          display: flex;
          flex-direction: column;
          margin-right: 32px;
          .info-name {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--main-font-second-color);
          }
          .info-num {
            font-size: 34px;
            font-weight: bold;
            color: var(--color);
          }
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
