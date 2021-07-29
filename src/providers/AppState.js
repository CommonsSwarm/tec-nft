import React, { createContext, useContext, useMemo } from 'react'
import { useConnect } from '@1hive/connect-react'
import connectHatch from '@commonsswarm/connect-hatch'
import { prepareSubscription } from '../utils/subscription-utils'

const HATCH_APP_NAME = 'marketplace-hatch'

const AppStateContext = createContext()

export const AppStateProvider = ({ children }) => {
  const [
    hatchApp,
    { loading: hatchAppLoading, error: hatchAppError },
  ] = useConnect(org => org.onApp(HATCH_APP_NAME))
  const [
    hatchConnector,
    { loading: hatchConnectorLoading, error: hatchConnectorError },
  ] = useConnect(() => {
    if (!hatchApp) {
      return
    }
    return connectHatch(hatchApp)
  }, [hatchApp])
  const [
    generalConfig,
    { loading: generalConfigLoading, error: generalConfigError },
  ] = useConnect(() => {
    if (!hatchConnector) {
      return
    }
    return prepareSubscription(hatchConnector.onGeneralConfig, [])
  }, [hatchConnector])

  const isLoading =
    hatchAppLoading || hatchConnectorLoading || generalConfigLoading

  const error = hatchAppError || hatchConnectorError || generalConfigError

  const AppState = useMemo(() => {
    return {
      hatchApp,
      hatchConnector,
      generalConfig,
      error,
      isLoading,
    }
  }, [hatchApp, hatchConnector, generalConfig, error, isLoading])

  return (
    <AppStateContext.Provider value={AppState}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => useContext(AppStateContext)
