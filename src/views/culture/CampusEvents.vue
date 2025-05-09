<template>
  <div class="campus-events">
    <header class="hero-section">
      <h1>校园活动日历</h1>
      <p>发现精彩活动，丰富校园生活</p>
      <div class="current-month">{{ currentMonth }}月活动</div>
    </header>

    <div class="events-container">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <h2>{{ displayMonth }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>

      <div class="event-filters">
        <button 
          v-for="type in eventTypes" 
          :key="type.value"
          :class="{ active: activeType === type.value }"
          @click="activeType = type.value"
        >
          {{ type.label }}
        </button>
      </div>

      <div class="event-list">
        <div 
          v-for="event in filteredEvents" 
          :key="event.id" 
          class="event-card"
          :class="event.type"
        >
          <div class="event-date">
            <div class="day">{{ event.day }}</div>
            <div class="weekday">{{ event.weekday }}</div>
          </div>
          <div class="event-details">
            <h3>{{ event.title }}</h3>
            <div class="meta">
              <span class="time">{{ event.time }}</span>
              <span class="location">{{ event.location }}</span>
            </div>
            <p class="description">{{ event.description }}</p>
            <button class="register-btn">立即报名</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentDate = ref(new Date())
const activeType = ref('all')

const eventTypes = [
  { value: 'all', label: '全部' },
  { value: 'academic', label: '学术' },
  { value: 'art', label: '文艺' },
  { value: 'sports', label: '体育' }
]

const events = [
  {
    id: 1,
    title: '人工智能前沿讲座',
    day: '15',
    weekday: '周三',
    month: 10,
    time: '14:00-16:00',
    location: '计算机楼报告厅',
    description: '特邀清华大学AI研究院教授分享最新研究成果',
    type: 'academic'
  },
  // 更多活动...
]

const currentMonth = computed(() => {
  return currentDate.value.getMonth() + 1
})

const displayMonth = computed(() => {
  return `${currentMonth.value}月 ${currentDate.value.getFullYear()}`
})

const filteredEvents = computed(() => {
  let result = events.filter(e => e.month === currentMonth.value)
  if (activeType.value !== 'all') {
    result = result.filter(e => e.type === activeType.value)
  }
  return result
})

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  )
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  )
}
</script>

<style scoped>
/* 新增日历头部样式 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.event-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.event-filters button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
}

.event-filters button.active {
  background: #3498db;
  color: white;
}

.event-date {
  background: #f5f7fa;
  padding: 10px;
  min-width: 70px;
  text-align: center;
  border-radius: 8px;
}

.day {
  font-size: 1.8rem;
  font-weight: bold;
}

.register-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>