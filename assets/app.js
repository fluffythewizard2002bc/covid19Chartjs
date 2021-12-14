const urlCountries = "https://corona-api.com/countries";
const urlRegions = "https://restcountries.herokuapp.com/api/v1";



async function country() {
    let countryNameObj = {};
    await fetch((urlCountries), {}).then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Authorization failed : ' + error.message));

    //countryNameObj['name'] = fetchCountryFromUrl.data[0].name;
    console.log(countryNameObj);

}
country();
/**
 * object = { ...object, 
...{ product_code: '90210',
      brand: 'Phillips66',
      category: 'LUBES AND GREASES',
      description: 'cuatro cinco seis',
      price: '500.00',
      quantity: '5' 
    }
}
objectOfCountry.push({
      name:element.name, 
    common: element.name.common,
      cca2: element.cca2,
      region: element.region
    });

 * objectOfCountry = { ...objectOfCountry, 
...{ name:element.name, 
    common: element.name.common,
      cca2: element.cca2,
      region: element.region
    }
}
 */

async function callAPI() {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ');

    await fetch( //https://restcountries.herokuapp.com/api/v1/region/asia
            "https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/asia", {
                /*method: "POST",
                 mode: "cors",
                 headers: headers,
                 body: JSON.stringify(),*/
            }
        )
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Authorization failed : ' + error.message));

}
//callAPI();
/**
 * Search by continent: Africa, Americas, Asia, Europe, Oceania:
 * https://restcountries.com/v2/continent/{region}

https://restcountries.com/v2/continent/europe

Filter:
You can filter the output of your request to include only the specified fields.

https://restcountries.com/v2/{service}?fields={field},{field},{field}

https://restcountries.com/v2/all?fields=name,capital,currencies
 */