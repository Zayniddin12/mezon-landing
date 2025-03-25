<template>
  <div
    class="bg-transparent sticky inset-0 py-3 lg:pt-10 lg:pb-8 z-40 transition-200"
    :class="isScrolled ? 'bg-white' : 'bg-transparent'"
  >
    <div class="container">
      <header class="flex justify-between items-center">
        <CommonLogo />
        <nav class="hidden lg:flex gap-10 items-center">
          <ul class="flex gap-8 text-dark">
            <li class="hover:text-blue transition-300">
              <NuxtLink :to="{ path: '/', hash: '#about-section' }">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li class="hover:text-blue transition-300">
              <NuxtLink :to="{ path: '/news', hash: '' }">
                {{ $t('nav.news') }}
              </NuxtLink>
            </li>
            <li class="hover:text-blue transition-300">
              <NuxtLink :to="{ path: '/', hash: '#guide-section' }">
                {{ $t('nav.guide') }}
              </NuxtLink>
            </li>
            <li class="hover:text-blue transition-300">
              <NuxtLink :to="{ path: '/', hash: '#contact-section' }">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
          <LayoutHeaderLangSwitcher />
          <a href="https://panel.me-zon.uz/web/login" target="_blank">
            <BaseButton
              class="py-3 px-9"
              main-class="gap-2"
              :text="$t('register')"
            >
              <template #suffix>
                <i class="icon-logout" />
              </template>
            </BaseButton>
          </a>
        </nav>
        <Transition name="from-left">
          <LayoutHeaderBurgerMenu
            class="lg:hidden"
            :is-menu-open="showMenu"
            @update:is-menu-open="showMenu = $event"
          />
        </Transition>
        <i class="lg:hidden text-[32px] icon-menu" @click="toggleMenu" />
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const showMenu = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>
<style>
.from-left-enter-active {
  animation: from-left 300ms ease-out;
}

.from-left-leave-active {
  animation: from-left 300ms ease-in reverse;
}

@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
