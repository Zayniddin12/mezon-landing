<template>
  <!-- top part -->
  <div class="relative">
    <img
      src="/images/decoration-footer-left.svg"
      alt="left-decoretion"
      class="absolute top-0 left-0"
    />
    <img
      src="/images/footer-circle-left-dec.svg"
      alt="footer-decoration"
      class="absolute top-0 left-0 z-10"
    />
    <img
      src="/images/footer-circle-dec.svg"
      alt="footer-decoration"
      class="absolute bottom-0 right-0 z-10"
    />

    <img
      src="/images/decoration-footer-right.svg"
      alt="right-decoretion"
      class="absolute bottom-0 right-0"
    />

    <footer class="bg-dark-500 bg-no-repeat bg-cover">
      <div class="container flex flex-col items-center">
        <CommonLogoFooter class="mt-9 mb-10" @click="scrollToTop" />
        <ul
          class="text-white flex flex-wrap justify-center text-end mb-8 list-disc"
        >
          <li
            class="hover:text-blue transition-300 marker:text-blue marker:text-xl mx-5 marker:-mt-2"
          >
            <NuxtLink :to="{ path: '/', hash: '#about-section' }">
              {{ $t('nav.about') }}
            </NuxtLink>
          </li>
          <li
            class="hover:text-blue transition-300 marker:text-blue marker:text-xl mx-5 marker:-mt-2"
          >
            <NuxtLink :to="{ path: '/news', hash: '' }">
              {{ $t('nav.news') }}
            </NuxtLink>
          </li>
          <li
            class="hover:text-blue transition-300 marker:text-blue marker:text-xl mx-5 marker:-mt-2"
          >
            <NuxtLink :to="{ path: '/', hash: '#guide-section' }">
              {{ $t('nav.guide') }}
            </NuxtLink>
          </li>
          <li
            class="hover:text-blue transition-300 marker:text-blue marker:text-xl mx-5 marker:-mt-2"
          >
            <NuxtLink :to="{ path: '/', hash: '#contact-section' }">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
          <li
            class="hover:text-blue transition-300 marker:text-blue marker:text-xl mx-5 marker:-mt-2"
          >
            <NuxtLink :to="{ path: '/page/ommaviy-oferta', hash: '' }">
              {{ $t('nav.public_offer') }}
            </NuxtLink>
          </li>
        </ul>

        <p class="leading-130 text-white/[0.60] text-center md:mx-[10%]">
          {{ $t('footer_desc') }}
        </p>

        <div class="flex gap-3 my-9">
          <a
            v-for="(icon, index) in socialIcons"
            :key="index"
            :href="icon?.link"
            target="_blank"
            class="rounded-lg p-1 bg-white/[0.08] hover:bg-blue-100 transition-300"
          >
            <component :is="icon.component" class="text-2xl !mb-0 text-white" />
          </a>
        </div>
      </div>
    </footer>

    <!-- line -->
    <hr class="bg-white/10" />

    <!-- bottom part -->
    <div class="bg-dark-500 text-white text-xs leading-130">
      <div class="container">
        <div
          class="flex justify-between items-center py-4 flex-col-reverse md:flex-row"
        >
          <p class="mt-4 md:mt-0 text-center">
            © MEZON 2023-{{ new Date().getFullYear() }}
            {{ $t('all_rights_reserved') }}
          </p>
          <div class="flex gap-4 items-center flex-col sm:flex-row">
            <div class="flex gap-1 items-center group">
              <i class="icon-phone text-blue text-xl" />
              <NuxtLink
                :to="'tel:' + contacts?.phone"
                class="group-hover:text-blue transition-300"
                >{{ formatPhoneNumber(contacts?.phone) }}</NuxtLink
              >
            </div>
            <div class="flex gap-1 items-center group">
              <i class="icon-map-pin text-blue text-xl" />
              <a
                class="group-hover:text-blue transition-300"
                target="_blank"
                :href="`https://yandex.ru/maps/?pt=${contacts?.lang},${contacts?.lat}&z=7&l=map`"
              >
                {{ contacts?.address }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPhoneNumber } from '~/utils/common'

const contacts = ref()
const socialIcons = computed(() => ({
  telegram: {
    component: 'SvgoTelegram',
    link: contacts.value?.telegram_url,
  },
  twitter: {
    component: 'SvgoTwitter',
    link: contacts.value?.twitter_url,
  },
  youtube: {
    component: 'SvgoYoutube',
    link: contacts.value?.youtube_url,
  },
  facebook: {
    component: 'SvgoFacebook',
    link: contacts.value?.facebook_url,
  },
  instagram: {
    component: 'SvgoInstagram',
    link: contacts.value?.instagram_url,
  },
}))

const getContacts = async () => {
  await useApi()
    .$get('/contact')
    .then((res) => {
      contacts.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}
getContacts()
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>
