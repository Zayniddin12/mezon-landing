<template>
  <div class="overflow-hidden">
    <SectionsHero />
    <SectionsAbout
      id="about-section"
      class="md:scroll-mt-24 relative z-10 py-10"
    />
    <SectionsMainNews />

    <SectionsInstruction
      id="guide-section"
      class="scroll-mt-[70px] md:scroll-mt-24"
    />
    <SectionsMobileLoad id="load-section" class="py-14 scroll-mt-40" />
    <SectionsContact
      id="contact-section"
      class="scroll-mt-[70px] md:scroll-mt-24"
    />
  </div>
</template>
