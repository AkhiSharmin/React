import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handelVisitedCountries = (country) => {
    // console.log("Click visited Country click", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handelVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>

      <div className="Countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
            handelVisitedFlag={handelVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
