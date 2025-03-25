<template>
  <div class="app">
    <!--    <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">-->
    <!--      <Head>-->
    <!--        <Title>Mezon</Title>-->
    <!--        <Meta-->
    <!--          v-for="meta in head.meta"-->
    <!--          :id="meta.id"-->
    <!--          :key="meta.id"-->
    <!--          :property="meta.property"-->
    <!--          :content="meta.content"-->
    <!--        />-->
    <!--      </Head>-->
    <!--      <Body>-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!--      </Body>-->
    <!--    </Html>-->
  </div>
</template>
<script setup lang="ts">
// const head = useLocaleHead({
//   addDirAttribute: true,
//   identifierAttribute: 'id',
//   addSeoAttributes: true,
// })
</script>
