import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'

import ComposeProvider from '@core/providers/ComposeProvider'

import GlobalStyle from '@core/styles'
import router from '@routers/router'

ReactDOM.render(
  <ComposeProvider basename="/">
    <GlobalStyle />
    <BrowserRouter>
      {router.map(({ path, Component }) => {
        return (
          <Switch key={path} path={path}>
            <Component />
          </Switch>
        )
      })}
    </BrowserRouter>
  </ComposeProvider>,
  document.getElementById('root')
)
