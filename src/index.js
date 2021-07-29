import React from 'react'
import ReactDOM from 'react-dom'
import { Connect } from '@1hive/connect-react'
import { AppStateProvider } from './providers/AppState'
import MainView from './components/MainView'
import App from './App'
import { Main } from '@commonsswarm/ui'

const orgAddress = process.env.REACT_APP_ORG_ADDRESS.toLocaleLowerCase()
const network = parseInt(process.env.REACT_APP_CHAIN_ID)

ReactDOM.render(
  <React.StrictMode>
    <Connect location={orgAddress} connector="thegraph" options={{ network }}>
      <AppStateProvider>
        <Main theme="dark" assetsUrl="/aragon-ui" layout={false} scrollView>
          <MainView>
            <App />
          </MainView>
        </Main>
      </AppStateProvider>
    </Connect>
  </React.StrictMode>,
  document.getElementById('root')
)
