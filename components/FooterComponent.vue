<template>
  <footer class="bg-primary text-white">
    <div
      class="flex flex-col items-center justify-between border-b-2 border-white px-4 py-6 md:flex-row"
    >
      <ul class="mb-4 leading-loose md:mb-0">
        <li>門市地址 : 408 台中市南屯區惠中路三段 49 號</li>
        <li>門市電話 : ( 04 ) 2258-7171</li>
        <li>營業時間 : 早上 08:00 至晚上 21:00　全年無休</li>
        <li>瀏覽人數 : 9385525</li>
      </ul>
      <div class="flex">
        <NuxtImg src="/lineQR.png" alt="line" class="me-6" width="123" />
        <NuxtImg src="/facebookQR.png" alt="facebook" width="123" />
      </div>
    </div>
    <ul
      class="flex flex-col items-center justify-between px-3 py-12 md:flex-row"
    >
      <li>
        <nuxt-link :to="{ name: 'index' }">
          <NuxtImg src="/logo.png" alt="傅青青水果行Logo" class="w-[200px]" />
        </nuxt-link>
      </li>
      <li class="my-4 md:my-0">
        <p>統一編號：45337541</p>
        <p>傅青青果行 © 2020</p>
      </li>
      <li class="flex">
        <a
          href="https://line.me/ti/p/%40amv1399u"
          target="_blank"
          class="me-2 rounded-full bg-white p-1"
        >
          <Icon
            icon="ri:line-fill"
            width="36"
            height="36"
            style="color: #37b800"
          />
        </a>
        <a
          href="https://zh-tw.facebook.com/fcc168168"
          target="_blank"
          class="me-2 rounded-full bg-white p-1"
        >
          <Icon
            icon="mingcute:facebook-fill"
            width="36"
            height="36"
            style="color: #144fff"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCRy3b4U78OOnYPhbSUAO5ZA"
          target="_blank"
          class="me-2 rounded-full bg-white p-1"
        >
          <Icon
            icon="bi:youtube"
            width="36"
            height="36"
            style="color: #f40101"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts"></script>

