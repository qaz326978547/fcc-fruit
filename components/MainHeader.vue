<template>
  <header class="bg-image fixed left-0 right-0 top-0 z-50 bg-primary bg-bg-1">
    <div class="lg:p-3">
      <div class="relative flex items-center justify-between">
        <button class="bg-primary-light p-2" @click="toggleMenu">
          <Icon
            icon="fe:bar"
            width="40"
            height="40"
            class="text-white lg:hidden"
          />
        </button>
        <h1 class="bg ml-[10px] w-full lg:ml-0">
          <nuxt-link :to="{ name: 'index' }">
            <NuxtImg
              src="/logo.png"
              alt="傅青青水果行Logo"
              class="w-[100px] lg:w-[200px]"
            />
          </nuxt-link>
        </h1>
        <div>
          <div
            class="flex w-full items-center justify-end pe-4 lg:mb-2 lg:pe-4"
          >
            <div class="group">
              <button
                class="group-hover:primary-red rounded-lg border border-transparent bg-primary-red p-1 group-hover:bg-white lg:rounded-lg lg:p-2"
              >
                <Icon
                  icon="mdi:heart"
                  class="h-[24px] w-[24px] text-white group-hover:text-red-700 lg:h-[24px] lg:w-[24px]"
                />
              </button>
            </div>
            <div class="group mx-2">
              <button
                class="group-hover:primary-red rounded-lg border border-transparent bg-primary-red p-1 group-hover:bg-white lg:rounded-lg lg:p-2"
              >
                <Icon
                  icon="octicon:feed-person-16"
                  class="h-[24px] w-[24px] text-white group-hover:text-red-700 lg:h-[24px] lg:w-[24px]"
                />
              </button>
            </div>
            <div class="group">
              <button
                class="group-hover:primary-red rounded-lg border border-transparent bg-primary-red p-1 group-hover:bg-white lg:p-2"
              >
                <Icon
                  icon="mdi:cart"
                  class="h-[24px] w-[24px] text-white group-hover:text-red-700 lg:h-[24px] lg:w-[24px]"
                />
              </button>
            </div>
          </div>
          <!-- PC -->
          <ul class="hidden rounded-[32px] bg-white lg:flex">
            <li
              v-for="(list, index) in navList"
              class="relative flex w-1/6 flex-col items-center justify-center text-center"
              :key="index"
              @mouseover="showDropdown[index] = true"
              @mouseleave="hideDropdown(index)"
            >
              <nuxt-link
                class="whitespace-nowrap px-6 py-2 text-lg font-bold"
                :class="{
                  'router-link-active bg-primary-red text-white':
                    showDropdown[index],
                  'rounded-l-[32px]': index === 0,
                  'rounded-r-[32px]': index === navList.length - 1
                }"
                :to="list.path"
                >{{ list.name }}
              </nuxt-link>

              <div
                class="absolute left-[-2px] top-[37px] z-50 mt-2 w-32 overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                v-show="showDropdown[index] && list.dropdown"
                @mouseleave="hideDropdown(index)"
              >
                <div>
                  <nuxt-link
                    v-for="(item, i) in list.dropdown"
                    :key="i"
                    class="block border-b px-3 py-2 text-sm font-bold hover:bg-primary-red hover:text-white"
                    :to="item.path"
                    >{{ item.name }}
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- Mobile -->
  <transition
    name="fade"
    class="fixed left-0 right-0 top-[56px] z-10 flex flex-col items-center justify-center overflow-hidden bg-black opacity-80 lg:hidden"
  >
    <ul v-if="isMenuOpen">
      <li
        v-for="(list, index) in navList"
        class="relative flex w-full flex-col items-center justify-center py-1 text-center"
        :key="index"
      >
        <nuxt-link
          class="w-full whitespace-nowrap px-6 py-2 text-lg font-bold text-white hover:bg-white hover:text-black"
          :to="list.path"
        >
          {{ list.name }}
        </nuxt-link>
      </li>
    </ul>
  </transition>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const $route = useRoute();
interface DropdownItem {
  name: string;
  path: Path;
}
interface Path {
  path: string;
  query?: { [key: string]: string };
}

interface NavList {
  name: string;
  path: Path | string;
  dropdown?: DropdownItem[];
}

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navList: NavList[] = [
  {
    name: '日本進口',
    path: {
      path: '/product',
      query: { dataList: 'japan', type: 'all' }
    },
    dropdown: [
      {
        name: '水蜜桃',
        path: {
          path: '/product',
          query: { dataList: 'japan', type: 'peach' }
        }
      },
      {
        name: '葡萄',
        path: {
          path: '/product',
          query: { dataList: 'japan', type: 'grape' }
        }
      },
      {
        name: '柑橘',
        path: {
          path: '/product',
          query: { dataList: 'japan', type: 'citrus' }
        }
      },
      {
        name: '蘋果',
        path: {
          path: '/product',
          query: { dataList: 'japan', type: 'apple' }
        }
      },
      {
        name: '哈密瓜',
        path: {
          path: '/product',
          query: { dataList: 'japan', type: 'melon' }
        }
      }
    ]
  },
  {
    name: '台灣嚴選',
    path: {
      path: '/product',
      query: { dataList: 'taiwan', type: 'all' }
    },
    dropdown: [
      {
        name: '蘋果',
        path: {
          path: '/product',
          query: { dataList: 'taiwan', type: 'apple' }
        }
      },
      {
        name: '梨子',
        path: {
          path: '/product',
          query: { dataList: 'taiwan', type: 'pear' }
        }
      },
      {
        name: '水蜜桃',
        path: {
          path: '/product',
          query: { dataList: 'taiwan', type: 'peach' }
        }
      },
      {
        name: '哈密瓜',
        path: {
          path: '/product',
          query: { dataList: 'taiwan', type: 'melon' }
        }
      },
      {
        name: '芒果',
        path: {
          path: '/product',
          query: { dataList: 'taiwan', type: 'mango' }
        }
      }
    ]
  },
  {
    name: '精選禮盒',
    path: {
      path: '/product',
      query: { dataList: 'gift', type: 'all' }
    },
    dropdown: [
      {
        name: '1499元內禮盒',
        path: {
          path: '/product',
          query: { dataList: 'gift', type: '1499' }
        }
      },
      {
        name: '1500-2499元禮盒',
        path: {
          path: '/product',
          query: { dataList: 'gift', type: '1500-2499' }
        }
      },
      {
        name: '2500元以上禮盒',
        path: {
          path: '/product',
          query: { dataList: 'gift', type: '2500' }
        }
      }
    ]
  },
  { name: '訂購說明', path: '/orderGuide' },
  { name: '最新消息', path: '/news' },
  { name: '關於傅青青', path: '/faq' }
];

const showDropdown = ref(navList.map(() => false));

const hideDropdown = (index: number) => {
  setTimeout(() => {
    showDropdown.value[index] = false;
  }, 100);
};

//使用wtach 當路由變換時 關閉menu
watch(
  () => $route,
  () => {
    isMenuOpen.value = false;
  },
  { deep: true }
);
</script>

