import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handelVisitedFlags = (flag) => {
    // console.log("click flag", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const handelVisitedCountries = (country) => {
    console.log("Click visited Country click", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>My Visited Countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <h3>Total Visited Flag: {visitedFlags.length}</h3>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="Countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
            handelVisitedFlags={handelVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
