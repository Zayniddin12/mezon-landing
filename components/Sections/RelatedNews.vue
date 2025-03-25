<template>
  <div class="sm:my-[60px]">
    <h2 v-if="items?.length" class="mb-[22px] text-slate-800 text-3xl font-proximaA">
      Shu mavzuga oid yangiliklar
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
      <CommonNewsCard v-for="(news, key) in items" :key :news="news" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  items: {
    id?: number
    slug?: string
    title?: string
    summary?: string
    content?: string
    image?: string
    tags?: string[]
    post_date?: string
    meta_description?: string
    meta_keywords?: string
    related_blogs?: string
  }[]
}
defineProps<Props>()
</script>
