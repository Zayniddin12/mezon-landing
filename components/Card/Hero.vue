<template>
  <div v-if="!loading">
    <div
      class="flex flex-col"
      :class="{ 'sm:border-r sm:border-gray-400 sm:pr-8': index !== 2 }"
    >
      <div
        v-if="index !== 2"
        class="flex justify-center text-[28px] text-dark font-bold lg:text-[44px]"
      >
        <ClientOnly>
          <count-up
            class="justify-center text-center"
            :start-val="0"
            :end-val="statistic.num"
            :duration="2"
            delay="0"
            :options="{
              separator: ' ',
            }"
          >
          </count-up
        ></ClientOnly>
      </div>
      <div
        v-else
        class="flex justify-center text-[28px] text-dark font-bold lg:text-[44px]"
      >
        <ClientOnly>
          <count-up
            :start-val="0"
            :end-val="statistic.num"
            :duration="2"
            :options="{
              separator: ' ',
              decimalPlaces: 1,
            }"
          >
          </count-up
        ></ClientOnly>
      </div>

      <div class="lg:text-xl leading-130 text-gray text-base">
        {{ $t(statistic?.label) }}
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col">
    <div class="shimmer w-[180px] h-[57px]" />
    <div class="shimmer w-[200px] h-[26px]" />
  </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'

const loading = ref(true)
interface IStatistic {
  num: number | string
  label: string
  counter: number
}

const props = withDefaults(
  defineProps<{
    statistic: IStatistic
    index: number
  }>(),
  {
    statistic: () => ({
      num: 0,
      label: '',
      counter: 0,
    }),
    index: 0,
  }
)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
