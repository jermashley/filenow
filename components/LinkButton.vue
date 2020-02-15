<template>
  <a :href="link.href" target="_blank">
    <span>
      {{ link.name }}
    </span>

    <span class="icon">
      <FontAwesomeIcon :icon="[`fad`, `external-link-alt`]" />
    </span>
  </a>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/pro-duotone-svg-icons'

library.add(faExternalLinkAlt)

export default {
  name: `LinkButton`,

  components: {
    FontAwesomeIcon: () =>
      import(`@fortawesome/vue-fontawesome`).then(
        ({ FontAwesomeIcon }) => FontAwesomeIcon
      ),
  },

  props: {
    link: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: var(--brandText);
  font-size: 1.125rem;
  background-color: var(--brandItemBackground);
  transition: 250ms ease-in-out;

  @apply w-full px-10 py-2 flex flex-row items-center justify-between;

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
}
</style>
