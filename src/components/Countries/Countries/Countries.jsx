import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handelVisitedCountries = (country) => {
    console.log("handel visited country clicked", country);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h2>Total Country Visited: </h2>
      <div className="Countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
