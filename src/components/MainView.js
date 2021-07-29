import { SyncIndicator } from '@commonsswarm/ui'
import React from 'react'
import { useAppState } from '../providers/AppState'

const MainView = ({ children }) => {
  const { isLoading } = useAppState()
  return (
    <div>
      <SyncIndicator visible={isLoading} />
      {!isLoading && children}
    </div>
  )
}

export default MainView
