import React from 'react'
import styled from 'styled-components'
import { GU } from '@commonsswarm/ui'

const TopContributors = ({ contributors = [] }) => {
  return (
    <Wrapper>
      <TitleContent>
        <WrapperTitle>Top 10 contributors</WrapperTitle>
        <WrapperSubTitle>Receiving the NFT</WrapperSubTitle>
      </TitleContent>
      {contributors.map(({ account, formattedTotalValue }, index) => (
        <Contributor key={account}>
          <Position>{index + 1}. </Position>
          <Position>{`${account.slice(0, 9)}...${account.slice(-9)}`}</Position>
          <Contribuition>{`${formattedTotalValue.slice(
            0,
            -6
          )} wxDAI`}</Contribuition>
        </Contributor>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: inherit;
  max-width: 400px;
  @media (max-width: 900px) {
    margin: auto;
  }
`

const TitleContent = styled.div`
  margin-bottom: 32px;
`

const WrapperTitle = styled.div`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`

const WrapperSubTitle = styled.div`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`

const Contributor = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: ${2 * GU}px;
`

const Position = styled.div`
  font-family: 'Archivo';
  font-size: 18px;
  font-weight: 400;
  padding-right: 8px;
  width: 32.7px;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`

const Contribuition = styled.div`
  font-family: 'Archivo';
  font-size: 18px;
  font-weight: 400;
  margin-left: auto;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`

export default TopContributors
