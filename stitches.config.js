import { createStyled } from '@stitches/react'
import colors from 'tailwindcss/colors'

export const { styled, css } = createStyled({
  prefix: ``,
  tokens: {
    colors: {
      $bg: colors.white,
      $borderColor: colors.coolGray[`200`],
      $pageBg: colors.white,
      $bgHover: colors.coolGray[`100`],
      $bgFocus: colors.coolGray[`50`],
      $buttonText: colors.coolGray[`800`],
    },
  },
  breakpoints: {},
  utils: {},
})

export const darkTheme = css.theme({
  colors: {
    $bg: `rgba(10, 15, 25, 1)`,
    $borderColor: colors.coolGray[`800`],
    $pageBg: colors.coolGray[`900`],
    $bgHover: colors.coolGray[`900`],
    $bgFocus: colors.coolGray[`800`],
    $buttonText: colors.coolGray[`200`],
  },
})
