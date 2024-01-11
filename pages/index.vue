<template>
  <main>
    <ThemeToggle />

    <div id="tempHeader">
      <h2>
        Filenow.me is getting a new look! Try it out
        <a href="https://www.tylertech.com/justice-public-facing-solutions">
          here
        </a>
      </h2>
    </div>

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
    ThemeToggle: () => import(`~/components/ThemeToggle`),
  },

  data() {
    return {
      translateValue: null,
    }
  },

  mounted() {
    // const urlSlug = this.$route.path.replace(`/`, ``)
    // if (this.$route.path !== `/`) {
    //   this.$store.commit(`setActiveCategory`, urlSlug)
    // }
  },

  methods: {
    setTranslateValue(value) {
      this.translateValue = value
    },
  },
}
</script>

<style lang="scss" scoped>
#tempHeader {
  position: fixed;
  top: 1rem;
  left: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  color: var(--brandText);
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 1px;
  text-align: center;
  text-wrap: balance;
  transform: translateX(-50%);

  a {
    color: var(--brandText);
    text-decoration: none;
    border-bottom: 1px solid var(--brandText);
    transition: border-bottom 0.2s ease-in-out;

    &:hover {
      border-bottom: 2px solid var(--brandText);
    }
  }
}

main {
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: start;
  padding: 5.125rem 0 0;

  @apply max-w-4xl mx-auto h-full;

  @screen sm {
    align-items: center;
    padding: 0;
  }

  > div {
    position: relative;
    width: fit-content;
    max-width: 540px;
    height: fit-content;
    margin: 0 1rem;

    @screen sm {
      margin: 0 auto;
    }
  }
}
</style>
