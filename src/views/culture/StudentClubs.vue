<template>
  <div class="student-clubs">
    <header class="hero-section">
      <h1>学生社团中心</h1>
      <p>发现兴趣，结交伙伴</p>
    </header>

    <div class="clubs-container">
      <div class="club-search">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索社团..."
        >
        <select v-model="selectedCategory">
          <option value="all">全部类别</option>
          <option 
            v-for="category in categories" 
            :key="category.value"
            :value="category.value"
          >
            {{ category.label }}
          </option>
        </select>
      </div>

      <div class="club-list">
        <div 
          v-for="club in filteredClubs" 
          :key="club.id" 
          class="club-card"
        >
          <div class="club-header">
            <img :src="club.logo" :alt="club.name">
            <div class="club-info">
              <h3>{{ club.name }}</h3>
              <span class="category">{{ club.category }}</span>
              <div class="stats">
                <span>成员: {{ club.members }}</span>
                <span>成立: {{ club.established }}</span>
              </div>
            </div>
          </div>
          <p class="description">{{ club.description }}</p>
          <div class="club-footer">
            <router-link :to="`/clubs/${club.id}`" class="detail-btn">详情</router-link>
            <button class="join-btn" @click="showJoinDialog(club)">加入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { value: 'academic', label: '学术科技' },
  { value: 'art', label: '文化艺术' },
  // 更多分类
]

const clubs = [
  {
    id: 1,
    name: '机器人协会',
    category: '学术科技',
    logo: '/images/clubs/robot.jpg',
    members: 85,
    established: '2015年',
    description: '研究机器人技术，参加各类机器人竞赛',
    type: 'academic'
  },
  // 更多社团数据
]

const filteredClubs = computed(() => {
  let result = clubs
  if (selectedCategory.value !== 'all') {
    result = result.filter(c => c.type === selectedCategory.value)
  }
  if (searchQuery.value) {
    result = result.filter(c => 
      c.name.includes(searchQuery.value) || 
      c.description.includes(searchQuery.value)
    )
  }
  return result
})

function showJoinDialog(club) {
  // 加入社团逻辑
}
</script>

<style scoped>
.club-search {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.club-search input {
  flex: 1;
  padding: 10px;
}

.club-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.club-header {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.club-header img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.category {
  background: #eee;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.club-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.detail-btn {
  color: #3498db;
  text-decoration: none;
}

.join-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
}
</style>