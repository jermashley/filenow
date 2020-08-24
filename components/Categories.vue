<template>
  <div class="mt-16">
    <CategoryButton
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
export default {
  name: `Categories`,

  components: {
    CategoryButton: () => import(`~/components/CategoryButton`),
  },

  async fetch() {
    this.categories = await this.$axios
      .$post(
        `https://api-us-east-1.graphcms.com/v2/ckcwplnre4sxd01xr930i3ilm/master`,
        {
          query: `{
            linkCategories {
              id
              name
            }
          }`,
        }
      )
      .then((res) => {
        return res.data.linkCategories
      })
  },

  data() {
    return {
      categories: [],
    }
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
