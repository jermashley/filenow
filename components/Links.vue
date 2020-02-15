<template>
  <transition name="fade">
    <div v-if="category">
      <LinkButton
        v-for="link in category.links"
        :key="link.href"
        :link="link"
      />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: `Links`,

  components: {
    LinkButton: () => import(`~/components/LinkButton`),
  },

  computed: {
    ...mapGetters({
      activeCategory: `activeCategory`,
    }),

    category() {
      return this.$store.getters.category(this.activeCategory)
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: grid;
  flex-grow: 1;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 150ms;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
