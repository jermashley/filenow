<template>
  <div v-if="category">
    <LinkButton v-for="link in category.links" :key="link.href" :link="link" />
  </div>
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
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: flex-start;
  overflow-y: auto;
}
</style>
