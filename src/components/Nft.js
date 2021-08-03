import React, { useEffect, useState } from 'react'
import { Button, GU } from '@commonsswarm/ui'
import styled from 'styled-components'

function Nft({ minBid, endDate }) {
  const generateTimeDisplay = () => {
    const rightJustNow = new Date().getTime()
    const runway = endDate - rightJustNow
    const stateObj = {
      days: Math.floor(runway / (1000 * 60 * 60 * 24)),
      hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((runway % (1000 * 60)) / 1000),
    }
    return stateObj
  }

  const [timeDisplay, setTimeDisplay] = useState(generateTimeDisplay)
  useEffect(() => {
    setTimeDisplay(generateTimeDisplay)
    const interval = setInterval(
      () => setTimeDisplay(generateTimeDisplay),
      1000
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Split>
        <SplitPrimary>
          <BotImg src="/bot.png" alt="hatch bot" />
        </SplitPrimary>
        <SplitSecondary>
          <Box>
            <Title>The hatch bot</Title>
            <SubTitle>
              The top 10 participants will each receive this limited edition
              NFT.
            </SubTitle>
            <Wrapper>
              <div>
                <Requirements>Minimum to participate</Requirements>
                <Currency>
                  {minBid ? minBid.slice(0, -5) : ''}
                  <CurrencyType>wxDAI</CurrencyType>
                </Currency>
                <ConvertedBid>{`$${
                  minBid ? minBid.slice(0, -5) : ''
                }`}</ConvertedBid>
              </div>
              <div>
                <Requirements>Hatch Ending In:</Requirements>
                <CounterWrapper>
                  <DayCounter>
                    <CounterContent>
                      <span style={{ height: '60px' }}>{timeDisplay.days}</span>
                    </CounterContent>
                    <CounterSubtitle>Days</CounterSubtitle>
                  </DayCounter>
                  <TimeCounter>
                    <CounterContent>{timeDisplay.hours}</CounterContent>
                    <CounterSubtitle>Hours</CounterSubtitle>
                  </TimeCounter>
                  <TimeCounter>
                    <CounterContent>{timeDisplay.minutes}</CounterContent>
                    <CounterSubtitle>Minutes</CounterSubtitle>
                  </TimeCounter>
                  <TimeCounter>
                    <CounterContent>{timeDisplay.seconds}</CounterContent>
                    <CounterSubtitle>Seconds</CounterSubtitle>
                  </TimeCounter>
                </CounterWrapper>
              </div>
            </Wrapper>
            <CustomButton href="https://hatch.tecommons.org">
              Participate in the hatch
            </CustomButton>
          </Box>
        </SplitSecondary>
      </Split>
    </div>
  )
}

const Split = styled.div`
  display: block;
  padding-bottom: ${3 * GU}px;
  width: 100%;
  @media (min-width: 900px) {
    padding-top: ${16 * GU}px;
    display: flex;
  }
`

const SplitPrimary = styled.div`
  flex-grow: 1;
`

const SplitSecondary = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  @media (min-width: 1250px) {
    margin-left: 8%;
  }
`

const BotImg = styled.img`
  box-shadow: -20px -20px #defb48;
  @media (max-width: 900px) {
    display: flex;
    margin: auto;
  }
`

const Box = styled.div`
  @media (max-width: 1250px) {
    transform: scale(0.7);
  }
`

const Title = styled.h1`
  font-family: 'Bai Jamjuree Bold';
  font-size: 66px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 60px;
  }
`

const SubTitle = styled.h2`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 14px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-top: 10%;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 5% auto;
  }
`

const Requirements = styled.div`
  font-family: 'Bai Jamjuree';
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`

const CurrencyType = styled.div`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 400;
  display: inline;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`

const Currency = styled.div`
  font-family: 'Inter';
  font-size: 44px;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`

const ConvertedBid = styled.div`
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 400;
  position: relative;
  top: -5px;
  text-align: left;
  opacity: 60%;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`

const CounterWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
  }
`

const DayCounter = styled.div`
  font-family: 'Inter';
  font-size: 44px;
  font-weight: 700;
  color: white;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`

const TimeCounter = styled.div`
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 500;
  color: white;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @media (max-width: 900px) {
    font-size: 22px;
  }
`

const CounterContent = styled.div`
  align-self: flex-start;
  display: flex;
`

const CounterSubtitle = styled.div`
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 400;
  color: white;
  opacity: 60%;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`

const CustomButton = styled(Button)`
  font-family: 'Bai Jamjuree Bold';
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 370px;
  height: 60px;
  @media (max-width: 900px) {
    display: flex;
    margin: auto;
    font-size: 16px;
  }
`

export default Nft
