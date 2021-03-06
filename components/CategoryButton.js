import { styled } from '@stitches'
import colors from 'tailwindcss/colors'

export const CategoryButton = styled(`button`, {
  'display': `flex`,
  'flexFlow': `row nowrap`,
  'justifyContent': `space-between`,
  'alignItems': `center`,
  'width': `100%`,
  'padding': `1.5rem 2.5rem`,
  'backgroundColor': `$bg`,
  'fontSize': `1.25rem`,
  'color': `$buttonText`,
  'outline': `none`,
  'transition': `all 150ms ease-in-out`,

  'svg': {
    opacity: 0,
    transition: `300ms ease-in-out`,
  },

  ':hover': {
    backgroundColor: `$bgHover`,

    svg: {
      opacity: 1,
    },
  },

  ':focus': {
    backgroundColor: `$bgFocus`,
    outline: `none`,

    svg: {
      opacity: 1,
    },
  },

  'variants': {
    state: {
      active: {
        fontWeight: 600,
        transition: `all 150ms ease-in-out`,

        svg: {
          opacity: 1,
          transform: `rotate(180deg)`,
          transition: `300ms ease-in-out`,
        },
      },
    },
  },
})
