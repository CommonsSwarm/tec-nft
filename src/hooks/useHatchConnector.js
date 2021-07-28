import { useEffect, useState } from 'react'
import connectHatch from '@commonsswarm/connect-hatch'
import { useApp } from '@1hive/connect-react'

const HATCH_APP_NAME = 'marketplace-hatch'

export const useHatchConnector = () => {
  const [hatchConnector, setHatchConnector] = useState()  
  const [loading, setLoading] = useState(true)
  const [hatchApp] = useApp(HATCH_APP_NAME)
  useEffect(() => {
    if (!hatchApp) {
      return
    }

    let cancelled = false
    const getHatchConnector = async () => {
      console.log(hatchApp)
      try {
        const hatchConnector = await connectHatch(hatchApp, ['thegraph', {staging: false}])
        
        if(!cancelled) {
          setLoading(false)
          setHatchConnector(hatchConnector)
        }
      } catch(err) {
        setLoading(false)
        console.error(`Error fetching hatch connector: ${err}`)
      }
    }

    getHatchConnector()

    return () => {
      cancelled = true
    }
  }, [hatchApp])

  return [hatchConnector, loading]
}