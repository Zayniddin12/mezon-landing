<template>
  <div class="bg-blue relative">
    <section class="container">
      <h2
        class="max-w-[479px] text-white text-5xl font-bold font-proximaA leading-[57.60px] max-[764px]:text-center max-[764px]:mx-auto max-[900px]:text-4xl max-[660px]:text-3xl"
      >
        {{ $t('app_download') }}
      </h2>
      <div
        class="max-w-[466px] w-full text-white opacity-70 text-base font-normal font-proximaA leading-tight mt-5 mb-10 max-[764px]:text-center max-[764px]:mx-auto max-[900px]:text-sm"
      >
        {{ $t('download_app_desc') }}
      </div>

      <div class="flex items-center gap-5 flex-wrap max-[764px]:justify-center">
        <a :href="CONFIG.PLAY_STORE" target="_blank">
          <img
            src="/images/mobileLoad/google.svg"
            alt="Appstore"
            class="max-[400px]:mx-auto cursor-pointer"
          />
        </a>

        <a :href="CONFIG.APP_STORE" target="_blank">
          <img
            src="/images/mobileLoad/appStore.svg"
            alt="Appstore"
            class="max-[400px]:mx-auto cursor-pointer"
          />
        </a>
      </div>
    </section>
    <img
      src="/images/mobileLoad/iPhonedec.webp"
      alt="ipone"
      class="absolute -top-[58px] right-0 max-w-[732px] w-full max-[1048px]:max-w-[500px] max-[1048px]:top-[87px] max-[880px]:hidden"
    />

    <img
      src="/images/mobileLoad/qr.png"
      alt="qr"
      class="absolute top-10 right-40 max-[1048px]:top-16 max-[1048px]:right-0 max-[880px]:top-16 max-[880px]:-right-5 max-[765px]:hidden aspect-[1,1] max-w-[120px] max-h-[120px]"
    />
  </div>
</template>
<script setup>
import { CONFIG } from '~/config'
</script>
