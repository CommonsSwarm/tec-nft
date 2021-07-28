import React from 'react'
import { Main } from '@commonsswarm/ui'
import Heading from './Heading.svg'
import Nft from './components/nft'
// import TopContributors from './components/top-contributors'
import { useContributorsSubscription } from './hooks/useSubscriptions'

function App() {
  const contributors = useContributorsSubscription({
    count: 10,
    orderBy: 'totalValue',
    orderDirection: 'desc',
  })
  console.log(contributors)
  return (
    <Main
      theme="dark"
      assetsUrl="/aragon-ui"
      layout={false}
      scrollView={false}
    >
      <img src={Heading} alt="Hatch" />
      <Nft />
      {/* <TopContributors contributors={contributors} /> */}
    </Main>
  );
}

export default App;
