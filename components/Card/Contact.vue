<template>
  <div
    class="min-[860px]:p-4 p-2 bg-white rounded-xl border border-gray-700 flex items-center cursor-pointer hover:shadow-2xl hover:bg-[#E8EEF4] transition-200 hover:border hover:border-blue-500/[20] flex-1 gap-4 mx-auto w-full"
  >
    <i class="text-blue text-4xl" :class="contact.icon"></i>
    <div>
      <p
        class="text-blue text-base font-normal font-proximaA leading-[18.20px] mb-1"
      >
        {{ contact.title }}
      </p>
      <p class="text-slate-800 text-base font-bold font-proximaA leading-tight">
        {{ contact.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>
