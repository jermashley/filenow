<template>
  <div class="mt-16">
    <CategoryButton
      v-for="title in categoryTitles"
      :key="title"
      :title="title"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: `Categories`,

  components: {
    CategoryButton: () => import(`~/components/CategoryButton`),
  },

  computed: {
    ...mapGetters({
      categoryTitles: `categoryTitles`,
    }),
  },
}
</script>

<style lang="scss" scoped>
div {
  @apply w-full mx-auto;

  :not(:first-child) {
    margin-top: -1px;
  }
}
</style>
