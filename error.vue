<template>
  <div class="flex flex-col justify-between ">
    <LayoutHeader />
    <div class="container flex justify-between h-screen items-center">
      <div class="self-center">
        <h2 class="text-neutral-900 text-4xl font-semibold font-velasans mb-3">
          {{ $t('not_found_title') }}
        </h2>
        <p class="text-zinc-500 text-sm font-velasans mb-8 max-w-80">
          {{ $t('not_found_subtitle') }}
        </p>
        <NuxtLink to="/">
          <BaseButton class="py-[14px] px-[42px] w-full md:w-auto mb-[40px] lg:m-0" text="Asosiyga qaytish" />
        </NuxtLink>
      </div>
      <pre>{{error}}</pre>
      <img alt="404" class=" lg:max-w-[500px] md:max-w-[400px] max-w-[500px] w-full object-contain mx-auto md:mx-0 mb-5 md:mb-0" src="@/public/images/404.png" />
    </div>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
interface Props {
  error: any
}

defineProps<Props>()
</script>
