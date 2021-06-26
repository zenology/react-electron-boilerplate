import React from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from '@emotion/react'

import ScreenContext from './ScreenContext'

import { colors } from '@core/styles'
import i18n from '@core/config/i18n'

const ComposeProvider = ({ children }) => {
  const providers = React.useMemo(
    () => [
      [I18nextProvider, { i18n }],
      [ThemeProvider, { theme: colors }],
      ScreenContext
    ],
    []
  )

  return providers.reduceRight((componentTree, cfg) => {
    const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
    return <Provider {...props}>{componentTree}</Provider>
  }, children)
}

export default ComposeProvider
