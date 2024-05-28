<template>
  <client-only>
    <div :class="props.id">
      <Swiper v-bind="module" :navigation="true">
        <SwiperSlide
          class="group bg-white shadow-md"
          v-for="item in props.productData"
          :key="item.id"
        >
          <li>
            <NuxtLink to="/product/1">
              <div class="relative">
                <NuxtImg
                  src="/apple-1.jpeg"
                  :alt="item.title"
                  class="relative w-full rounded-t-lg"
                />
                <div
                  class="absolute inset-0 rounded-t-lg bg-primary-light opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                ></div>
                <div
                  class="absolute left-1/2 top-1/2 z-10 h-[50px] w-[50px] -translate-x-[35%] -translate-y-1/2 transform bg-apple-icon bg-contain bg-no-repeat opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></div>
              </div>
              <div class="p-3">
                <h4 class="text-xl font-medium">{{ item.title }}</h4>
                <p class="mb-3 text-primary-red">$ {{ item.price }}</p>
                <div class="flex flex-col items-center md:flex-row">
                  <button
                    class="btn-primary-gray mb-2 flex w-full items-center justify-center text-sm md:mb-0 md:me-2 md:w-1/2"
                  >
                    <span class="me-2 whitespace-nowrap text-[14px]"
                      >加入收藏
                    </span>
                    <Icon
                      icon="mdi:heart"
                      class="h-[24px] w-[24px] text-white lg:h-[24px] lg:w-[24px]"
                    />
                  </button>
                  <button
                    class="btn-primary-gray flex w-full items-center justify-center text-sm md:w-1/2"
                  >
                    <span class="me-2 whitespace-nowrap">購物車</span>
                    <Icon
                      icon="mdi:cart"
                      class="h-[24px] w-[24px] text-white lg:h-[24px] lg:w-[24px]"
                    />
                  </button>
                </div>
              </div>
            </NuxtLink>
          </li>
        </SwiperSlide>
      </Swiper>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperBtn = useSwiper();
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
}
const props = defineProps({
  productData: {
    type: Array as PropType<Product[]>,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  module: {
    type: Object as PropType<SwiperConfig>,
    required: true
  }
});
</script>

<style scoped>
.swiper {
  padding: 40px 0 !important;
  margin: 0 40px;
}
:deep(.swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
}
:deep(.swiper-pagination-bullet-active) {
  background: #729d38 !important;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #729d38;
}
</style>

