<template>
  <div class="events-view">
    <header class="header">
      <h1>吉林大学 - 学术讲座与活动通知</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <section class="info-source-section">
        <h2>获取最新活动信息</h2>
        <p>
          吉林大学及各院系、科研机构定期举办丰富多样的学术讲座、前沿论坛、研讨会及各类通知公告。
          最新的活动安排和通知通常会发布在以下官方渠道，请及时关注：
        </p>
        <ul>
          <li>
            <a href="https://oa.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学信息门户/OA系统</a>
            - 校内官方通知、公告的主要发布平台 (通常需要校内账户登录)。
          </li>
          <li>
            <a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学官方网站</a>
            - 查找“通知公告”、“新闻中心”、“学术”或“讲座”等相关栏目。
          </li>
          <li>
            <a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学图书馆官网</a>
            - 可能发布与信息素养、数据库培训相关的讲座。
          </li>
          <li>
            <strong>各学院/学部/研究所网站</strong>
            - 许多学术活动由具体院系组织，会在其官网发布通知。
          </li>
        </ul>
        <p>
          建议您经常访问校内信息门户，并关注常用学院或部门的网站以获取最全面的信息。
        </p>
      </section>

      <section class="example-events-section">
        <h2>近期活动示例</h2>
        <p class="note">以下为近期部分活动信息示例，最新最全信息请以上述官方渠道为准。</p>
        <div class="event-list">
          <div v-for="(event, index) in recentEvents" :key="index" class="event-item">
            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <p v-if="event.speaker"><strong>报告人：</strong> {{ event.speaker }}</p>
              <p v-if="event.time"><strong>时间：</strong> {{ event.time }}</p>
              <p v-if="event.location"><strong>地点：</strong> {{ event.location }}</p>
              <p v-if="event.organizer"><strong>主办单位：</strong> {{ event.organizer }}</p>
              <p v-if="event.inviter"><strong>邀请人：</strong> {{ event.inviter }}</p>
              <div v-if="event.description || event.speakerIntro">
                <button @click="toggleDetails(index)" class="details-toggle-button">
                  {{ event.showDetails ? '收起详情 ▲' : '展开详情 ▼' }}
                </button>
                <div v-show="event.showDetails" class="event-description">
                  <strong v-if="event.description">报告摘要：</strong>
                  <p v-if="event.description">{{ event.description }}</p>
                  <strong v-if="event.speakerIntro">报告人简介：</strong>
                  <p v-if="event.speakerIntro" v-html="formatSpeakerIntro(event.speakerIntro)"></p>
                   <p v-if="event.meetingSummary" v-html="formatMeetingSummary(event.meetingSummary)"></p>
                </div>
              </div>
            </div>
             <div v-if="event.imageUrl" class="event-image-container">
              <img :src="event.imageUrl" :alt="event.title + ' 相关图片'" class="event-image"/>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 1. 导入图片 (使用相对路径)
import imgLaiRui from '../assets/imgs/academic/赖睿.png';
import imgYuWanli from '../assets/imgs/academic/虞万里.png';
import imgMeeting from '../assets/imgs/academic/会议相关.png';

const router = useRouter();

interface EventEntry {
  title: string;
  speaker?: string;
  time?: string;
  location?: string;
  organizer?: string;
  inviter?: string;
  description?: string; // 报告摘要
  speakerIntro?: string; // 报告人简介
  meetingSummary?: string; // 会议纪要 (针对第三个例子)
  imageUrl?: string;
  showDetails?: boolean; // 控制详情是否展开
}

