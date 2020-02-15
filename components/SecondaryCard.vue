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
          duration: 225,
          opacity: 1,
          easing: `easeInOutQuad`,
        })
      } else {
        setTimeout(() => {
          anime({
            targets: card,
            translateX: resetValue,
            duration: 225,
            opacity: 0,
            easing: `easeInOutQuad`,
          })
        }, 50)
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 22.5rem;
  height: calc(100% - 4rem);
  margin: 2rem 0;
  padding: 1.5rem 0 0;
  overflow: hidden;
  background-color: var(--brandItemBackground);
  border: 1px solid var(--brandItemBorder);
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
    padding: 1.5rem 0 0 3rem;
    transform: translateX(0);
  }
}

button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  /* width: fit-content; */
  margin: 0 0 calc(1.5rem - 10px) 2.5rem;
  padding: 0 0 10px;
  color: var(--brandText);
  font-weight: 600;
  font-size: 0.825rem;
  text-transform: uppercase;
}
</style>
