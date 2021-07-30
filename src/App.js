import React from 'react'
import Heading from './Heading.svg'
import Nft from './components/Nft'
import TopContributors from './components/TopContributors'
import { useContributorsSubscription } from './hooks/useSubscriptions'
import { useAppState } from './providers/AppState'

function App() {
  const [contributors] = useContributorsSubscription({
    count: 10,
    orderBy: 'totalValue',
    orderDirection: 'desc',
  })
  const {
    generalConfig: {
      hatchConfig: { openDate, period },
    },
  } = useAppState()

  const minBid =
    contributors && contributors[contributors.length - 1]?.formattedTotalValue

  const endDate = new Date((parseInt(openDate) + parseInt(period)) * 1000)

  return (
    <div>
      <img src={Heading} alt="Hatch" />
      <Nft minBid={minBid} endDate={endDate} />
      <TopContributors contributors={contributors} />
    </div>
  )
}

export default App
