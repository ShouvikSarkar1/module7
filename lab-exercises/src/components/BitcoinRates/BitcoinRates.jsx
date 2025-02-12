import React, { useState, useEffect, useContext } from 'react';
import EmojiChanger from '../Emoji/EmojiChanger'


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


const useBitcoinPrice = (currency) => {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                const data = await response.json();
                setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
            } catch (error) {
                setBitcoinPrice(null);
            }
        };
        fetchPrice();
    }, [currency]);

    return bitcoinPrice;
};

const BitcoinRates = () => {
    const [currency, setCurrency] = useState(currencies[0]);
    const bitcoinPrice = useBitcoinPrice(currency);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {currencies.map(curr => (
                        <option value={curr} key={curr}>{curr}</option>
                    ))}
                </select>
            </label>
            <p>{bitcoinPrice !== null ? `1 BTC = ${bitcoinPrice} ${currency}` : `Loading...`}</p>                   
            <EmojiChanger/>        
        </div>
    );
};

export default BitcoinRates;

