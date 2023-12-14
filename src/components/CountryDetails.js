import React from "react";
import './CountryDetails.css';

// altSpellings
// : 
// (2) ['CX', 'Territory of Christmas Island']
// area
// : 
// 135
// capital
// : 
// ['Flying Fish Cove']
// capitalInfo
// : 
// {latlng: Array(2)}
// car
// : 
// {signs: Array(1), side: 'left'}
// cca2
// : 
// "CX"
// cca3
// : 
// "CXR"
// ccn3
// : 
// "162"
// coatOfArms
// : 
// {png: 'https://mainfacts.com/media/images/coats_of_arms/cx.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/cx.svg'}
// continents
// : 
// ['Asia']
// currencies
// : 
// {AUD: {…}}
// demonyms
// : 
// {eng: {…}}
// flag
// : 
// "🇨🇽"
// flags
// : 
// {png: 'https://flagcdn.com/w320/cx.png', svg: 'https://flagcdn.com/cx.svg'}
// idd
// : 
// {root: '+6', suffixes: Array(1)}
// independent
// : 
// false
// landlocked
// : 
// false
// languages
// : 
// {eng: 'English'}
// latlng
// : 
// (2) [-10.5, 105.66666666]
// maps
// : 
// {googleMaps: 'https://goo.gl/maps/ZC17hHsQZpShN5wk9', openStreetMaps: 'https://www.openstreetmap.org/relation/6365444'}
// name
// : 
// {common: 'Christmas Island', official: 'Territory of Christmas Island', nativeName: {…}}
// population
// : 
// 2072
// postalCode
// : 
// {format: '####', regex: '^(\\d{4})$'}
// region
// : 
// "Oceania"
// startOfWeek
// : 
// "monday"
// status
// : 
// "officially-assigned"
// subregion
// : 
// "Australia and New Zealand"
// timezones
// : 
// ['UTC+07:00']
// tld
// : 
// ['.cx']
// translations
// : 
// {ara: {…}, bre: {…}, ces: {…}, cym: {…}, deu: {…}, …}
// unMember
// : 
// false



export default function CountryCard({country, darkMode}) {
    let countryLanguages = [];
    let countryCurrencies = [];
    let countryBorders = [];
    let countryLanguagesArray = Object.entries(country.languages);
    let countryCurrenciesArray = Object.entries(country.currencies);
    let countryBordersArray = country.borders ? Object.entries(country.borders) : [];
    countryLanguagesArray.forEach((language, index) => {
        if(index === countryLanguagesArray.length - 1) {
            countryLanguages.push(language[1]);
        } else {
            countryLanguages.push(language[1] + ", ");
        }
    });
    countryCurrenciesArray.forEach((currency, index) => {
        if(index === countryCurrenciesArray.length - 1) {
            countryCurrencies.push(currency[1].name);
        } else {
            countryCurrencies.push(currency[1].name + ", ");
        }
    });
    countryBordersArray.forEach((border, index) => {
        if(index === countryBordersArray.length - 1) {
            countryBorders.push(border[1]);
        } else {
            countryBorders.push(border[1] + ", ");
        }
    });

    return(
        <div className={`country-details-card ${darkMode && "country-details-card-dark"}`}>
            <div className="flag-wrapper">
                <img src={country.flags.png} alt={country.name.common} className="flag-img" />
            </div>
            <div className="country-details-wrapper">
                <h3 className="country-name">{country.name.common}</h3>
                <div className="details-seperator-main">
                <div className="details-seperator">
                <p className="country-native-name"><span className="details-span-strong">Native Name:</span> {country.name.nativeName.eng ? country.name.nativeName.eng.common : "" }</p>
                <p className="country-population"><span className="details-span-strong">Population:</span> {country.population}</p>
                <p className="country-region"><span className="details-span-strong">Region:</span> {country.region}</p>
                <p className="country-sub-region"><span className="details-span-strong">Sub Region:</span> {country.subregion}</p>
                <p className="country-capital"><span className="details-span-strong">Capital:</span> {country.capital}</p>
                </div>
                <div className="details-seperator">

                <p className="country-top-level-domain"><span className="details-span-strong">Top Level Domain:</span> {country.tld[0]}</p>
                <p className="country-currencies"><span className="details-span-strong">Currencies:</span> {
                    countryCurrencies.map((currency, index) => {
                        return <span key={index}>{currency}</span>
                    })
                }
                </p>
                <p className="country-languages"><span className="details-span-strong">Languages:</span> {
                    countryLanguages.map((language, index) => {
                        return <span key={index}>{language}</span>
                    })
                }
                </p>
                </div>
                </div>
                {
                   countryBorders.length > 0 &&  
                <div className={`border-countries ${darkMode && "border-countries-dark"}`}>
                    <div><p className="details-span-strong">Border Countries:</p></div>
                    <div className="border-countries-wrapper">
                        {
                            countryBorders.map((border, index) => {
                                return <span key={index} className={`border-country ${darkMode && "border-country-dark"}`}>{border}</span>
                            })
                        }

                </div>
            </div>
                        }
        </div>
        </div>
    );

};