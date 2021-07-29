import { useMemo } from 'react'
import { useConnect } from '@1hive/connect-react'
import { useAppState } from '../providers/AppState'
import { prepareSubscription } from '../utils/subscription-utils'
import { transformContributorsData } from '../utils/data-transform-utils'

export const useContributorsSubscription = ({
  count = 1000,
  skip = 0,
  orderBy = 'totalValue',
  orderDirection = 'asc',
} = {}) => {
  const {
    hatchConnector,
    generalConfig: {
      hatchConfig: { contributionToken, token },
    },
  } = useAppState()
  const [rawContributors, rawContributorsStatus] = useConnect(
    () =>
      prepareSubscription(hatchConnector.onContributors, [
        { first: count, skip, orderBy, orderDirection },
      ]),
    [hatchConnector]
  )

  return useMemo(
    () => [
      rawContributors?.map(c =>
        transformContributorsData(c, contributionToken, token)
      ),
      rawContributorsStatus,
    ],
    [contributionToken, token, rawContributors, rawContributorsStatus]
  )
}
