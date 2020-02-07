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
  margin: 0;
  padding: 0;
  background-color: #f8f9fb;
}
</style>

<style lang="scss">
:root {
  /* Card translate values */
  --primaryCardTranslate: -115%;
  --secondaryCardTranslate: 50%;
  --secondaryCardReset: 50%;

  @screen sm {
    --primaryCardTranslate: calc((22.5rem / 2) * -1);
    --secondaryCardTranslate: calc((22.5rem / 2) - 48px);
    --secondaryCardReset: 0;
  }

  /* Color Values */
  --brandDark: rgba(32, 47, 100, 1);
  --brandLightest: rgba(239, 241, 251, 1);
  --brandText: rgba(54, 58, 73, 1);
  --brandHoverText: rgba(254, 254, 254, 1);
  --brandItemBackground: rgba(254, 254, 254, 1);
  --brandItemBorder: rgba(254, 254, 254, 1);
  --brandAccent: rgba(192, 32, 51, 1);
  --bodyBackground: rgba(248, 249, 251, 1);
}

body {
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  height: 100vh;
}
</style>
