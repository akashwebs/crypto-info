import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => res.json())
            .then(data => {
                setCoin(data);
                setLoading(false);
            })
    }, [coinId])

    console.log(coin)
    return (
        <>
            {
               loading ? <Spinner></Spinner>: <div className='grid grid-cols-1 md:grid-cols-2 items-center px-16 py-16 bg-gray-200'>
               <div>
                   <div className='text-left'>
                       <h2 className='text-3xl mb-2'>General Info:</h2>
                       <div className='text-sm'>
                           <p>Coin Name:{coin.name} </p>
                           <p>Market Cap: {coin.market_cap_rank}</p>
                           <p>Origin: {coin.origin ? coin.origin : 'not Available'}</p>
                           <p>Contact Address:{coin.contract_address} </p>
                           <p>Hashing Algorithm:{coin.hashing_algorithm} </p>
                           <p>Genesis Date: {coin.genesis_date ? coin.genesis_date : 'not found'} </p>
                           <p>Last Updated:{coin.last_updated ? coin.last_updated : 'not found'} </p>
                       </div>
   
                   </div>
   
                   <div className='text-left mt-4'>
                       <h2 className='text-3xl mb-2'>Scorers:</h2>
                       <div className='text-sm'>
                           <p>Community Score: {coin.community_score}</p>
                           <p>Developer Score: {coin.developer_score}</p>
                           <p>Liquidity Score: {coin.liquidity_score}</p>
                           <p>Public Interest Score:{coin.public_interest_score}</p>
                       </div>
                   </div>
               </div>
   
               <div className='flex justify-center items-center'>
                   <img src={coin.image?.large ? coin.image?.large: coin.image?.thumb} alt="" />
               </div>
           </div> 
            }
        </>
    );
};

export default CoinDetails;