<template>
  <div>
    <client-only>
      <Swiper v-bind="bannerSwiperConfig" class="-z-10">
        <SwiperSlide>
          <NuxtImg
            :src="`/banner-1.jpeg`"
            alt="傅青青水果行,公司外送車隊,新鮮外送到家"
            class="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            :src="`/banner-2.jpeg`"
            alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
            class="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </client-only>
  </div>
  <section class="bg-bg-2 py-8">
    <div class="container">
      <h3 class="mb-3 text-center text-h3 font-bold">最新上市</h3>
      <nuxt-link
        class="flex items-center justify-end font-bold text-primary-red"
        :to="{
          path: '/product',
          query: { dataList: 'new' }
        }"
      >
        <Icon
          class="me-2"
          icon="icon-park-twotone:hand-right"
          width="32"
          height="32"
          style="color: #c20505"
        />
        查看全部
      </nuxt-link>
      <p class="text-center font-bold">新鮮上市水果</p>
      <ProductListSwiperTemplate
        :product-data="newestProduct"
        :id="'newestProduct'"
        :module="newestProductSwiperConfig"
      ></ProductListSwiperTemplate>
    </div>
  </section>
  <section class="py-8">
    <div class="container">
      <h3 class="mb-3 text-center text-h3 font-bold">推薦商品</h3>
      <nuxt-link
        class="flex items-center justify-end font-bold text-primary-red"
        :to="{
          path: '/product',
          query: { dataList: 'recommend' }
        }"
      >
        <Icon
          class="me-2"
          icon="icon-park-twotone:hand-right"
          width="32"
          height="32"
          style="color: #c20505"
        />
        查看全部
      </nuxt-link>
      <p class="text-center font-bold">當季水果</p>
      <ProductListSwiperTemplate
        :product-data="recommendProduct"
        :id="'recommendProduct'"
        :module="recommendProductSwiperConfig"
      ></ProductListSwiperTemplate>
    </div>
  </section>
  <section class="bg-bg-3 py-8">
    <div class="container">
      <div class="mx-auto w-1/2">
        <h4
          class="rounded-t-xl bg-primary-red py-3 text-center font-bold text-white"
        >
          青森蘋果的一生
        </h4>
        <div class="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            class="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/P8WknbhJTQo?si=ofjiH7wMLJzyaIxL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-3xl font-bold">顧客好評</h3>
        <p class="my-4 text-xl font-bold">一試成主顧</p>
        <div class="w-full bg-phone-bg bg-cover">
          <div
            class="relative mx-auto my-8 max-h-[450px] w-full max-w-[400px] overflow-hidden rounded-xl bg-center shadow-md"
          >
            <NuxtImg
              :src="`/index_phone.png`"
              alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
              class="w-full"
            />
            <div
              class="absolute left-[50%] top-[27%] h-[73%] w-[87%] -translate-x-1/2 overflow-y-scroll"
            >
              <NuxtImg
                :src="`/article-3.jpeg`"
                alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
                class="w-full"
              />
              <NuxtImg
                :src="`/article-2.jpeg`"
                alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
                class="w-full"
              />
              <NuxtImg
                :src="`/article-1.jpeg`"
                alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
                class="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-bg-2 py-8">
    <div class="flex flex-col items-center justify-center md:flex-row">
      <div class="md:w-1/2">
        <NuxtImg
          :src="`/index_about.png`"
          alt="傅青青水果行,門市營業時間,門市電話,線上官方客服"
          class="mx-auto min-h-[300px]"
        />
      </div>
      <div class="md:w-1/2">
        <p
          class="mx-auto mb-0 mt-8 max-w-[370px] px-2 leading-loose md:p-0 md:text-left"
        >
          從超市業、供應商、批發商至水果超市，
          <br />
          奠定現今貿易商第一手貨源基礎，
          <br />
          實現年少腦海勾勒出的夢想藍圖；
          <br />
          特殊開放式果櫃，締造有溫度的非凡完美，
          <br />
          極高至上時令精品，來自一次次悉心揀選，
          <br />
          細心隱身水果中，藏匿自製禮盒內，
          <br />
          傅青青使數數果品樸實出身，華麗重生…
        </p>
      </div>
      {{ res }}
      <!-- {{ product }} -->
    </div>
  </section>
</template>

<script setup lang="ts">
const res = await useFetch('https://fcc.zeabur.app/api/v2/products');
const { data: product } = res;
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
//最新上市
interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  content: string;
  origin_price: string;
  price: string;
  quantity: number;
  is_enabled: number;
  unit: string;
  image: string;
  images: string[];
  on_sale_start: string;
  on_sale_end: string;
  is_on_sale: number;
}

const newestProduct = ref<Product[]>([
  {
    id: 1,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 2,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 3,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 4,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 5,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 6,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 7,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 1,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  }
]);
const recommendProduct = ref<Product[]>([
  {
    id: 1,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 2,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 3,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 4,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 5,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 6,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 7,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  },
  {
    id: 1,
    title: '日本套袋富士蘋果6入禮盒(#28)',
    category: '蘋果',
    description: '新鮮水果',
    content: '圖片測試',
    origin_price: '1300.00',
    price: '1300.00',
    quantity: 40,
    is_enabled: 1,
    unit: '盒',
    image: '/apple-1.jpeg',
    images: ['/apple-1.jpeg', '/apple-1.jpeg'],
    on_sale_start: '2024-05-14 16:30:00',
    on_sale_end: '2024-05-14 17:00:00',
    is_on_sale: 1
  }
]);

// import Swiper 與模組樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperConfig {
  modules: any[];
  slidesPerView: number;
  spaceBetween: number;
  loop: boolean;
  centeredSlides?: boolean;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
  pagination: {
    clickable: boolean;
  };
  breakpoints?: {
    768: {
      slidesPerView: number;
    };
    992: {
      slidesPerView: number;
    };
  };
}
const bannerSwiperConfig: SwiperConfig = {
  modules: [
    SwiperNavigation,
    SwiperEffectCreative,
    SwiperPagination,
    SwiperAutoplay
  ],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  }
};
const newestProductSwiperConfig: SwiperConfig = {
  modules: [
    SwiperNavigation,
    SwiperEffectCreative,
    SwiperPagination,
    SwiperAutoplay
  ],
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
};
const recommendProductSwiperConfig: SwiperConfig = {
  modules: [
    SwiperNavigation,
    SwiperEffectCreative,
    SwiperPagination,
    SwiperAutoplay
  ],
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
};
</script>

<style scoped>
.swiper-wrapper,
.swiper {
  z-index: 1 !important;
}

.swiper-pagination-bullet-active {
  background: #729d38 !important;
}
.swiper-pagination-bullet {
  width: 35px;
  height: 10px;
  background-color: black;
  border-radius: 5px;
}
</style>

