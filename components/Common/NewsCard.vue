<template>
  <NuxtLink :to="`/news/${news?.slug}`">
    <div
      class="border border-zinc-100 rounded-2xl group cursor-pointer hover:border-blue-500/40 hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.16)] hover:shadow-[#00000029] transition-300"
    >
      <BaseImage
        alt="news image"
        :src="news?.image ?? '/images/noimage.jpg'"
        :class="style"
        class="w-full h-[200px] rounded-2xl object-cover"
      />
      <div class="p-4 grid gap-y-2">
        <div
          class="absolute border border-gray-200 rounded-[20px] px-2 py-1 text-zinc-500 text-xs font-proxima"
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
          class="text-slate-800 text-xl mt-10 font-proxima line-clamp-2 group-hover:text-blue-500 transition-300"
        >
          {{ news?.title }}
        </p>
        <p class="text-zinc-500 text-sm font-proxima line-clamp-2">
          {{ news?.summary }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import 'dayjs/locale/uz-latn'
import 'dayjs/locale/ru'

import dayjs from 'dayjs'

interface Props {
  news?: object
  style?: string
}

defineProps<Props>()
</script>
