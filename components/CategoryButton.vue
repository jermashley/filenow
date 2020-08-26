<template>
  <button :class="{ active: active }" @click="toggle()">
    <span>{{ category.name }}</span>

    <span ref="icon" class="icon">
      <FontAwesomeIcon :icon="[`fad`, `angle-right`]" fixed-width />
    </span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
import anime from 'animejs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-duotone-svg-icons'

library.add(faAngleRight)

export default {
  name: `CategoryButton`,

  components: {
    FontAwesomeIcon: () =>
      import(`@fortawesome/vue-fontawesome`).then(
        ({ FontAwesomeIcon }) => FontAwesomeIcon
      ),
  },

  props: {
    category: {
      type: Object,
      default: null,
    },
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
    activeCategory() {
      const icon = this.$refs.icon

      if (this.activeCategory !== this.category.slug) {
        this.active = false

        setTimeout(() => {
          anime({
            targets: icon,
            rotate: 0,
            duration: 200,
            easing: `easeInOutQuad`,
          })
        }, 50)
      }
    },
  },

  mounted() {
    const icon = this.$refs.icon

    const urlSlug = this.$route.path.replace(`/`, ``)
    if (urlSlug === this.category.slug) {
      this.active = !this.active ?? true
      this.$store.commit(`setActiveCategory`, urlSlug)

      setTimeout(() => {
        anime({
          targets: icon,
          rotate: 180,
          duration: 200,
          easing: `easeInOutQuad`,
        })
      })
    }
  },

  methods: {
    toggle() {
      const icon = this.$refs.icon

      this.active = !this.active

      if (this.active) {
        this.$store.commit(`setActiveCategory`, this.category.slug)
        history.pushState({}, null, this.category.slug)
      } else {
        this.$store.commit(`setActiveCategory`, null)
        history.pushState({}, null, `/`)
      }

      setTimeout(() => {
        anime({
          targets: icon,
          rotate: 180,
          duration: 200,
          easing: `easeInOutQuad`,
        })
      }, 50)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  color: var(--brandText);
  font-size: 1.25rem;
  background-color: var(--brandItemBackground);
  border-top: 1px solid var(--brandItemBorder);
  border-bottom: 1px solid var(--brandItemBorder);
  transition: 250ms ease-in-out;

  @apply w-full px-10 py-6 flex flex-row items-center justify-between text-left;

  .icon {
    margin: 0 0 0 2.5rem;
    opacity: 0;
    transition: 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    background-color: var(--brandLightest);
    outline: none;
    transition: 250ms ease-in-out;

    .icon {
      opacity: 1;
      transition: 250ms ease-in-out;
    }
  }

  &.active {
    color: var(--brandHoverText);
    background-color: var(--brandDark);
    transition: 350ms ease-in-out;

    .icon {
      opacity: 1;
      transition: 250ms ease-in-out;
    }
  }
}
</style>
