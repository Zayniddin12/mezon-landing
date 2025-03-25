<template>
  <div class="flex flex-col justify-between ">
    <LayoutHeader />
    <div class="min-h-[100vh]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
