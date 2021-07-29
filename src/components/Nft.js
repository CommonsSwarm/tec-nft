import { Button } from '@commonsswarm/ui'
import React from 'react'
import { useAppState } from '../providers/AppState'

function Nft() {
  const { hatchConnector } = useAppState()
  console.log(hatchConnector)
  return (
    <div>
      <img src="/bot.png" alt="hatch bot" />
      <>
        <h1>The hatch bot</h1>
        <h2>
          The top 10 participants will each receive this limited edition NFT.
        </h2>
        <div>
          <div>Minimum to participate</div>
          2000 wxDAI
        </div>
      </>
      <Button href="https://hatch.tecommons.org">
        Participate in the hatch
      </Button>
    </div>
  )
}

export default Nft
