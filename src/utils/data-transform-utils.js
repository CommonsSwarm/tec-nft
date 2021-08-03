import BigNumber from 'bignumber.js'
import { toChecksumAddress } from 'web3-utils'
import { formatBigNumber } from './bignumber-utils'

export const transformContributorsData = (
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

export const generateTimeDisplay = endDate => {
  const rightJustNow = new Date().getTime()
  const runway = endDate - rightJustNow
  const stateObj = {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)) || 0,
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0,
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)) || 0,
    seconds: Math.floor((runway % (1000 * 60)) / 1000) || 0,
  }
  return stateObj
}
