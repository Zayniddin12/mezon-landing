<template>
  <div
    class="container flex flex-col gap-8 items-center justify-center w-full !py-[92px]"
  >
    <img
      src="/images/nodata.webp"
      alt="nodata, not-found"
      class="max-w-[330px] max-h-[341px]"
    />
    <div>
      <h2
        class="text-dark text-[32px] font-semibold leading-tight text-center mb-3"
      >
        {{ $t('not_found_title') }}
      </h2>
      <p
        class="text-zinc text-sm font-normal leading-tight max-w-[324px] text-center mx-auto"
      >
        {{ $t('not_found_subtitle') }}
      </p>
    </div>
    <NuxtLink to="/">
      <BaseButton :text="$t('back_home')" class="py-3.5 px-10" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts"></script>
