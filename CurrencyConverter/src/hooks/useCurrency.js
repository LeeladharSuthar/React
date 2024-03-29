import { useEffect, useState } from "react";

function useCurrency(currency){
    const [data, setData] = useState(0);
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>{
            return res.json()
        })
        .then((result)=>{
            setData(result[currency])
        })
        // console.log(data)
    }, [currency])
    return data
}


export default useCurrency