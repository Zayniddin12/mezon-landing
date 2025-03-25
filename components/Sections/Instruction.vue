<template>
  <div class="bg-[#F0F2F5] sm:pt-[60px] py-10 sm:pb-32 max-[900px]:pb-10">
    <section class="container">
      <div>
        <h2
          class="text-slate-800 sm:text-[32px] text-2xl font-bold font-proximaA leading-[41.60px] mb-2 max-[900px]:text-center"
        >
          {{ $t('instruction_title') }}
        </h2>
        <p
          class="max-w-[544px] text-zinc-500 text-base font-normal font-proximaA leading-tight max-[900px]:text-center max-[900px]:mx-auto max-[900px]:text-sm"
        >
          {{ $t('instruction_desc') }}
        </p>
      </div>

      <div
        class="sm:mt-[60px] mt-[30px] grid grid-cols-3 max-[950px]:grid-cols-2 gap-5 sm:items-center sm:justify-center relative sm:justify-items-center max-sm:grid-cols-1"
      >
        <div v-for="(instruction, index) in instructions" :key="index">
          <CardInstruction :instruction="instruction"></CardInstruction>
        </div>
        <div
          class="flex items-center max-w-[598px] w-full justify-between absolute left-[24%] top-[75px] -z-1 max-[1143px]:hidden"
        >
          <img
            src="/images/instruction/line.svg"
            alt="registerLine"
            class="max-w-[201px] w-full"
          />
          <img
            src="/images/instruction/line.svg"
            alt="registerLine"
            class="max-w-[201px] w-full"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { instructions } from '~/data'
</script>
