<template>
  <BaseDropdown
    :show="showDropdown"
    :body-class="bodyClass + '!bg-blue-50'"
    @toggle="handleDropdownToggle"
  >
    <template #head>
      <div
        class="bg-blue-50 py-[7px] px-[10px] flex items-center rounded-xl cursor-pointer"
      >
        <img
          class="rounded-full mr-1"
          :src="'/images/icons/' + currentLanguage?.code + '.svg'"
          alt="uz"
        />
        <span
          class="mr-2 text-sm transition-300 text-dark leading-130 font-semibold"
        >
          {{ currentLanguage?.name }}
        </span>
        <div :class="{ '!rotate-180': showDropdown }" class="transition-300">
          <i class="text-lg text-dark icon-chevron" />
        </div>
      </div>
    </template>
    <template #body>
      <div
        v-for="(lang, index) in languagesList"
        :key="index"
        :class="{
          'bg-blue-50/50': lang?.name == currentLanguage?.name,
          'border-b border-b-blue/[0.2]': index !== languagesList.length - 1,
        }"
        class="w-full group cursor-pointer px-2.5 py-1 bg-blue-50"
      >
        <div class="flex items-center" @click="onChangeLocale(lang?.code)">
          <img
            class="rounded-full mr-1 object-cover"
            :src="'/images/icons/' + lang?.code + '.svg'"
            alt="uz"
          />
          <span
            class="text-sm leading-130 font-semibold text-dark group-hover:text-blue transition-300"
          >
            {{ lang.name }}
          </span>
        </div>
      </div>
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher'

defineProps<{ bodyClass?: string }>()

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const showDropdown = ref(false)

const onChangeLocale = (code: string) => {
  showDropdown.value = false
  changeLocale(code)
}

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val
}
</script>
