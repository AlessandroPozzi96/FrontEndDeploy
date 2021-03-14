import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import ReactPlayer from 'react-player'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`


const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      {/* <Hero> */}
      <div className="MainCardWrapper" style={{background: "#E4E4BF", padding:'24px', borderRadius: '25px'}}>
        <div className="HeadingHomePage">
          <Heading as="h1" size="xl" mb="24px" color=" rgb(62, 61, 67)" >
            <img className="ArmadilloHomeImages" src="/logo.png" alt="nft" height="128px" width="128px"/>
            {TranslateString(576, 'Armadillo Swap')}
            <img className="ArmadilloHomeImages" src="/logo.png" alt="nft" height="128px" width="128px"/>
          </Heading>
        </div>
        <div className="subHeadingHomePage">
          <Text fontSize="32px" color="rgb(62, 61, 67)">{TranslateString(578, 'An original project created by the community, for the community')}</Text>
        </div>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
      {/* </Hero> */}
      <div className="homeCardDiv" >
        <Cards>
         <CakeStats />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
