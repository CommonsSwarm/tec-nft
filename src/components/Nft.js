import React from 'react'
import { Button, Timer } from '@commonsswarm/ui'

function Nft({ minBid, endDate }) {
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
          {minBid}
        </div>
        <div>
          <div>Hatch ending in</div>
          <Timer end={endDate} />
        </div>
      </>
      <Button href="https://hatch.tecommons.org">
        Participate in the hatch
      </Button>
    </div>
  )
}

export default Nft
