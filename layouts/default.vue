<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #f8f9fb;
}
</style>

<style lang="scss">
:root {
  --primaryCardTranslate: -115%;
  --secondaryCardTranslate: 50%;
  --secondaryCardReset: 50%;

  @screen sm {
    --primaryCardTranslate: calc((22.5rem / 2) * -1);
    --secondaryCardTranslate: calc((22.5rem / 2) - 48px);
    --secondaryCardReset: 0;
  }
}

body {
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  height: 100vh;
}
</style>
