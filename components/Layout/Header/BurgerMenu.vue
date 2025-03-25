<template>
  <div
    v-if="isMenuOpen"
    class="w-full fixed top-0 left-0 h-screen z-50 transition-all duration-300 bg-white container hidden-print"
  >
    <div class="flex justify-between items-center py-3">
      <CommonLogo />
      <i class="text-[32px] icon-close" @click="toggleMenu" />
    </div>
    <div class="flex flex-col justify-between h-[78%] mb-4 mt-12">
      <nav class="flex flex-col items-center">
        <ul class="flex flex-col text-dark text-center text-xl font-semibold">
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#about-section' }"
              @click="toggleMenu"
            >
              {{ $t('nav.about') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink :to="{ path: '/news', hash: '' }" @click="toggleMenu">
              {{ $t('nav.news') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#guide-section' }"
              @click="toggleMenu"
            >
              {{ $t('nav.guide') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#contact-section' }"
              @click="toggleMenu"
            >
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
        </ul>
        <LayoutHeaderLangSwitcher
          body-class="-left-[6.5px]"
          class="mt-6 mb-10"
        />
        <a href="https://panel.me-zon.uz/web/login" target="_blank">
          <BaseButton
            class="py-3 px-9"
            main-class="gap-2"
            :text="$t('register')"
            icon="icon-logout"
          />
        </a>
      </nav>
      <div class="flex justify-center gap-4">
        <NuxtLink
          class="flex items-center gap-1 text-xs font-medium leading-130"
          to="tel:+998 90 200 70 07"
        >
          <i class="icon-phone text-blue text-base"></i>
          +998 90 200 70 07
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-1 text-xs font-medium leading-130"
          to="mailto:info@uic.group"
        >
          <i class="icon-mail text-blue text-sm"></i>
          info@uic.group
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ isMenuOpen: boolean }>(), {
  isMenuOpen: false,
})

const emit = defineEmits<{
  (e: 'update:isMenuOpen', value: boolean): void
}>()

function toggleMenu() {
  emit('update:isMenuOpen', !props.isMenuOpen)
}

watch(
  () => props.isMenuOpen,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }
)
</script>
