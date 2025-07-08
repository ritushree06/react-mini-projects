import { useEffect, useState } from "react";


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({});
//     useEffect(() => {
//       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]))
//     }, [currency])

//     console.log(data);
//     return data
    
// }

function useCurrencyInfo(from, to) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[to]));
    }, [from, to]);

    return data;
}



export default useCurrencyInfo;