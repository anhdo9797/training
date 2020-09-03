const axios = require('axios');

export const fetchDataCov = async () => {
    let response = await axios({
        method: 'GET',
        url: 'https://coronavirus-map.p.rapidapi.com/v1/summary/latest',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com',
            'x-rapidapi-key': '9cdf32cfc4mshb3430abf1f75818p138eb1jsnf78f2fd25cbb',
            useQueryString: true,
        },
    });

    let data = Object.values(response.data.data.regions);

    console.log('data', data);

    let dataList = [];

    for (let index = 0; index < data.length; index++) {
        let value = JSON.stringify(data[index]);
        console.log(value.name);

        dataList.push(analysis(data[index]));
    }

    return dataList;
};

const analysis = (data) => {
    return {
        name: data.name,
        totalCase: data.total_cases,
        totalDeaths: data.deaths,
        changeCase: data.change.total_cases,
        deaths: data.change.deaths,
        flag: data.iso3166a2,
        recovered: data.recovered,
        changeRecovered: data.change.recovered,
    };
};

//URL Shortener Service

// axios({
//   method: "POST",
//   url: "https://url-shortener-service.p.rapidapi.com/shorten",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
//     "x-rapidapi-key": "9cdf32cfc4mshb3430abf1f75818p138eb1jsnf78f2fd25cbb",
//     useQueryString: true,
//   },
//   data: {
//     url: "https://search.muz.li/MzQ2ZmI3NWQ2",
//   },
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
