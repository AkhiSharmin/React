import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country.population.population);
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    // option one
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // option two
    // setVisited(visited ? false : true);

    // option three
    setVisited(!visited);
  };

  return (
    // <div className={`country ${visited ? "country-visited" : "Not visited"}`}>

    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handelVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/***
 * 1. inline css (style object)
 * 2.
 */
