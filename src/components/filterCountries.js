import React from "react";
import ReactDOM from "react-dom/client";
import "./filterCountries.css";


export default function Filter({filter, filterChange, regionChange, darkMode}) {
    return (
        <div className="filter-wrapper">
            <input type="text" placeholder="Search for a country..." className={`filter-input ${darkMode && "filter-input-dark"}`} value={filter} onChange={filterChange} />
            <select className={`region-selector ${darkMode && "region-selector-dark"}`} name="region-selector" id="region" onChange={regionChange}>
            <option defaultValue="Select By Region" disabled selected>Select by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceana">Oceana</option>
            </select>
        </div>
    )
};