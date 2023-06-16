import React, { useEffect, useState } from "react";
import "./Covid.css";

export const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h4 className="d-flex justify-content-center">🔴 LIVE</h4>
      <h2 className="d-flex justify-content-center">
        COVID-19 CORONAVIROUS TRACKER
      </h2>
      <div className="container crd  d-flex flex-wrap justify-content-around">
        <div className="card1">
          <h4>
            <span>our</span> COUNTRY
          </h4>
          <h1>INDIA</h1>
        </div>
        <div className="card1">
          <h4>
            <span>TOTAL</span> RECOVERED
          </h4>
          <h1>{data.recovered}</h1>
        </div>
        <div className="card1">
          <h4>
            <span>TOTAL</span> CONFIRMED
          </h4>
          <h1>{data.confirmed}</h1>
        </div>
        <div className="card1">
          <h4>
            <span>TOTAL</span> DEATHS
          </h4>
          <h1>{data.deaths}</h1>
        </div>
        <div className="card1">
          <h4>
            <span>TOTAL</span> ACTIVE
          </h4>
          <h1>{data.active}</h1>
        </div>
        <div className="card1">
          <h4>
            <span>TOTAL</span> UPDATED
          </h4>
          <h1>{data.lastupdatedtime}</h1>
        </div>
      </div>
    </>
  );
};
