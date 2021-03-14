import React, { useState, useEffect } from 'react';

import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
// import CardValue from './CardValue'
import Countdown from 'react-countdown';
import "../Home.css";
import TokenData from 'components/Menu/TokenData';
import { forEach } from 'lodash'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`

// async function bitQuery(setState:any){
//   const query = `
//   query
//   {
//     ethereum (network: bsc){
//     dexTrades(options: {desc: "date.date"},
//     smartContractAddress:
//     {is:"0x8c67e35e43305f90c21df95798641a6017e09a39"}
//     ){
//     count
//     tradeAmount(in:USD)
//     date{
//     date(format: "%y-%m-%d")
//     }}
//     }}  
// `;
//   const url = "https://graphql.bitquery.io/";
//   const opts = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         query
//       })
//   };

//   const response = await fetch(url, opts);
//   const responseJson = await response.json() as TokenData;
//   let marketCap = 0;

//   responseJson.data.ethereum.dexTrades.forEach(dexTrade => {
//     marketCap += dexTrade.tradeAmount;
//   });
//   setState(marketCap);
// }

const renderer = ({ days, hours, minutes, seconds }) => (
  <span className="timer">
    <div id='textInsideTimer'>{(days)} day{days > 1 ? 's' : ''} :{(hours)} hour{hours > 1 ? 's' : ''} :{(minutes)} minute{minutes > 1 ? 's' : ''} :{(seconds)} second{seconds > 1 ? 's' : ''} </div>

  </span>);



const CakeStats = () => {
  const [totalMarketCap, setTotalMarketCap] = useState("");

  useEffect(() => {
    const query = `
  query
  {
    ethereum (network: bsc){
    dexTrades(options: {desc: "date.date"},
    smartContractAddress:
    {is:"0x6e046E5BbA2C3b63f44D97262570D45522710D9A"}
    ){
    count
    tradeAmount(in:USD)
    date{
    date(format: "%y-%m-%d")
    }}
    }}  
`;
  const url = "https://graphql.bitquery.io/";
  const opts = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query
      })
  };

  const response = fetch(url, opts)
  .then(x =>x.json())
  .then(x => {
    const data = x as TokenData;

    let marketCap = 0;

    data.data.ethereum.dexTrades.forEach(dexTrade => {
      marketCap += dexTrade.tradeAmount;
    });

    setTotalMarketCap("$".concat(marketCap.toFixed(4)));
  })
  .catch(console.error);
  });

  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody id="homeCardBody">
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Get ready for Sunday 8PMx GMT')}
        </Heading>

        <Countdown date={new Date('March 14, 2021 21:00:00')} autoStart renderer = {renderer}/>

      </CardBody>
      <br/>
      <br/>
      <CardBody id="homeCardBody">
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Armadillo stats')}
        </Heading>
          <p className="infoToken">Total market cap : {totalMarketCap}</p>
          <p className="infoToken">Circulating Supply : 100,000</p>
          <p className="infoToken">New ARMA block 0</p>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
