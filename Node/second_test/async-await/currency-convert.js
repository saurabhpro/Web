/*
saurabh.kumar@C02D70TBMD6N async-await % node currency-convert.js
1000 from EUR is 85923.74 in INR. 
INR can be used in countries: Bhutan, India, Zimbabwe 
cnv: 1.372s
 */

import pkg  from 'axios';
const {get} = pkg;

// const getExchangeRate = (from, to) => {
//     return axios.get(`http://api.fixer.io/latest?base=${from}`)
//         .then((response) => {
//             return response.data.rates[to];
//         });

// }


// https://fixer.io/quickstart -> yahoo domain, free plan doesnt support USD, so making it to EUR
const getExchangeRate = async (from, to) => {
    try {
        const fixer_api_key = 'e55ba5c2eb354c17bc50fbf70ce29f8b';
        const response = await get(`http://data.fixer.io/api/latest?access_key=${fixer_api_key}&base=${from}`);

        const rate = response.data.rates[to];

        //to handle - rates not mapped with to-currency
        if (rate) {
            return rate;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get Exchange Rate from ${from} to ${to}`);
    }
}


// const getCountries = (currency) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currency}`)
//         .then((response) => {
//             return response.data.map((country) => country.name);
//         });
// }

const getCountries = async (currency) => {
    try {
        const response = await get(`https://restcountries.eu/rest/v2/currency/${currency}`);

        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get Countries that use currency ${currency}`);
    }
}


// const convertCurrency = (from, to, amount) => {
//     let countries;
//     return getCountries(to).then((tmpCountries) => {
//             countries = tmpCountries;

//             return getExchangeRate(from, to);
//         })
//         .then((rate) => {
//             const exchangeAmt = amount * rate;

//             return `${amount} from ${from} is ${exchangeAmt.toFixed(2)} in ${to}. \n${to} can be used in countries ${countries.join(', ')} `;
//         })

// }

// console.time('cnv');
// convertCurrency('USD', 'INR', 1000).then((res) => {
//     console.log(res);

//     console.timeEnd('cnv');
// });


const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);

    const exchangeAmt = amount * rate;
    return `${amount} from ${from} is ${exchangeAmt.toFixed(2)} in ${to}. \n${to} can be used in countries: ${countries.join(', ')} `;
}

console.time('cnv');
convertCurrencyAlt('EUR', 'INR', 1000)
    .then((res) => {
        console.log(res);

        console.timeEnd('cnv');
    })
    .catch((err) => {
        console.log(err.message);
    });