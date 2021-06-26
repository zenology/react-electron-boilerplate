import { css, Global } from '@emotion/react'

import { reset, typography, colors } from './global'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${typography}
        
        html,body {
          height: 100%;
        }
      `}
    />
  )
}

export { GlobalStyles as default, colors }
