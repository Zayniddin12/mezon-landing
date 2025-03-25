<template>
  <nav
    id="breadcrumbs"
    class="container hidden md:flex !p-0"
    aria-label="Breadcrumb"
  >
    <ul
      class="flex flex-wrap sm:flex-nowrap items-center text-black py-3.5 list-disc"
    >
      <li
        class="text-dark font-medium hover:text-blue transition-300 mr-3 list-none"
      >
        <NuxtLink to="/" :aria-current="ariaCurrent(-1)">
          <i class="icon-home mr-1"></i>
          {{ $t('pages.main') }}
        </NuxtLink>
      </li>
      <li
        v-for="(breadcrumb, index) in getBreadcrumbs()"
        :key="index"
        class="text-dark font-medium hover:text-blue transition-300 mx-4 marker:text-blue"
        :class="{ 'text-gray pointer-events-none': !lastLink }"
      >
        <NuxtLink :to="breadcrumb.path" :aria-current="ariaCurrent(index)">
          {{ $t('pages.' + breadcrumb.name) }}
        </NuxtLink>
      </li>
      <li v-if="lastLink" class="mx-4 marker:-mt-2 text-gray marker:text-blue">
        <NuxtLink disabled>
          {{ lastLink }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
defineProps<{
  lastLink?: string
}>()

const route = useRoute()
const router = useRouter()

const getBreadcrumbs = () => {
  const fullPath = route.path
  const requestPath = fullPath.startsWith('/')
    ? fullPath.substring(1)
    : fullPath
  const crumbs = requestPath.split('/')
  const breadcrumbs = []
  let path = ''
  crumbs.forEach((crumb, index) => {
    if (crumb) {
      path = `${path}/${crumb}`
      const breadcrumb = router.getRoutes().find((r) => r.path === path)
      if (breadcrumb) {
        breadcrumbs.push(breadcrumb)
      }
    }
  })
  return breadcrumbs
}

// getting last link version

// lastLink = ref()

// crumbs.forEach((crumb, index) => {
//     if (crumb) {
//       path = `${path}/${crumb}`
//       const breadcrumb = router.getRoutes().find((r) => r.path === path)
//       if (breadcrumb && index < crumbs.length - 1) {
//         breadcrumbs.push(breadcrumb)
//       } else {
//         lastLink.value = convertToBreadCrumbStr(crumb)
//       }
//     }
//   })

const ariaCurrent = (index) =>
  index === getBreadcrumbs().length - 1 ? 'page' : 'false'
</script>
