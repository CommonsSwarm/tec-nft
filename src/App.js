import React from 'react'
import Heading from './Heading.svg'
import Nft from './components/Nft'
import TopContributors from './components/TopContributors'
import { useContributorsSubscription } from './hooks/useSubscriptions'
import { useAppState } from './providers/AppState'
import { Layout } from '@commonsswarm/ui'
import GlobalFonts from './fonts/fonts'
import styled from 'styled-components'

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
    <Background>
      <img src={Heading} style={{ maxWidth: '100vw' }} alt="Hatch" />
      <Layout style={{ marginTop: '50px' }}>
        <GlobalFonts />
        <Nft minBid={minBid} endDate={endDate} />
        <TopContributors contributors={contributors} />
      </Layout>
    </Background>
  )
}

export default App

const Background = styled.div`
  background-image: url('/bg.png');
  background-size: cover;
  overflow: hidden;
  width: 100vw;

  @media (max-width: 1440px) {
    padding-left: 10vw;
  }

  @media (max-width: 1300px) {
    background-position: 25% 0%;
  }

  @media (max-width: 900px) {
    padding-left: 0;
  }
`
