<template>
  <div class="container">
    <div
      class="flex max-[1120px]:flex-col md:mt-[120px] mt-16 relative justify-between max-[850px]:items-center max-[850px]:justify-center"
    >
      <div class="relative z-10 max-[850px]:w-full">
        <div class="w-full min-[1120px]:max-w-[541px] max-[660px]:m-0">
          <i18n-t
            class="text-slate-800 text-[52px] font-bold leading-[62.40px] max-[850px]:text-[42px] max-[850px]:leading-[48px] max-[660px]:text-[32px] max-[660px]:leading-[32.40px]"
            keypath="hero_title"
            tag="h2"
          >
            <template #link>
              <span class="text-blue">
                {{ $t('fast_and_easy') }}
              </span>
            </template>
          </i18n-t>
          <p
            class="text-zinc-500 text-base font-normal leading-snug mt-4 max-[850px]:text-sm max-[514px]:text-xs"
          >
            {{ $t('hero_desc') }}
          </p>

          <nuxt-link :to="{ path: '/', hash: '#load-section' }">
            <BaseButton
              :text="$t('download_app')"
              class="py-3.5 px-[30px] mt-10 max-[850px]:mx-auto"
            />
          </nuxt-link>
        </div>
        <div
          class="flex gap-8 mt-28 max-[660px]:flex-wrap max-[660px]:flex-center max-sm:justify-center mb-12 max-[660px]:mt-10"
        >
          <CardHero
            v-for="(statistic, index) in statistics"
            :key="index"
            :statistic="statistic"
            :index="index"
            class="flex max-lg:flex-wrap gap-8 max-[660px]:flex-col flex-center max-[660px]:gap-4"
          />
        </div>
      </div>

      <div class="flex flex-col items-center">
        <client-only>
          <kinesis-container>
            <kinesis-element :strength="10" class="relative z-20">
              <img
                src="/images/herro/iPhone.webp"
                alt="iphone"
                class="relative z-20 max-[1120px]:-mb-52 -mb-2 max-[1120px]:mx-auto sm:h-[700px] h-[400px]"
            /></kinesis-element>
          </kinesis-container>
        </client-only>
        <div
          class="absolute z-0 opacity-[0.14] -top-28 min-[1120px]:-right-40 max-[1120px]:left-auto mx-auto decoration rounded-full w-[865.448px] h-[863.842px] bg-[#278BFF]/20"
        >
          <div
            class="absolute-center w-[552.345px] h-[552.345px] bg-[#278BFF4D]/30 rounded-full"
          >
            <div
              class="absolute-center w-[317.92px] h-[317.92px] bg-[#278BFF]/50 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

import { statistics } from '~/data'
</script>
<style lang="postcss">
.decoration {
  animation: decoration 1s infinite;
  anmiation-timing-function: linear;
  animation-direction: alternate;
  animation-name: rectangle;
  animation-duration: 1s;

  @keyframes rectangle {
    0% {
      scale: 95%;
    }
    100% {
      scale: 100%;
    }
  }
}
</style>
