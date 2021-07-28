import { useRef, useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { toChecksumAddress } from 'web3-utils'
import { formatBigNumber } from '../utils'
// import connectHatch from '@commonsswarm/connect-hatch'
// import { useConnect } from '@1hive/connect-react'
import { useHatchConnector } from './useHatchConnector'

const transformContributorData = (
  contributor,
  contributionToken,
  token
) => {
  const totalAmount = new BigNumber(contributor.totalAmount)
  const totalValue = new BigNumber(contributor.totalValue)
  return {
    ...contributor,
    account: toChecksumAddress(contributor.account),
    totalAmount,
    formattedTotalAmount:
      formatBigNumber(totalAmount, token.decimals) + ' ' + token.symbol,
    totalValue,
    formattedTotalValue:
      formatBigNumber(totalValue, contributionToken.decimals) +
      ' ' +
      contributionToken.symbol,
  }
}


const contributionToken = { decimals: 18, symbol: 'wxDAI' }
const token = { decimals: 18, symbol: 'TECH' }

export const useContributorsSubscription = ({
  count = 1000,
  skip = 0,
  orderBy = 'totalValue',
  orderDirection = 'asc',
} = {}) => {
  const [hatchConnector] = useHatchConnector()
  // const [ hatchConnector ] = useConnect(org => connectHatch(org.onApp('marketplace-hatch'), ['thegraph', { staging: true }]))
  // const [generalConfig, status] = useConnect(async (org) => {
  //   console.log(org)
  //   const res = await hatchConnector?.generalConfig()
  //   console.log(res)
  //   return res
  // }, [hatchConnector])
  // console.log(generalConfig)
  // console.log(status)


  const [contributors, setContributors] = useState([])
  // console.log(contributors)

  const contributorsSubscription = useRef(null)

  const onContributorsHandler = useCallback(
    (err, contributors) => {
      console.log(err)
      console.log('contributors', contributors)
      if (err || !contributors) {
        return
      }

      const transformedContributors = contributors.map(c =>
        transformContributorData(c, contributionToken, token)
      )

      setContributors(transformedContributors)
    },
    [setContributors]
  )

  useEffect(() => {
    if (!hatchConnector) {
      return
    }

    contributorsSubscription.current = hatchConnector.onContributors(
      { first: count, skip, orderBy, orderDirection },
      onContributorsHandler
    )
    return () => {
      contributorsSubscription.current.unsubscribe()
    }
  }, [
    hatchConnector,
    onContributorsHandler,
    count,
    skip,
    orderBy,
    orderDirection,
  ])

  return contributors
}
