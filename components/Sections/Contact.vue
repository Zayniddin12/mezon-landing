<template>
  <div class="bg-[#F0F2F5] sm:pt-[60px] py-10 sm:pb-20">
    <div class="container">
      <h2
        class="text-slate-800 sm:text-[32px] text-2xl font-bold font-proximaA leading-[41.60px] max-[900px]:text-center"
      >
        {{ $t('contact_us') }}
      </h2>
      <p
        class="max-w-[544px] w-full text-gray-500 text-base font-normal font-proximaA leading-tight mt-2 max-[900px]:text-center max-[900px]:mx-auto max-[900px]:text-sm"
      >
        {{ $t('contact_us_desc') }}
      </p>

      <div class="mt-8 flex justify-between gap-5 max-[860px]:flex-col">
        <form
          id="form"
          class="min-[860px]:p-8 rounded-xl bg-gray-600 p-4 min-[860px]:w-1/2 w-full"
          @submit.prevent="submit"
        >
          <div class="flex flex-col gap-5 w-full">
            <FormGroup :label="$t('contact.name')">
              <FormInput
                v-model="form.values.name"
                :placeholder="$t('contact.name_placeholder')"
                type="text"
                :error="form.$v.value.name.$error"
              />
            </FormGroup>
            <FormGroup :label="$t('contact.phone')">
              <ClientOnly>
                <FormInput
                  v-model="form.values.phone"
                  v-maska="'+998 ## ###-##-##'"
                  :placeholder="$t('contact.phone_placeholder')"
                  type="number"
                  :error="form.$v.value.phone.$error"
                />
              </ClientOnly>
            </FormGroup>
            <FormGroup :label="$t('contact.message')">
              <FormTextarea2
                v-model="form.values.message"
                type="text"
                :rows="4"
                :placeholder="$t('contact.message_placeholder')"
                :error="form.$v.value.message.$error"
                wrapper-class="focus-within:!border-black flex-grow  w-full py-[11px] bg-gray-400 rounded-xl border-none justify-start items-center inline-flex resize-none"
              />
            </FormGroup>
          </div>

          <div class="flex items-center gap-2 md:my-8 my-4">
            <FormCheckbox
              v-model="form.values.termsCheck"
              :checked="form.values.termsCheck"
              :error="form.$v.value.termsCheck.$error"
              :label="$t('register_terms')"
              :span="$t('terms_and_conditions')"
            >
              <template #label>
                <i18n-t
                  class="text-sm font-normal font-proximaA leading-[18.20px] text-gray-100"
                  keypath="register_terms"
                  tag="span"
                >
                  <template #link>
                    <NuxtLink to="/page/ommaviy-oferta" class="text-blue">
                      {{ $t('terms_and_conditions') }}
                    </NuxtLink>
                  </template>
                </i18n-t>
              </template>
            </FormCheckbox>
          </div>

          <BaseButton type="submit" :text="$t('send')" class="w-full py-2.5" />
        </form>

        <!-- Map section -->
        <div class="min-[860px]:w-1/2 w-full flex flex-col">
          <CommonMap
            :long="contactLinks?.lang"
            :lat="contactLinks?.lat"
            :address="contactLinks?.address"
            class="relative w-full max-[860px]:h-[250px]"
          />
          <div
            class="flex items-center flex-col sm:!flex-row justify-between mt-5 gap-3 w-full"
          >
            <a class="w-full" :href="'tel:' + contactLinks?.phone">
              <CardContact :contact="contacts[0]" />
            </a>
            <a class="w-full" :href="'mailto:' + contactLinks?.email">
              <CardContact :contact="contacts[1]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required, sameAs } from '@vuelidate/validators'

import { useCustomToast } from '~/composables/useCustomToast'
import { isValidPhone } from '~/utils/common.js'

const { showToast } = useCustomToast()
const { t } = useI18n()
const loading = ref(true)
const contactLinks = ref()

const form = useForm(
  {
    name: null,
    phone: null,
    termsCheck: false,
    message: null,
  },
  {
    name: { required },
    phone: { required, isValidPhone },
    message: { required },
    termsCheck: { sameAs: sameAs(true) },
  }
)
let phoneNumber = ref('')
async function submit() {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    phoneNumber = form.values.phone.split(' ', '-').join('')
    const payload = {
      name: form.values.name,
      phone: phoneNumber,
      message: form.values.message,
    }

    try {
      await useApi().$post('message', {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      showToast(t('successfully_send'), 'success')
      form.$v.value.$reset()
      form.values.name = ''
      form.values.phone = ''
      form.values.message = '' // O'zgartirish: 'question' o'rniga 'message'
    } catch (e) {
      showToast(t('validation.form_empty'), 'error')
    } finally {
      loading.value = false
    }
  } else {
    showToast(t('validation.form_empty'), 'error')
  }
}

const contacts = ref([
  {
    title: t('contact.phone'),
    text: contactLinks.value?.phone,
    icon: 'icon-phone',
  },
  {
    title: t('contact.mail'),
    text: contactLinks.value?.email,
    icon: 'icon-mail',
  },
])
const getContacts = async () => {
  await useApi()
    .$get('/contact')
    .then((res) => {
      contactLinks.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}
getContacts()
watch(
  contactLinks,
  () => {
    contacts.value = [
      {
        title: t('contact.phone'),
        text: contactLinks.value?.phone,
        icon: 'icon-phone',
      },
      {
        title: t('contact.mail'),
        text: contactLinks.value?.email,
        icon: 'icon-mail',
      },
    ]
  },
  { deep: true }
)
</script>

<style scoped>
@media (max-width: 1048px) {
  .iframe-map {
    width: 450px;
  }
}

@media (max-width: 860px) {
  .iframe-map {
    width: 100%;
  }
}
</style>
