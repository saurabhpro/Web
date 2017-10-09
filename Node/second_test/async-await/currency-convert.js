// arguments from: USD to: CAD amount: 24
// 24 is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

// const getExchangeRate = (from, to) => {
//     return axios.get(`http://api.fixer.io/latest?base=${from}`)
//         .then((response) => {
//             return response.data.rates[to];
//         });

// }


const getExchangeRate = async(from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);

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

const getCountries = async(currency) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currency}`);

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


const convertCurrencyAlt = async(from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);

    const exchangeAmt = amount * rate;
    return `${amount} from ${from} is ${exchangeAmt.toFixed(2)} in ${to}. \n${to} can be used in countries: ${countries.join(', ')} `;
}

console.time('cnv');
convertCurrencyAlt('USD', 'INR', 1000)
    .then((res) => {
        console.log(res);

        console.timeEnd('cnv');
    })
    .catch((err) => {
        console.log(err.message);
    });