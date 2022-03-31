import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner'

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCoins(data);
                setLoading(false)

            });
    }, [])

    return (
        <>
            {loading ? <Spinner /> : <div className='px-16 py-8 bg-gray-200'>
                <h3>Available Crypto Currencies</h3>
                <h3>Total coins: {coins.length}</h3>
                <div className='grid grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 '>

                    {
                        coins.map(coin => <CoinCard
                            key={coin.id}
                            coin={coin}
                        ></CoinCard>)
                    }
                </div>
            </div>}
        </>
    );
};

export default Coins;