import { subscription } from '@1hive/connect-react'

export const prepareSubscription = (fn, params) => {
  return subscription(null, callback => fn(...params, callback))
}
