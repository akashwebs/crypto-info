import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    
    const { name, symbol, image,id } = coin;

    return (
        <Link to={`/coins/${id}`}>
            <div className='flex items-center justify-between p-4 rounded-lg bg-white shadow-lg'>
                <div>
                    <img src={image} alt="coins" className='w-12 h-12' />
                </div>
                <div>
                    <h2>{name}</h2>
                    <span><small>{symbol}</small></span>

                </div>
            </div>
        </Link>
    );
};

export default CoinCard;