<template>
  <div
    class="header-layout h-24 z-10 w-full flex fixed top-0 left-0 bg-white justify-between items-center px-8"
  >
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
        <i class="pi pi-search text-xl"></i>
      </div>
      <div class="icon-item cursor-pointer">
        <i class="pi pi-user text-xl"></i>
      </div>
      <div class="icon-item cursor-pointer">
        <i class="pi pi-phone text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