// 2. 使用您提供的示例数据填充 ref 数组
const recentEvents = ref<EventEntry[]>([
  {
    title: '超分子化学与材料系列讲座 - 吉林大学赖睿准聘副教授学术报告',
    speaker: '赖睿 博士 (吉林大学准聘副教授)',
    time: '2025年5月8日 15:30 (星期四)', // 根据图片调整日期
    location: '唐敖庆楼 A409',
    organizer: '超分子结构与材料全国重点实验室',
    inviter: '吴光鹭 教授',
    description: '尽管自然界中有许许多多的具有不同功能的酶，但就效率、稳定性和选择性而言，它们仍无法完全满足生物化学生产和医药化工的需求。因此，人工酶设计具有重要的应用价值。人工酶设计在很大程度上依赖于对酶催化机理和调控方式的清晰理解。此外，在药物设计领域，比如用于治疗耐药菌感染的抑制剂的设计，有效抑制剂的成功研发在很大程度上也依赖于对相关酶催化机制的全面理解。然而，我们对于决定酶催化效率和特异性的因素仍不具备清晰的认识。这极大地限制了我们设计高效人工酶和有效药物的能力。基于这些背景，我们的研究旨在改进并应用多尺度计算模拟方法，以揭示具有重要生物医药应用价值的酶的潜在机制。在本次报告中，我将介绍我们最近在酶催化及调控的理论计算和模拟方面的一些研究，包括卡宾中间体是如何被稳定在酶活性中心和相关机制对卡宾转移选择性的内在机制，以及多尺度计算模拟方法在金属酶催化反应机理研究中的表现。',
    speakerIntro: '赖睿，吉林大学化学学院准聘副教授。2012年获吉林大学学士学位，2018年获美国南加州大学布朗大学林肯分校博士学位。2018-2022年在美国波士顿大学化学系从事博士后研究工作。2022年回国后，在中国科学院大连化学物理研究所工作，任副研究员。2025年4月加入吉林大学。长期致力于分子量子化学模拟方法的开发和应用，研究方向聚焦于量子力学和分子力学结合方法(QM/MM)的开发以及酶催化反应的调控和设计。GAMESS量子化学程序中QM/MM模块QuanPol的主要开发者之一。累计在J. Am. Chem. Soc., ACS Catal., J. Chem. Inf. Model., J. Chem. Phys.等理论与计算化学核心期刊发表论文20余篇。',
    imageUrl: imgLaiRui,
    showDetails: false,
  },
  {
    title: '吉林大学哲学社会科学学术讲座（总1231场）:《尚书·无逸》篇今古文异同与错简',
    speaker: '虞万里 教授 (浙江大学马一浮书院讲席教授)',
    time: '2025年5月13日 19:00—21:00',
    location: '中心校区东荣大厦十楼会议室',
    organizer: '吉林大学文学院、吉林大学社会科学研究院',
    speakerIntro: '虞万里，男，浙江绍兴人，1956年5月生于上海。曾任上海交通大学特聘教授，现任浙江大学马一浮书院讲席教授，《经学文献研究集刊》主编。全国古籍整理出版规划领导小组人员，中国训诂学研究会副会长。兼任清华大学经学研究中心《中国经学》、岭南大学《岭南学报》、台湾中研院文哲所《经学研究论丛》编委，《汉语大词典》（第二版）修订本编委、分卷主编等。著有《榆枋斋学术论集》《榆枋斋学林》《上博馆藏楚竹书<缁衣>综合研究》《中国古代姓氏与避讳起源》《文本视野下的诗经学》等，整理古籍和近人学术著作一千多万字。在《文史》《文学遗产》《中华文史论丛》、台湾《汉学研究》《史语所集刊》《文哲所集刊》、香港《中国文化研究所学报》等学术杂志上发表论文、文章二百余篇、三百多万字。其中多篇论文、著作曾获教育部高等学校科学研究优秀成果奖(人文社会科学)、北京大学王力语言学奖、清华大学李学勤中国古史研究奖、上海市哲学社会科学优秀成果奖、首届全球华人国学优秀成果奖、全国古籍整理与研究奖等。',
    imageUrl: imgYuWanli,
    showDetails: false,
  },
  {
    title: '动物科学学院本科学生第二党支部召开“深入贯彻中央八项规定学习教育”专题学习研讨会',
    // speaker: '支部组织委员竹忠颖同志主持', // 可以写在描述里
    time: '活动报道日期：2025年05月06日 (会议时间：4月25日)', // 标明是报道日期
    location: '动物科学楼一楼会议室',
    organizer: '动物科学学院本科学生第二党支部',
    meetingSummary: '为深入贯彻落实党的中央八项规定，强化党员作风建设，2025年4月25日下午，吉林大学动物科学学院本科学生第二党支部在动物科学楼一楼会议室召开“深入贯彻中央八项规定学习教育”专题学习研讨会。会议由支部组织委员竹忠颖同志主持，支部全体党员参加。\n会议设置双专题学习模块。首先由竹忠颖同志带领大家系统研读《习近平总书记关于党的作风建设论述摘编》...全体党员通过原文朗读、专题研讨等形式，深刻领会“党的作风关系人心向背，决定党和国家事业成败”的核心要义。\n随后，在“学习贯彻总书记考察贵州云南重要讲话精神”专题上，支部精选《西南春来早——习近平总书记赴贵州、云南考察纪实》微视频片段，重温习近平总书记指示精神...通过影像化、场景化的内容呈现，让理论“活”起来、纪律“严”起来、使命“实”起来。\n在最后的交流讨论环节，支部围绕“选修课学习深度不足”“学术生活失衡”等痛点，梳理7类问题，建立“一人一档”整改台账。学生党员结合党章自查自省...制定“晨检晚查”安全督导、“科研结对帮扶”等举措。同步推行“红黄绿”预警机制...强化“作风建设永远在路上”的政治自觉。\n本科学生第二党支部将以此为起点，系统构建长效机制...推动作风建设与专业实践、基层治理深度融合，为培育新时代畜牧人才和学生党员，为乡村振兴战略实施锻造先锋力量。',
    imageUrl: imgMeeting,
    showDetails: false,
  },
]);

// 切换详情显示状态的方法
const toggleDetails = (index: number) => {
  recentEvents.value[index].showDetails = !recentEvents.value[index].showDetails;
};

