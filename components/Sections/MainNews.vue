<template>
  <div class="pt-[60px] !overflow-visible">
    <div class="container">
      <div class="flex justify-between items-center mb-10">
        <h2
          class="text-slate-800 text-[32px] mb-2 font-semibold leading-[41.60px]"
        >
          {{ $t('pages.news') }}
        </h2>
        <NuxtLink
          to="/news"
          class="relative md:hidden flex flex-center gap-1 text-zinc-500 transition-300 hover:text-blue-500 ml-auto"
        >
          <p class="text-sm leading-tight">{{ $t('all_things') }}</p>
          <i class="icon-left text-lg bg-white" />
        </NuxtLink>
      </div>
      <div class="flex mb-10">
        <p
          class="text-zinc-500 max-w-[500px] text-base font-proximaA mr-4 leading-tight"
        >
          {{ $t('pages.news_subtitle') }}
        </p>
        <NuxtLink
          to="/news"
          class="relative md:flex items-center hidden gap-1 text-zinc-500 transition-300 hover:text-blue-500 ml-auto"
        >
          <p class="text-sm leading-tight">{{ $t('all_things') }}</p>
          <i class="icon-left text-lg bg-white" />
        </NuxtLink>
      </div>

      <div class="pb-[60px]">
        <div v-if="!resposive" class="flex gap-6 max-lg:flex-wrap">
          <div class="flex gap-6 w-full flex-wrap sm:flex-nowrap">
            <Transition name="fade" mode="out-in">
              <div :key="loading" class="max-sm:w-full">
                <div
                  v-if="!loading"
                  class="sm:w-[278px] w-full sm:flex sm:flex-col grid min-[500px]:grid-cols-2 grid-cols-1 object-cover gap-[20px]"
                >
                  <CommonNewsCard
                    v-for="news in news?.items?.slice(0, 2)"
                    :key="news.id"
                    :news="news"
                    :style="'!h-[182px]'"
                  />
                </div>
                <div
                  v-else
                  class="md:w-[278px] sm:w-[900px] w-[500px] flex flex-row md:flex-col gap-8 object-cover !h-full"
                >
                  <div
                    v-for="key in 2"
                    :key="key"
                    class="border md:w-full border-zinc-100 rounded-2xl overflow-hidden w-full"
                  >
                    <span
                      class="w-full h-[200px] rounded-2xl object-cover shimmer"
                    />
                    <div class="p-4 grid gap-y-2">
                      <div
                        class="rounded-[20px] w-[30%] h-6 min-[490px]:w-[20%] md:w-1/2 shimmer"
                      />
                      <span class="h-5 w-full shimmer rounded-lg" />
                      <span class="h-5 w-full shimmer rounded-lg" />
                      <p
                        class="text-zinc-500 text-sm font-proxima line-clamp-2"
                      >
                        {{ news?.summary }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <Transition name="fade" mode="out-in" class="w-full">
              <div :key="loading" class="w-full">
                <div
                  v-if="!loading && news?.items.length"
                  class="min-[500px]:grid lg:max-w-[550px] !w-full min-[500px]:grid-cols-2 object-cover gap-6"
                >
                  <CommonMainNewsCard
                    v-for="(news, key) in news?.items.slice(0, 1)"
                    :key="key"
                    :news="news"
                    :isblur="key == 0"
                    :style="'!h-[410px]'"
                    :class="{
                      'col-span-2 h-full w-full ': key == 0,
                    }"
                  />
                  <CommonSecondaryNewsCard
                    v-for="(news, key) in news?.items.slice(1, 3)"
                    :key="key"
                    :news="news"
                    :isblur="key == 0"
                  />
                </div>
                <div
                  v-else
                  class="min-[500px]:grid flex flex-col lg:max-w-[550px] !w-full min-[500px]:grid-cols-2 gap-6"
                >
                  <div
                    v-for="key in 3"
                    :key="key"
                    :class="{ 'col-span-2 !h-[400px] w-full': key == 1 }"
                    class="hidden md:block h-[265px] w-full border border-zinc-100 relative rounded-2xl group overflow-hidden bg-white"
                  >
                    <span class="w-full max-h-[400px] shimmer" />
                    <div
                      class="w-full h-3/5 absolute bottom-0 opacity-100 bg-gradient-to-t from-[#040C30] to-[#040C3000]"
                    >
                      <div class="absolute left-6 bottom-6 w-full">
                        <span
                          class="border border-gray-200 rounded-[20px] shimmer w-[30%] h-6"
                        />
                        <span
                          class="shimmer w-[80%] h-4 rounded-lg sm:leading-[31.20px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div
            class="lg:max-w-[278px] lg:grid w-full flex gap-6 max-[500px]:flex-col object-cover h-full"
          >
            <Transition name="fade" mode="out-in">
              <div :key="loading" class="w-full">
                <template v-if="!loading && news?.items[0]">
                  <SecondaryOneCard :news="news?.items[0]" />
                </template>
                <div
                  v-else
                  class="md:block hidden w-full h-full lg:!h-[280px] border border-zinc-100 relative rounded-2xl group overflow-hidden bg-white"
                >
                  <span class="w-full max-h-[400px] shimmer" />
                  <div
                    class="w-full h-3/5 absolute bottom-0 opacity-100 bg-gradient-to-t from-[#040C30] to-[#040C3000]"
                  >
                    <div class="absolute left-6 bottom-6 w-1/2">
                      <span
                        class="border border-gray-200 rounded-[20px] shimmer w-[30%] h-6"
                      />
                      <span
                        class="shimmer w-[80%] h-4 rounded-lg sm:leading-[31.20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <a
              class="hidden md:block"
              href="https://uic.group/"
              target="_blank"
            >
              <img
                alt="home add"
                src="@/public/images/banners/uicbanner.png"
                class="rounded-xl lg:max-h-[385px] h-full w-[300px] object-cover"
              />
            </a>
          </div>
        </div>

        <div v-else class="overflow-visible">
          <swiper
            :slides-per-view="1.3"
            :space-between="50"
            :breakpoints="{
              '550': {
                slidesPerView: 2.3,
              },
              '835': {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
            }"
          >
            <swiper-slide v-for="(item, index) in news?.items" :key="index">
              <CommonNewsCard
                :news="item"
                class="pointer-events-none"
                :style="'!h-[170px]'"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <a class="w-full" href="https://xb.uz/" target="_blank">
        <img
          class="w-full max-sm:h-20 object-contain aspect-[1,1]"
          src="@/public/images/ads.png"
          alt="ads"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'

import NewsCard from '~/components/Common/NewsCard.vue'
import SecondaryOneCard from '~/components/Common/SecondaryOneCard.vue'

const { width } = useWindowSize()
const resposive = ref(false)

const loading = ref(true)
const news = ref()

const getNews = async () => {
  loading.value = true
  await useApi()
    .$get('/blog/list', {
      params: {
        page_size: 6,
      },
    })
    .then((res) => {
      news.value = res
    })
    .finally(() => {
      loading.value = false
    })
}

getNews()

onMounted(() => {
  if (width.value < 835) {
    resposive.value = true
  }
})
</script>
