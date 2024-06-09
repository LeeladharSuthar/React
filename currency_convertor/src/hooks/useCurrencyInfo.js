import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=bd81237ede6a429a9d9ad012e93991b9`
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                setData(responseData["rates"])
                // console.log(Object.keys(responseData)) // ['date', 'base', 'rates']
                // console.log(responseData["rates"]) // Object of currenyKey and rates
            })
            .catch((error) => {
                console.log("Something went wrong: ", error)
            })
    }, []);
    return data
}

export default useCurrencyInfo