import { css } from '@emotion/react'

export const breakpoints = {
  xs: '32rem', // ~512px
  sm: '48rem', // ~768px
  md: '64rem', // ~1024px
  lg: '80rem', // ~1280px
  xl: '90rem', // ~1440px
  xl2: '105rem', // ~1680px
  xl3: '120rem' // ~1920px
}

const _getSize = (size, location) => {
  let gradientLocation = size ? location.xs : location
  if (size) {
    switch (size) {
      case 'sm':
        gradientLocation = location.sm ?? location.xs
        break
      case 'md':
        gradientLocation = location.md ?? location.sm ?? location.xs
        break
      case 'lg':
        gradientLocation =
          location.lg ?? location.md ?? location.sm ?? location.xs
        break
      case 'xl':
        gradientLocation =
          location.xl ??
          location.lg ??
          location.md ??
          location.sm ??
          location.xs
        break
      case 'xl2':
        gradientLocation =
          location.xl2 ??
          location.xl ??
          location.lg ??
          location.md ??
          location.sm ??
          location.xs
        break
      case 'xl3':
        gradientLocation =
          location.xl3 ??
          location.xl2 ??
          location.xl ??
          location.lg ??
          location.md ??
          location.sm ??
          location.xs
        break
      default:
        gradientLocation = location.xs
    }
  }
  return gradientLocation
}

export const getGradientBackground = (
  deg = 0,
  colorList = [],
  { size, isImportant } = {}
) => {
  return css`
    background: linear-gradient(
        ${colorList.reduce(
          (styles, { color, location }, index) =>
            `
            ${styles}
            ${color} ${_getSize(size, location)}%${
              index === colorList.length - 1 ? '' : ','
            }
            `,
          `${deg}deg,`
        )}
      )
      ${isImportant ? '!important' : ''};
  `
}
export const mediaQueryWidth = (bp = 'lg') => {
  return `@media (min-width: ${breakpoints[bp]})`
}

export const mediaQueryHeight = (size = '600px') => {
  return `@media (min-height: ${size})`
}

export const mediaQuery = (bp = 'lg', size = '600px') => {
  return `@media (min-width: ${breakpoints[bp]}) and (min-height: ${size})`
}

export const vh = (size) => {
  return `calc(var(--vh, 1vh) * ${size})`
}
