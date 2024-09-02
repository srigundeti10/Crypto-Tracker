import React, { createContext,useContext,useEffect,useState } from 'react'

const Crypto = createContext();

const Cryptocontext = ({children}) => {

    const [currency, setCurrency] = useState('USD');
    const [symbol, setSymbol] = useState('$$');

    useEffect(() => {
        if(currency === 'USD'){
            setSymbol('$');
        }else if(currency === 'INR'){
            setSymbol('₹');
        }
    }, [currency])

  return (
    <Crypto.Provider value={{currency,setCurrency,symbol}}>
        {children}
    </Crypto.Provider>
  )
};

export default Cryptocontext

export const CryptoState = () =>{
    return useContext(Crypto);
}