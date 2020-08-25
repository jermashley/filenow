<template>
  <button @click="toggleTheme">
    <transition name="fade">
      <FontAwesomeIcon v-if="!lightsOn" :icon="[`fad`, `sun`]" />
    </transition>

    <transition name="fade">
      <FontAwesomeIcon v-if="lightsOn" :icon="[`fad`, `moon-stars`]" />
    </transition>
  </button>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoonStars } from '@fortawesome/pro-duotone-svg-icons'

library.add(faSun, faMoonStars)

export default {
  name: `ThemeToggle`,

  components: {
    FontAwesomeIcon: () =>
      import(`@fortawesome/vue-fontawesome`).then(
        ({ FontAwesomeIcon }) => FontAwesomeIcon
      ),
  },

  computed: {
    lightsOn() {
      return this.$store.getters.lightsOn
    },
  },

  watch: {
    lightsOn(newValue, oldValue) {
      return this.$store.lightsOn
    },
  },

  mounted() {
    this.$store.commit(
      `setTheme`,
      this.$store.getters.currentTheme
        ? this.$store.getters.currentTheme
        : `light`
    )
  },

  methods: {
    toggleTheme() {
      this.$store.commit(`toggleLights`)

      if (this.$store.getters.lightsOn) {
        this.$store.commit(`setTheme`, `light`)
      } else {
        this.$store.commit(`setTheme`, `dark`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  color: var(--brandText);
  font-size: 1.5rem;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
