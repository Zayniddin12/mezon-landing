<template>
  <div>
    <div class="!pb-[60px] container">
      <CommonBreadCrumb />
      <h1
        class="text-slate-800 text-[32px] font-normal font-proximaA leading-10 mb-6"
      >
        {{ $t('pages.news') }}
      </h1>

      <div class="sm:grid sm:grid-cols-4 gap-x-6">
        <div class="sm:col-span-3 col-span-2">
          <div
            v-if="!loading"
            class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <CommonNewsCard
              v-for="(news, key) in news?.items"
              :key
              :news="news"
            />

            <div />
          </div>
          <div
            v-else
            class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="key in 6"
              :key
              class="border border-zinc-100 rounded-2xl overflow-hidden w-full"
            >
              <span class="w-full h-[200px] rounded-2xl object-cover shimmer" />
              <div class="p-4 grid gap-y-2">
                <div
                  class="rounded-[20px] w-[30%] h-6 min-[490px]:w-[20%] sm:w-1/2 shimmer"
                />

                <span class="h-5 w-full shimmer rounded-lg" />
                <span class="h-5 w-full shimmer rounded-lg" />
                <p class="text-zinc-500 text-sm font-proxima line-clamp-2">
                  {{ news?.summary }}
                </p>
              </div>
            </div>
            <div />
          </div>
          <div v-if="news?.count > 12" class="flex justify-end">
            <CommonPagination
              pagination-buttons
              :limit="12"
              :total="news?.count"
              :current-page="paginationData.currentPage"
              @input="pageChange"
            />
          </div>
        </div>
        <CommonAdvertisement
          class="flex-center flex-col sm:block sm:col-span-1"
        />
      </div>
    </div>
    <CardNoData v-if="!loading && !news?.items?.length" />
  </div>
</template>
<script setup lang="ts">
function useQueryChange(key: string, value: string | undefined) {
  const router = useRouter()
  const routeQuery = { ...router.currentRoute.value.query }

  if (!value) {
    delete routeQuery[key]
  } else {
    routeQuery[key] = value
  }

  router.replace({ query: routeQuery }).then(() => {})
}
const loading = ref(true)
const route = useRoute()
const { t } = useI18n()
const paginationData = reactive({
  limit: 3,
  currentPage: route.query.page ? +route.query.page : 1,
  total: 0,
})
function pageChange(page: number) {
  paginationData.currentPage = page
  useQueryChange('page', '' + page)
  getNews(paginationData)
  if (process.client) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}
const news = ref()

const getNews = async (paginationData: any) => {
  loading.value = true
  await useApi()
    .$get('/blog/list', {
      params: {
        page: paginationData.currentPage,
        page_size: 12,
      },
    })
    .then((res) => {
      news.value = res
    })
    .finally(() => {
      loading.value = false
    })
}
getNews(paginationData)

useSeoMeta({
  title: t('pages.news'),
  ogTitle: t('pages.news'),
  description: t('pages.news_subtitle'),
  ogDescription: t('pages.news_subtitle'),
})
</script>
