/**
 * function getFive(){
  // We're RETURNING the promise. Remember, a promise is a wrapper over our value
  return delay(100).then(function(){ // When the promise is ready,
      return 5; // return the value 5. Promises are all about return values
  })
}
// We _have_ to wrap it like this in the call site, and we can't access the plain value
getFive().then(function(five){
   document.body.innerHTML = five;
});

function foo() {
    // RETURN the promise
    return fetch("/echo/json").then(function(response){
        return response.json(); // Process it inside the `then`
    });
}

foo().then(function(response){
    // Access the value inside the `then`
})
 */

const btn = document.querySelector("button");
const countryName = document.querySelector(".title");
const cca2Code = document.querySelector(".code");
const arrayOfObjectOfCountry = [];
const objectOfCountry = [];

const contains = (continentStr) =>
    arrayOfObjectOfCountry.findIndex(
        // Is the string contained in the object keys?
        obj => Object.keys(obj).includes(continentStr)
    )

async function fetchCovidByCca2(arrayOfObjectOfCountry, continentStr) {

    let index = contains(continentStr);

    if (index === -1) {
        console.log("abort");
        return;
    }
    /**
     * if (exampleObj.hasOwnProperty(key))
                {
                    value = exampleObj[key];
                    console.log(key, value);
                }
     */
    //Object.entries(arrayOfObjectOfCountry[index])

    //console.dir("moo0", arrayOfObjectOfCountry[index][continentStr]);
    //console.dir("moo1", arrayOfObjectOfCountry[index][continentStr]);
    //for (const obj in Object.entries(arrayOfObjectOfCountry[index][continentStr])) {
    arrayOfObjectOfCountry[index][continentStr].forEach((e) => {
        Object.values(e).forEach((key, val) => {
            console.log("moo2", moo);
        })
    })


    let response = await (await fetch(`https://intense-mesa-62220.herokuapp.com/http://corona-api.com/countries/:${key}`)).json();

    arrayOfObjectOfCountry[index][continentStr].key.push({

        todayDeaths: response.today.deaths,
        todayConfirmed: response.today.confirmed,
        latestConfiremed: response.latest_data.confirmed,
        latestRecovered: response.latest_data.recovered,
        latestCritical: response.latest_data.critical,
        latestDeaths: response.latest_data.deaths,
    });


    //console.log(arrayOfObjectOfCountry);
    return arrayOfObjectOfCountry;
}



async function fetchCountriesByContinent(continentStr) {

    if (contains(continentStr) !== -1) {
        console.log("abort");
        return;
    }
    let response = await (await fetch("https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/" + continentStr)).json();
    const objectOfCountry = [];

    response.forEach((element) => {

        objectOfCountry.push({
            label: element.name.common,
            cca2: element.cca2
        });

    });
    //var key = "happyCount"; myArray.push({ [key]: someValueArray });
    arrayOfObjectOfCountry.push({
        [continentStr]: objectOfCountry
    });
    console.log("moo1", arrayOfObjectOfCountry);
    return fetchCovidByCca2(arrayOfObjectOfCountry, continentStr);
};
//console.log("moo2");
fetchCountriesByContinent("asia");
//btn.addEventListener("click", fetchCountriesByContinent);



//btn.addEventListener("click", fetchCountriesByContinent);

//fetchCountriesByContinent("asia").then(fetchCovidByCca2(arrayOfObjectOfCountry, "asia"));