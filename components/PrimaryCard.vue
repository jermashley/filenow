<template>
  <section ref="card">
    <h1>Odyssey Sites</h1>

    <Categories />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import anime from 'animejs'

export default {
  name: `PrimaryCard`,

  components: {
    Categories: () => import(`~/components/Categories`),
  },

  data() {
    return {
      active: false,
    }
  },

  computed: {
    ...mapGetters({
      activeCategory: `activeCategory`,
    }),
  },

  watch: {
    activeCategory(newCategory, oldCategory) {
      if (this.activeCategory && !oldCategory) {
        this.active = true
      } else if (!this.activeCategory) {
        this.active = false
      }
    },

    active() {
      this.active ? this.animate(this.active) : this.animate(this.active)
    },
  },

  mounted() {
    const card = this.$refs.card

    setTimeout(() => {
      anime({
        targets: card,
        duration: 750,
        opacity: 1,
        easing: `easeInOutQuad`,
      })
    }, 400)
  },

  methods: {
    animate(bool) {
      const card = this.$refs.card
      const translateValue = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--primaryCardTranslate`)

      if (bool) {
        anime({
          targets: card,
          translateX: translateValue,
          duration: 275,
          opacity: 1,
          easing: `easeInOutQuad`,
        })
      } else {
        anime({
          targets: card,
          translateX: 0,
          duration: 275,
          opacity: 1,
          easing: `easeInOutQuad`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  z-index: 500;
  width: 100%;
  max-width: 540px;
  margin: 0 1rem;
  padding: 3rem 0 3.5rem;
  background-color: rgba(254, 254, 254, 1);
  border: 1px solid rgba(232, 235, 252, 1);
  border-bottom: 8px solid rgba(125, 143, 232, 1);
  border-radius: 0.5rem;
  box-shadow:
    /* prettier-ignore */ 0 16px 16px -16px rgba(8, 18, 69, 0.1),
    0 24px 64px -16px rgba(92, 112, 214, 0.1),
    0 32px 40px -16px rgba(31, 33, 46, 0.15);
  opacity: 0;

  @apply mx-auto;

  @screen sm {
    margin: 0;
  }
}

h1 {
  color: rgba(54, 57, 73, 1);

  @apply text-5xl text-center font-medium leading-none;
}
</style>
