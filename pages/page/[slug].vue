<template>
  <section class="container min-h-screen">
    <CommonBreadCrumb :last-link="t('nav.public_offer')" />
    <div
      class="mb-[60px] bg-white pt-6 pl-6 pr-[22px] pb-[74px] rounded-[20px] lg:w-[880px] w-full shadow-offer"
    >
      <h1 class="text-2xl font-bold font-proximaA mb-4">
        {{ t('nav.public_offer') }}
      </h1>
      <div class="description" v-html="data?.description" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { data, error } = await useAsyncData('ommaviy-oferta', () =>
  useApi().$get(`/static-page/${useRoute().params.slug}`)
)
if (error.value) showError({ status: 404 })

useSeoMeta({
  title: data.value?.name ?? 'Ommaviy Oferta',
  ogTitle: data.value?.name ?? 'Default Title',
  description: richTextPurify(data.value?.description ?? 'Default Description'),
  ogDescription: richTextPurify(
    data.value?.description ?? 'Default Description'
  ),
})
</script>
<style>
.description {
  color: #131612;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}
.description p {
  @apply !mb-4;
}
</style>
