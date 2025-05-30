<template>
  <div class="transportation-guide">
    <header class="guide-header">
      <h1>吉大校园交通指南</h1>
      <p>便捷出行，连接七大校区</p>
    </header>

    <main class="guide-content">
      <section class="intercampus-transport">
        <h2>校区间交通</h2>
        <div class="transport-card">
          <div class="transport-icon">🚌</div>
          <div class="transport-info">
            <h3>校际班车</h3>
            <p>
              学校提供免费校际班车服务，连接各主要校区。班车时刻表可在各校区公告栏或学校官网查询。
            </p>
            <router-link to="/bus-schedule" class="schedule-link">查看班车时刻表 →</router-link>
          </div>
          <div
            class="transport-image"
            :style="{ backgroundImage: 'url(../src/assets/imgs/map/transport.jpg)' }"
          >
            <!-- 图片作为背景图展示 -->
          </div>
        </div>
      </section>

      <section class="public-transport">
        <h2>公共交通</h2>
        <div class="campus-transport-list">
          <div class="campus-transport" v-for="item in transportInfo" :key="item.campus">
            <h3>{{ item.campus }}</h3>
            <ul>
              <li v-for="line in item.lines" :key="line">{{ line }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bike-sharing">
        <h2>共享单车</h2>
        <p>各校区内及周边均有共享单车服务，包括美团单车、哈啰出行等品牌，方便师生短途出行。</p>
        <div class="bike-tips">
          <div class="tip">
            <span class="tip-icon">⏱</span>
            <span>骑行时间：中心校区至南岭校区约25分钟</span>
          </div>
          <div class="tip">
            <span class="tip-icon">💰</span>
            <span>学生认证可享骑行优惠</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TransportationGuide',
  data() {
    return {
      transportInfo: [
        {
          campus: '中心校区',
          lines: ['13路：吉大中心校区站', '222路：前进大街站', '315路：吉大北门站'],
        },
        {
          campus: '南岭校区',
          lines: ['6路：吉大南岭校区站', '66路：人民大街站', '306路：南岭体育场站'],
        },
        {
          campus: '南湖校区',
          lines: ['20路：南湖广场站', '154路：吉大南湖校区站', '252路：延安大街站'],
        },
        {
          campus: '朝阳校区',
          lines: ['25路：吉大朝阳校区站', '62路：西民主大街站', '362路：地质宫站'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.transportation-guide {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.guide-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e2e8f0;
}

.guide-header h1 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.guide-header p {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.guide-content section {
  margin-bottom: 50px;
}

.guide-content h2 {
  color: #2c3e50;
  border-left: 4px solid #3182ce;
  padding-left: 10px;
  margin-bottom: 20px;
}

.transport-card {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 20px;
}

.transport-icon {
  font-size: 3em;
  margin-right: 30px;
}

.transport-info h3 {
  color: #2b6cb0;
  margin-top: 0;
  margin-bottom: 15px;
}

.transport-info p {
  color: #4a5568;
  line-height: 1.6;
}

.schedule-link {
  display: inline-block;
  margin-top: 15px;
  color: #3182ce;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.schedule-link:hover {
  color: #2c5282;
}

.transport-image {
  margin-left: 30px;
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.campus-transport-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.campus-transport {
  padding: 20px;
  background-color: #ebf8ff;
  border-radius: 8px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.campus-transport:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.campus-transport h3 {
  margin-top: 0;
  color: #2b6cb0;
  font-size: 1.2rem;
}

.campus-transport ul {
  padding-left: 20px;
  color: #4a5568;
}

.campus-transport li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.bike-tips {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.tip {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #f0fff4;
  border-radius: 20px;
  color: #276749;
}

.tip-icon {
  margin-right: 10px;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .transport-card {
    flex-direction: column;
    text-align: center;
  }

  .transport-icon {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .transport-image {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
    height: 200px;
  }

  .campus-transport-list {
    grid-template-columns: 1fr;
  }
}
</style>
