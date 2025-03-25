<template>
  <NuxtLink :to="`/news/${news?.slug}`">
    <div
      :class="style"
      class="relative rounded-2xl group overflow-hidden h-[250px]"
    >
      <BaseImage
        :src="news?.image"
        class="w-full !h-full object-cover"
        :alt="news?.title"
      />
      <div
        class="w-full h-3/5 absolute bottom-0 z-10 opacity-100 bg-gradient-to-t from-[#040C30] to-[#040C3000]"
      >
        <div class="absolute left-6 bottom-6">
          <div
            :class="{
              'border border-gray-200 backdrop-blur-lg bg-white/15 rounded-[20px] text-white':
                isblur,
            }"
            class="inline-block px-2 py-1 text-xs text-gray-800 font-proxima"
          >
            {{
              dayjs(new Date(news?.post_date))
                .locale(
                  $i18n.locale === 'uz'
                    ? 'uz-latn'
                    : $i18n.locale === 'ru'
                    ? 'ru'
                    : $i18n.locale
                )
                .format('DD MMM, YYYY')
            }}
          </div>
          <p
            class="text-white group-hover:text-sky-400 transition-300 font-normal font-proximaA sm:leading-[31.20px]"
          >
            {{ news?.title }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
  news: {
    image?: string
    title?: string
    post_date?: string
    slug?: string
  }
  isblur?: boolean
  style?: string
}
defineProps<Props>()
</script>
