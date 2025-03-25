<template>
  <div
    class="bg-[#F0F2F5] pt-[145px] !scroll-pt-[175px] sm:pb-[82px] pb-10 max-[900px]:pt-10"
  >
    <div class="container flex gap-10 max-[900px]:flex-col justify-between">
      <img
        src="/images/star1.png"
        alt="star"
        class="absolute left-0 top-10 z-0"
      />
      <div class="mx-auto relative z-10 min-[901px]:w-1/2">
        <h2
          class="text-slate-800 sm:text-[32px] text-2xl font-bold font-proximaA leading-[41.60px] max-[900px]:text-center"
        >
          {{ $t('about_app') }}
        </h2>

        <p
          class="min-[900px]:max-w-[498px] w-full text-slate-800 text-sm font-normal font-proximaA leading-tight mt-4 max-[900px]:text-center max-[660px]:text-sm"
        >
          {{ $t('easy_interview') }} <br />
          <br />
          {{ $t('easy_interview1') }}
          <br />
          <br />
          {{ $t('easy_interview2') }}
        </p>
      </div>

      <ul
        class="relative z-10 grid gap-4 grid-cols-2 gap-y-4 max-sm:mt-6 max-[500px]:pt-0 max-[900px]:pt-10 max-[500px]:grid-cols-1 justify-items-center"
      >
        <li
          v-for="(item, index) in features"
          :key="index"
          class="w-full p-5 bg-white rounded-2xl shadow max-[500px]:mt-0 hover:bg-[#E8EEF4] duration-300 card"
          :class="{
            'min-[501px]:-mt-[60px] min-[501px]:mb-[60px]': index == 0,
            'min-[501px]:-mt-[60px] min-[501px]:mb-[40px]': index == 2,
          }"
        >
          <div
            class="w-[63px] h-[63px] p-[7.50px] bg-blue-500 rounded-xl mx-auto"
          >
            <i :class="item?.icon" class="text-white text-5xl"></i>
          </div>

          <h3
            class="w-full text-center text-slate-800 text-xl font-bold font-proxima mt-4 mx-auto max-[900px]:text-base"
          >
            {{ $t(item?.title) }}
          </h3>
          <p
            class="max-w-[246px] w-full text-center text-zinc-500 text-sm font-normal font-proximaA leading-[18.20px] mt-1.5 mx-auto max-[900px]:text-sm"
          >
            {{ $t(item?.description) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { features } from '~/data'
</script>
<style>
.card {
  box-shadow: 0px 6px 20px 0px rgba(8, 35, 66, 0.04),
    0px 20px 40px 0px rgba(8, 35, 66, 0.04);
}
</style>
