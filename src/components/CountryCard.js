import React from "react";
import ReactDOM from "react-dom/client";
import "./CountryCard.css";


export default function CountryCard({country, darkMode, setCountryDetails}) {
    return (
        <button onClick={setCountryDetails}>
        <div className={`country-card-wrapper ${darkMode && "country-card-wrapper-dark"}`}>
            <div className="flag-img-wrapper"><img src={country.flags.png} alt={country.name.common} className="country-flag" width={250} height={150} /></div>
            <div className={`country-info ${darkMode && "country-info-dark"}`}>
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-population"><span className="country-population-heading">Population:</span> {country.population}</p>
                <p className="country-region"><span className="country-region-heading">Region:</span> {country.region}</p>
                <p className="country-capital"><span className="country-capital-heading">Capital:</span> {country.capital}</p>
            </div>
        </div>
        </button>
    );
};