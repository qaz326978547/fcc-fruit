<template>
  <MainHeader />
  <div class="pt-[56px] lg:pt-[120px]">
    <slot />
  </div>
  <FooterComponent />
  <div class="fixed bottom-[10%] right-[20px] z-10 flex flex-col">
    <button class="group relative mb-2 rounded-full bg-primary p-2">
      <nuxt-link class="" :to="{ name: 'index' }">
        <NuxtImg
          src="/fixedBtn-cart.svg"
          alt="購物車"
          class="h-[36px] w-[36px] text-white"
        />
        <p
          class="sh absolute left-auto right-[80%] top-1/2 h-[30px] w-0 -translate-y-1/2 rounded-3xl bg-white text-center text-primary-light text-transparent shadow-fixed-button group-hover:w-[120px] group-hover:text-primary-light group-hover:transition-all"
        >
          購物車
        </p>
        <span
          class="absolute left-[-10px] top-[-5px] z-10 h-[25px] w-[25px] rounded-2xl bg-brown text-white"
          >0</span
        >
      </nuxt-link>
    </button>
    <button class="group relative mb-2 rounded-full bg-yellow-light p-2">
      <nuxt-link class="" :to="{ name: 'index' }">
        <NuxtImg
          src="/fixedBtn-new.svg"
          alt="最新上市"
          class="h-[36px] w-[36px]"
        />
        <p
          class="sh absolute left-auto right-[80%] top-1/2 h-[30px] w-0 -translate-y-1/2 rounded-3xl bg-white text-center text-primary-light text-transparent shadow-fixed-button group-hover:w-[120px] group-hover:text-primary-light group-hover:transition-all"
        >
          最新上市
        </p>
      </nuxt-link>
    </button>
    <button class="group relative mb-2 rounded-full bg-secondary p-2">
      <nuxt-link class="" :to="{ name: 'index' }">
        <NuxtImg
          src="/fixedBtn-recommend.svg"
          alt="推薦商品"
          class="h-[36px] w-[36px]"
        />
        <p
          class="sh absolute left-auto right-[80%] top-1/2 h-[30px] w-0 -translate-y-1/2 rounded-3xl bg-white text-center text-primary-light text-transparent shadow-fixed-button group-hover:w-[120px] group-hover:text-primary-light group-hover:transition-all"
        >
          推薦商品
        </p>
      </nuxt-link>
    </button>
    <button class="group relative rounded-full bg-brown p-2">
      <nuxt-link class="" :to="{ name: 'index' }">
        <NuxtImg
          src="/fixedBtn-record.svg"
          alt="訂購紀錄"
          class="h-[36px] w-[36px] text-white"
        />
        <p
          class="sh absolute left-auto right-[80%] top-1/2 h-[30px] w-0 -translate-y-1/2 rounded-3xl bg-white text-center text-primary-light text-transparent shadow-fixed-button group-hover:w-[120px] group-hover:text-primary-light group-hover:transition-all"
        >
          訂購紀錄
        </p>
      </nuxt-link>
    </button>
  </div>
</template>

<script setup lang="ts">
//
import { useRouter, useRoute } from 'vue-router';

//取得所有路由 getRoute
const router = useRouter();

//客戶端才執行
if (process.client) {
  console.log(router.getRoutes());
}
</script>

