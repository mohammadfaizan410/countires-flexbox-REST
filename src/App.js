import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBar from './components/AppBar';
import Filter from './components/filterCountries';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
function App() {
  
  const [region, setRegion] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState(null);
  const [countryDetails, setCountryDetails] = React.useState(null);
  
  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data)
      });
  },[]);

  React.useEffect(() => {
    
    if(filter === "") {
      setFilteredCountries(null);
    }
    else {
      setFilteredCountries(countries.filter((country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase())
      }))
    }

  },[filter])

  React.useEffect(() => {
    if(region === "") {
      setFilteredCountries(null);
    }
    else {
      setFilteredCountries(countries.filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase())
      }))
    }
  },[region])



  return (
    <div className={`App ${darkMode && "App-darkmode"}`}>
      <AppBar darkMode={darkMode} darkModeToggle={() => setDarkMode(!darkMode)} />
      { countryDetails !== null ? 
          <div className={`main-content-single-country ${darkMode && "main-content-single-country-dark"}`}>
            <button className={`back-button ${darkMode && "back-button-dark"}`} onClick={() => setCountryDetails(null)}>Back</button>
            <CountryDetails country={countryDetails} darkMode={darkMode} />
          </div>

          :
      <div className={`main-content ${darkMode && "main-content-dark"}`}>
          <Filter  darkMode={darkMode} filterChange={(e) => filterChange(e)} regionChange={(e) => regionChange(e)} />
          <div className='country-list-wrapper'> 
          {filteredCountries !==null ?  
            filteredCountries.map((country) => {
              return (
                <CountryCard country={country} darkMode={darkMode} setCountryDetails={() => setCountryDetails(country)} />
                );
              })
              
              : countries.map((country) => {
                return (
                  <CountryCard country={country} darkMode={darkMode}  setCountryDetails={() => setCountryDetails(country)}/>
                  );
                })}
            </div>
      </div>
              }
    </div>
  );
  
  function filterChange(e) {
    setFilter(e.target.value);
  };
  function regionChange(e) {
   setRegion(e.target.value);
  };

}

export default App;
