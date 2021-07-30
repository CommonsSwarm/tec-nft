import React from 'react'
import { Button, Timer, Split, GU, textStyle } from '@commonsswarm/ui'
import styled from 'styled-components'

function Nft({ minBid, endDate }) {
  return (
    <div>
      <Split
        primary={<img src="/bot.png" alt="hatch bot" />}
        secondary={
          <>
            <Title>The hatch bot</Title>
            <h2>
              The top 10 participants will each receive this limited edition
              NFT.
            </h2>
            <div>
              <div>Minimum to participate</div>
              {minBid}
            </div>
            <div>
              <div>Hatch ending in</div>
              <Timer end={endDate} />
            </div>
            <Button href="https://hatch.tecommons.org">
              Participate in the hatch
            </Button>
          </>
        }
        secondaryWidth={`${75 * GU}px`}
      />
    </div>
  )
}

const Title = styled.h1`
  ${textStyle('title1')};
  text-transform: uppercase;
  font-size: 66px;
`

export default Nft
