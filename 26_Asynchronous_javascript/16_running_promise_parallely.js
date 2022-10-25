// Running Promises in parallel

const getJSON = function (url, errorMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const get3countryData = async function (country1, country2, country3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country1}`
    // );
    // console.log(data1);
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country2}`
    // );
    // console.log(data2);
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country3}`
    // );
    // console.log(data3);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country3}`),
    ]);

    // captial
    console.log(data.map(d => d[0].capital))
  } catch (error) {
    console.log(err);
  }
};

get3countryData("India", "usa", "australia");
