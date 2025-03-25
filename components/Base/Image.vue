<template>
  <div
    v-lazy="src"
    :error-state="errorState"
    class="image-loading overflow-hidden"
  >
    <img :alt="alt" class="object-cover w-full h-full" :class="imageClass" />
  </div>
</template>
<script setup lang="ts">
import type { TClassName } from '~/types'
interface Props {
  src: string | undefined
  alt?: string
  errorState?: string
  imageClass?: TClassName
}
withDefaults(defineProps<Props>(), {
  imageClass: '',
  errorState: '',
  alt: 'image',
})
</script>
<style>
.image-loading {
  position: relative;
  overflow: hidden;
}

.image-loading:after {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
}
</style>
