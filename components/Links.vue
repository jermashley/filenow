<template>
  <transition name="fade">
    <div v-if="activeCategory && categories[activeCategory]">
      <LinkButton
        v-for="link in categories[activeCategory].links"
        :key="link.id"
        :link="link"
      />
    </div>

    <div
      v-if="activeCategory && !categories[activeCategory]"
      class="no-links-found"
    >
      <span
        style=" font-size: 18px; line-height: 1.25; text-align: center; opacity: 0.25;"
      >
        Sorry, we lost the links to this category.
      </span>
    </div>
  </transition>
</template>

<script>
import slugify from 'slugify'
import { mapGetters } from 'vuex'
export default {
  name: `Links`,

  components: {
    LinkButton: () => import(`~/components/LinkButton`),
  },

  async fetch() {
    this.categories = await this.$axios
      .$post(
        `https://api-us-east-1.graphcms.com/v2/ckcwplnre4sxd01xr930i3ilm/master`,
        {
          query: `{
          links(stage: PUBLISHED) {
            id
            name
            url
            linkCategory {
              id
              name
            }
          }
        }`,
        }
      )
      .then((res) => {
        /* eslint no-prototype-builtins: 0 */
        const { data } = res
        const bulkLinks = data.links

        const categories = bulkLinks.reduce((result, item) => {
          const categorySlug = slugify(item.linkCategory.name, {
            lower: true,
            strict: true,
          })
          if (!result[categorySlug]) {
            result[categorySlug] = {}
          }

          const hasLinksArray = result[categorySlug].hasOwnProperty(`links`)
          const linksArray = hasLinksArray ? result[categorySlug].links : []

          result[categorySlug] = {
            name: item.linkCategory.name,
            slug: categorySlug,
            links: linksArray,
          }

          result[categorySlug].links = [...result[categorySlug].links, item]

          return result
        }, [])

        return categories
      })
  },

  data() {
    return {
      categories: null,
    }
  },

  computed: {
    ...mapGetters({
      activeCategory: `activeCategory`,
    }),
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

.no-links-found {
  @apply w-full px-10 py-2 flex flex-row items-center justify-between;
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
