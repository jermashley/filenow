<template>
  <section ref="card">
    <button @click="toggle">
      <FontAwesomeIcon
        :icon="[`fad`, `long-arrow-left`]"
        fixed-width
        class="mr-2"
      />
      <span>Close</span>
    </button>

    <Links />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import anime from 'animejs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowLeft } from '@fortawesome/pro-duotone-svg-icons'

library.add(faLongArrowLeft)

export default {
  name: `SecondaryCard`,

  components: {
    Links: () => import(`~/components/Links`),
    FontAwesomeIcon: () =>
      import(`@fortawesome/vue-fontawesome`).then(
        ({ FontAwesomeIcon }) => FontAwesomeIcon
      ),
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
      } else if (!this.activeCategory && oldCategory) {
        this.active = false
      }
    },

    active() {
      this.active ? this.animate(this.active) : this.animate(this.active)
    },
  },

  methods: {
    animate(bool) {
      const card = this.$refs.card
      const translateValue = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--secondaryCardTranslate`)
      const resetValue = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--secondaryCardReset`)

      if (bool) {
        anime({
          targets: card,
          translateX: translateValue,
          duration: 200,
          opacity: 1,
          easing: `easeInOutQuad`,
        })
      } else {
        anime({
          targets: card,
          translateX: resetValue,
          duration: 200,
          opacity: 0,
          easing: `easeInOutQuad`,
        })
      }
    },

    toggle() {
      this.$store.commit(`setActiveCategory`, null)
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 400;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 22.5rem;
  height: calc(100% - 4rem);
  margin: 2rem 0;
  padding: 1.5rem 0 0;
  overflow: hidden;
  background-color: rgba(254, 254, 254, 1);
  border: 1px solid rgba(232, 235, 252, 1);
  border-radius: 0.5rem;
  box-shadow:
    /* prettier-ignore */ 0 16px 16px -16px rgba(8, 18, 69, 0.1),
    0 24px 64px -16px rgba(92, 112, 214, 0.1),
    0 32px 40px -16px rgba(31, 33, 46, 0.15);
  transform: translateX(50%);
  opacity: 0;
  transition: 250ms ease-in-out;

  @screen sm {
    right: 0;
    padding: 1.5rem 0 1.5rem 3rem;
    transform: translateX(0);
  }
}

button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 0 0 2.5rem;
  padding: 0;
  color: rgba(54, 57, 73, 1);
  font-weight: 600;
  font-size: 0.825rem;
  text-transform: uppercase;
}
</style>
