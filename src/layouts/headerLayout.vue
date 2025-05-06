<template>
  <div class="header-layout h-28 w-full flex bg-white justify-between items-center px-8">
    <div class="logo-container flex items-center">
      <img src="../assets/imgs/jlulogo.png" alt="logo" class="h-20" />
    </div>
    <div class="menu-container flex space-x-12 text-xl font-medium pr-32">
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">吉大概况</div>
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">校园导览</div>
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">学术资源</div>
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">校园生活</div>
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">四季美景</div>
      <div class="menu-item cursor-pointer hover:text-blue-600 transition-colors">吉大周边</div>
    </div>
    <div class="icon-container flex space-x-8 pr-8">
      <div class="icon-item cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div class="icon-item cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <div class="icon-item cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
