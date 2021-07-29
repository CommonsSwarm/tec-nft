import React from 'react'
import Heading from './Heading.svg'
import Nft from './components/Nft'
import TopContributors from './components/TopContributors'
import { useContributorsSubscription } from './hooks/useSubscriptions'

function App() {
  const [contributors] = useContributorsSubscription({
    count: 10,
    orderBy: 'totalValue',
    orderDirection: 'desc',
  })

  return (
    <div>
      <img src={Heading} alt="Hatch" />
      <Nft />
      <TopContributors contributors={contributors} />
    </div>
  )
}

export default App
