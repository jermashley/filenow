<template>
  <main>
    <div>
      <PrimaryCard :tranlsate-value="translateValue" />
      <SecondaryCard @translate-value="setTranslateValue" />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    PrimaryCard: () => import(`~/components/PrimaryCard`),
    SecondaryCard: () => import(`~/components/SecondaryCard`),
  },

  data() {
    return {
      translateValue: null,
    }
  },

  methods: {
    setTranslateValue(value) {
      console.log(value)
      this.translateValue = value
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @apply max-w-4xl mx-auto h-full overflow-y-auto;

  > div {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
  }
}
</style>
