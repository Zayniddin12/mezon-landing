<template>
  <div class="relative flex max-md:flex-col md:items-center md:h-full !w-full">
    <client-only>
      <yandex-map
        :coords="coords"
        :controls="[]"
        :settings="settings"
        :zoom="16"
        zoom-control="false"
        class="!w-full !h-full inset-0"
      >
        <ymap-marker
          :coords="coords"
          marker-id="123"
          :icon="markerIcon"
          cluster-name="1"
        />
      </yandex-map>
    </client-only>
    <div
      class="w-[80%] mx-auto sm:px-5 px-3 sm:py-3 py-2 bg-white/10 rounded-xl backdrop-blur-[20px] justify-start items-center gap-3 absolute inline-flex sm:bottom-4 bottom-0 sm:left-4 left-0"
    >
      <i class="icon-map-pin text-blue text-[40px]" />
      <div>
        <p
          class="text-blue text-sm font-normal font-proximaA capitalize leading-[18.20px] mb-1"
        >
          {{ $t('location') }}
        </p>
        <p
          class="text-slate-800 text-base font-normal font-proximaA leading-tight"
        >
          {{ address }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

interface Props {
  lat: string
  long: string
  address: string
}
const props = defineProps<Props>()
const markerIcon = {
  layout: 'default#imageWithContent',
  imageHref: '/images/marker.svg',
  imageSize: [32, 32],
  imageOffset: [-16, -32], // Adjusted to center the marker
} // Ensure markers is an array of arrays
const coords = ref([props?.lat, props?.long]) // Initial center coordinate
const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
  suppressMapOpenBlock: true,
}
watch(props, () => {
  coords.value = [props?.lat, props?.long]
})
</script>

<style>
.list-active-enter-active,
.list-active-leave-active,
.map-active-enter-active,
.map-active-leave-active {
  transition: all 0.3s ease-out;
}

.list-active-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.list-active-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}

.map-active-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.map-active-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

/* Additional CSS to hide remaining text */
.ymaps-2-1-79-map-copyrights-promo {
  display: none;
}
.ymaps-2-1-79-copyright__agreement {
  display: none;
}
</style>