// 格式化简介文本（保留换行）
const formatSpeakerIntro = (intro: string) => {
  return intro.replace(/\n/g, '<br>');
};
const formatMeetingSummary = (summary: string) => {
  return summary.replace(/\n/g, '<br>');
};


const goBack = () => {
  router.push({ name: 'academicresources' });
};
</script>

<style scoped>
.events-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f8f9fa;
}

.header {
  background-color: #003366;
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
}

.header h1 {
  margin: 0;
  font-size: 2em;
  font-weight: 600;
}

.back-button {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #5a6268;
}

.main-content {
  flex-grow: 1;
  padding: 25px 40px;
  overflow-y: auto;
}

.info-source-section, .example-events-section {
  background-color: #fff;
  padding: 25px 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.07);
}

.info-source-section h2, .example-events-section h2 {
  font-size: 1.6em;
  color: #003A70;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.info-source-section p {
  font-size: 1.05em;
  line-height: 1.8;
  color: #454F5B;
  margin-bottom: 15px;
}

.info-source-section ul {
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 15px;
}

.info-source-section li {
  margin-bottom: 10px;
  font-size: 1.05em;
  line-height: 1.7;
}

.info-source-section a {
  color: #005A9C;
  text-decoration: none;
  font-weight: 500;
}
.info-source-section a:hover {
  text-decoration: underline;
}

.example-events-section .note {
  font-size: 0.9em;
  color: #856404; /* 改为更温和的提示色 */
  font-style: italic;
  margin-bottom: 20px;
  padding: 8px 12px;
  background-color: #fff3cd; /* 配套背景色 */
  border-left: 4px solid #ffeeba;
  border-radius: 4px;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 30px; /* 加大事件间距 */
}

.event-item {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #fff;
  display: flex; /* 让内容和图片并排 */
  flex-wrap: wrap; /* 在小屏幕上换行 */
  overflow: hidden; /* 防止内容溢出 */
}

.event-content {
  padding: 20px;
  flex: 1 1 60%; /* 内容区域占据主要宽度 */
  min-width: 300px; /* 内容区最小宽度 */
}

.event-image-container {
  flex: 1 1 35%; /* 图片区域占据部分宽度 */
  min-width: 150px; /* 图片区最小宽度 */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa; /* 图片容器背景 */
}

.event-image {
  max-width: 100%;
  max-height: 250px; /* 限制图片最大高度 */
  height: auto;
  object-fit: contain; /* 保持图片比例 */
  border-radius: 4px;
}


.event-item h3 {
  font-size: 1.3em;
  color: #004A80;
  margin-top: 0;
  margin-bottom: 15px; /* 增加标题下间距 */
}

.event-item p {
  font-size: 0.95em;
  line-height: 1.7; /* 增加行高 */
  color: #495057;
  margin-bottom: 8px;
}
.event-item p:last-child {
  margin-bottom: 0;
}

.event-item strong {
  color: #343a40;
  margin-right: 5px;
}

.details-toggle-button {
  background: none;
  border: none;
  color: #005A9C;
  cursor: pointer;
  padding: 5px 0;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;
}
.details-toggle-button:hover {
  text-decoration: underline;
}

.event-description {
  font-size: 0.9em;
  color: #6c757d;
  line-height: 1.6;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #e0e0e0;
  white-space: pre-wrap; /* 保留文本中的换行 */
}
.event-description strong { /* 描述中加粗标题 */
    display: block;
    color: #495057;
    margin-bottom: 5px;
    font-size: 1.05em;
}


.footer {
  background-color: #333;
  color: #ccc;
  text-align: center;
  padding: 15px 40px;
  font-size: 0.9em;
  flex-shrink: 0;
}

@media (max-width: 992px) { /* 在中等屏幕及以下调整布局 */
  .event-item {
    flex-direction: column; /* 图片和内容垂直排列 */
  }
  .event-image-container {
     order: -1; /* 图片显示在内容上方 */
     padding: 10px 10px 0 10px; /* 调整padding */
     max-height: 200px; /* 限制高度 */
     min-width: auto; /* 取消最小宽度 */
     flex-basis: auto; /* 取消基础宽度 */
  }
   .event-image {
      max-height: 180px; /* 进一步限制图片高度 */
   }
  .event-content {
      min-width: auto; /* 取消最小宽度 */
      flex-basis: auto; /* 取消基础宽度 */
  }
}

@media (max-width: 768px) {
  .header { padding: 15px 20px; }
  .header h1 { font-size: 1.6em; }
  .back-button { padding: 6px 12px; font-size: 0.8em; left: 15px; }
  .main-content { padding: 20px; }
  .info-source-section, .example-events-section { padding: 20px; }
  .info-source-section h2, .example-events-section h2 { font-size: 1.4em; }
  .info-source-section p, .info-source-section li { font-size: 1em; }
  .event-item h3 { font-size: 1.2em; }
  .event-item p { font-size: 0.9em; }
}
</style>
