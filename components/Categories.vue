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
import slugify from 'slugify'

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
            linkCategories(stage: PUBLISHED) {
              id
              name
            }
          }`,
        }
      )
      .then((res) => {
        let categories = res.data.linkCategories

        categories = categories.map((category) => {
          const slug = slugify(category.name, { lower: true, strict: true })
          const udpatedCategory = {
            ...category,
            slug,
          }

          return udpatedCategory
        })

        return categories
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
