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
      <img src={Heading} alt="Hatch" />
      <Layout style={{ marginTop: '25px' }}>
        <GlobalFonts />
        <Nft minBid={minBid} endDate={endDate} />
        <TopContributors contributors={contributors} />
      </Layout>
    </Background>
  )
}

export default App

const Background = styled.div`
  background-color: #0b0a15;
  overflow: hidden;
`
