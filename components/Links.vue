<template>
  <transition name="fade">
    <div v-if="activeCategory">
      <LinkButton
        v-for="link in categories[activeCategory].links"
        :key="link.id"
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

  async fetch() {
    this.categories = await this.$axios
      .$post(
        `https://api-us-east-1.graphcms.com/v2/ckcwplnre4sxd01xr930i3ilm/master`,
        {
          query: `{
          links {
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
          if (!result[item.linkCategory.id]) {
            result[item.linkCategory.id] = {}
          }

          const hasLinksArray = result[item.linkCategory.id].hasOwnProperty(
            `links`
          )
          const linksArray = hasLinksArray
            ? result[item.linkCategory.id].links
            : []

          result[item.linkCategory.id] = {
            name: item.linkCategory.name,
            links: linksArray,
          }

          result[item.linkCategory.id].links = [
            ...result[item.linkCategory.id].links,
            item,
          ]

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
