<template>
  <div>
    <CommonBreadCrumb :last-link="items?.title" />
    <div class="container sm:grid sm:grid-cols-4 gap-x-6">
      <div class="col-span-3">
        <h1 class="text-slate-800 text-[32px] font-semibold">
          {{ items?.summary }}
        </h1>
        <div
          class="flex gap-1.5 items-center mt-4 mb-6 text-zinc-500 text-sm font-medium"
        >
          <i v-if="items?.post_date" class="icon-calendar-due"> </i>
          <p>
            {{
              dayjs(new Date(items?.post_date))
                .locale(
                  $i18n.locale === 'uz'
                    ? 'uz-latn'
                    : $i18n.locale === 'ru'
                    ? 'ru'
                    : $i18n.locale
                )
                .format('DD MMM, YYYY')
            }}
          </p>
        </div>
        <BaseImage
          alt="news image"
          :src="items?.image"
          class="rounded-2xl w-full object-cover"
        />
        <div
          class="mt-5 text-slate-800 text-base tracking-tight leading-[23.12px]"
        >
          <div class="content" v-html="items?.content" />
        </div>

        <div class="h-px bg-zinc-300 mt-6 mb-5" />
        <div class="flex">
          <div class="flex gap-x-3 text-2xl md:text-4xl">
            <SvgoTwitterBird
              class="text-blue-600 cursor-pointer"
              @click="socialShare('twitter')"
            />
            <svg
              width="36"
              class="cursor-pointer transition-300"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="socialShare('telegram')"
            >
              <g clip-path="url(#clip0_315_344)">
                <path
                  d="M18 0C8.0588 0 0 8.0588 0 18C0 27.9412 8.0588 36 18 36C27.9412 36 36 27.9412 36 18C36 8.0588 27.9412 0 18 0Z"
                  fill="#40B3E0"
                />
                <path
                  d="M26.7585 10.3542L23.5434 26.5639C23.5434 26.5639 23.0938 27.688 21.8573 27.1484L14.4382 21.4604L11.7405 20.1566L7.19914 18.6277C7.19914 18.6277 6.50221 18.3805 6.43471 17.8409C6.36721 17.3013 7.22164 17.0091 7.22164 17.0091L25.2745 9.92723C25.2745 9.92723 26.7584 9.27529 26.7584 10.3544"
                  fill="white"
                />
                <path
                  d="M13.8684 26.3817C13.8684 26.3817 13.6518 26.3615 13.3818 25.507C13.1122 24.6527 11.7407 20.1564 11.7407 20.1564L22.6445 13.232C22.6445 13.232 23.2741 12.8498 23.2516 13.232C23.2516 13.232 23.3639 13.2995 23.0266 13.6142C22.6895 13.9291 14.4611 21.3255 14.4611 21.3255"
                  fill="#D2E5F1"
                />
                <path
                  d="M17.2827 23.6412L14.3483 26.3167C14.3483 26.3167 14.1188 26.4908 13.8679 26.3817L14.4299 21.412"
                  fill="#B5CFE4"
                />
              </g>
              <defs>
                <clipPath id="clip0_315_344">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <i
              class="icon-facebook text-blue-900 cursor-pointer"
              @click="socialShare('facebook')"
            />
          </div>
          <div
            class="group relative w-9 h-9 bg-[#EDEDED] rounded-lg border border-[#ABABAB] flex items-center justify-center ml-auto cursor-pointer"
            @click="copyText()"
          >
            <i class="icon-copy text-[#77797B] text-[13.33px] align-middle" />
            <div
              class="group-hover:opacity-100 opacity-0 transition-300 absolute bg-dark text-white py-2 px-4 rounded-lg -top-14 z-0"
            >
              <p class="whitespace-nowrap">{{ copytext }}</p>
              <SvgoPointer
                class="absolute bottom-1 translate-y-full text-dark z-10 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        </div>
        <SectionsRelatedNews :items="items?.related_blogs" />
      </div>
      <CommonAdvertisement
        class="mb-5 flex-center flex-col pt-6 sm:block sm:col-span-1 w-full"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import 'dayjs/locale/uz-latn'
import 'dayjs/locale/ru'

import dayjs from 'dayjs'

const { t } = useI18n()

const copytext = ref(t('copy'))

async function copyText() {
  await navigator.clipboard.writeText(window.location.href)
  copytext.value = t('copied')
  setTimeout(() => {
    copytext.value = t('copy')
  }, 2000)
}
const { data: items, error } = await useAsyncData('slug', () =>
  useApi().$get(`/blog/${useRoute().params.slug}`)
)
if (error.value) showError({ status: 404 })

// Assuming useSeoMeta takes an object, you can then call it with the computed value
useSeoMeta({
  title: items.value?.summary,
  ogTitle: items.value?.summary,
  description: richTextPurify(items.value?.content),
  ogDescription: richTextPurify(items.value?.content),
  twitterTitle: items.value?.summary,
  twitterDescription: richTextPurify(items.value?.content),
  ogImage: items.value?.image,
  twitterImage: items.value?.image,
})
</script>
<style>
.content p {
  @apply text-zinc-500 text-base font-normal leading-[23.12px] tracking-tight;
}
.content blockquote {
  @apply flex mt-6 mb-5 p-6 bg-blue-500/5 border border-blue-500/10;
}
.content blockquote {
  @apply text-justify text-slate-800 text-lg sm:text-xl font-proxima sm:leading-7;
}

.content blockquote::before {
  content: '\e911';
  font-family: icomoon;
  @apply text-[#278BFF] sm:text-2xl md:text-4xl mr-4;
}
</style>
