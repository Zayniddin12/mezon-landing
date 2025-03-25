<template>
  <div
    class="w-full sm:max-w-[329px] w-full max-sm:flex flex-shrink-0 gap-4 max-sm:bg-white max-sm:p-3 max-sm:rounded-2xl"
  >
    <div
      class="sm:p-4 flex-shrink-0 max-sm:h-20 max-sm:w-20 max-sm:flex max-sm:items-center max-sm:justify-center bg-white rounded-2xl shadow max-w-[152px] mx-auto sm:mb-8 hover:shadow-md"
    >
      <img
        :src="instruction.image"
        :alt="instruction.title"
        class="max-sm:w-10 max:sm:h-10"
      />
    </div>

    <div class="max-sm:w-full">
      <h3
        class="text-slate-800 text-2xl font-bold font-proximaA sm:text-center sm:mb-3 max-[900px]:text-lg"
      >
        {{ $t(instruction.title) }}
      </h3>

      <p
        class="sm:text-center text-zinc-500 text-base font-normal font-proximaA max-[900px]:text-sm"
      >
        {{ $t(instruction.description) }}
      </p>

      <p
        class="sm:text-center text-zinc-500 text-base font-normal font-proximaA sm:mt-2 max-[900px]:text-sm"
      >
        {{ $t(instruction.text) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  instruction: {
    type: Object,
    required: true,
  },
})
</script>
