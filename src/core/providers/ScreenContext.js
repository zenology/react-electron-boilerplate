import React from 'react'
import { useMediaQuery, Context as ResponsiveContext } from 'react-responsive'

import { breakpoints } from '@core/styles/helpers'

const ScreenContext = ({ children }) => {
  const xs = useMediaQuery({ maxWidth: breakpoints.sm })
  const sm = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.md
  })
  const md = useMediaQuery({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.lg
  })
  const lg = useMediaQuery({
    minWidth: breakpoints.lg,
    maxWidth: breakpoints.xl
  })
  const xl = useMediaQuery({
    minWidth: breakpoints.xl,
    maxWidth: breakpoints.xl2
  })
  const xl2 = useMediaQuery({
    minWidth: breakpoints.xl2,
    maxWidth: breakpoints.xl3
  })
  const xl3 = useMediaQuery({ minWidth: breakpoints.xl3 })

  // Update vh
  React.useEffect(() => {
    const updateScreenHeight = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', updateScreenHeight)
    updateScreenHeight()

    return () => {
      window.removeEventListener('resize', updateScreenHeight)
    }
  }, [])

  const values = React.useMemo(() => {
    let currentScreen = 'xs'
    if (sm) {
      currentScreen = 'sm'
    }

    if (md) {
      currentScreen = 'md'
    }

    if (lg) {
      currentScreen = 'lg'
    }

    if (xl) {
      currentScreen = 'xl'
    }

    if (xl2) {
      currentScreen = 'xl2'
    }

    if (xl3) {
      currentScreen = 'xl3'
    }

    return {
      xs,
      sm,
      md,
      lg,
      xl,
      xl2,
      xl3,
      currentScreen
    }
  }, [lg, md, sm, xl, xl2, xl3, xs])

  return (
    <ResponsiveContext.Provider displayName="ScreenContext" value={values}>
      {children}
    </ResponsiveContext.Provider>
  )
}

const useScreen = () => {
  return React.useContext(ResponsiveContext)
}

export { ScreenContext as default, useScreen }
