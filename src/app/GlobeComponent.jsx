"use client"
import React, { useReducer, useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as XLSX from 'xlsx';
import { countries } from "./countries";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const initialState = "unloaded";

function reducer(state, action) {
  switch (action.type) {
    case "load":
      return "loaded";
    default:
      return state;
  }
}

function GlobeComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [places, setPlaces] = useState([]);
  const [arcs, setArcs] = useState();
  const constantaLocation = {
    lat: 44.179249, 
    lng: 28.649940, 
    size: 1.5, 
    city: 'Constanta, Romania', 
    markerType: 'flag'
  };

  const initialCameraPosition = {
    latitude: constantaLocation.lat,
    longitude: constantaLocation.lng,
    zoom: 1, 
    markerType: 'flag',
    angle: 0,
  };

  function generateRandomArcs(citiesData, numberOfArcs, numberOfCitiesToConnect) {
    const randomArcs = [];
    for (let i = 0; i < numberOfArcs; i++) {
      const randomStartCity = citiesData[Math.floor(Math.random() * citiesData.length)];
      const randomEndCities = [];
      for (let j = 0; j < numberOfCitiesToConnect; j++) {
        const randomEndCity = citiesData[Math.floor(Math.random() * citiesData.length)];
        randomEndCities.push(randomEndCity);
      }
  
      randomEndCities.forEach((randomEndCity) => {
        randomArcs.push({
          startlat: randomStartCity.lat,
          startlng: randomStartCity.lng,
          endlat: randomEndCity.lat,
          endlng: randomEndCity.lng,
          label: `Random Arc ${i}`,
        });
      });
    }
    return randomArcs;
  }

  const fetchData = async () => {
    try {
      let response = await fetch("/datasets/worldcities.xlsx");
      let arrayBuffer = await response.arrayBuffer();
      return { success: true, data: arrayBuffer };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }

  useEffect(() => {
    (async () => {
      if (state === "unloaded") {
        let res = await fetchData();
        if (res.success) {
          const wb = XLSX.read(res.data, { type: "array" });
          const wc = wb.Sheets["worldcities"];
          const arcs = wb.Sheets["transactions"];
          const wc_data = XLSX.utils.sheet_to_json(wc, { header: 1 });
          const arcs_data = XLSX.utils.sheet_to_json(arcs, { header: 1 });

          var lon_ = [];
          var lat_ = [];
          var pop = [];
          var cities = [];
          var places_ = [];
          wc_data.map((data) => {
            lon_.push(data[2]);
            lat_.push(data[1]);
            pop.push("0.25");
            cities.push(data[0]);
            return 1;
          });
          lon_.shift();
          lat_.shift();
          pop.shift();
          cities.shift();
          cities.forEach((city, index) => {
            places_.push({
              lat: lat_[index],
              lng: lon_[index],
              size: pop[index],
              city: city
            });
          });

          const numberOfRandomArcs = 3; // You can adjust the number of random arcs
          const numberOfCitiesToConnect = 3; // You can adjust the number of cities to connect to each arc
          const randomArcs = generateRandomArcs(places_, numberOfRandomArcs, numberOfCitiesToConnect);

          setArcs(randomArcs);
          setPlaces([...places, constantaLocation]);
          dispatch({ type: "load" });
          globeEl.current.pointOfView(initialCameraPosition);
        }
      } else if (state === "loaded") {
        // Handle the case when data is already loaded.
      }
    })();
  }, [state]);

  const globeEl = useRef();

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="/images/earth-night.jpg"
      // backgroundImageUrl="/images/night-sky.png"
      backgroundColor="rgba(0,0,0,0)"
      pointOfView={initialCameraPosition}
      arcsData={arcs}
      arcStartLat={(d) => +d.startlat}
      arcStartLng={(d) => +d.startlng}
      arcEndLat={(d) => +d.endlat}
      arcEndLng={(d) => +d.endlng}
      arcDashLength={0.25}
      arcDashGap={1}
      arcLabel={(d) => +d.label}
      arcDashInitialGap={() => Math.random()}
      arcDashAnimateTime={4000}
      arcColor={() => "#9cff00"}
      arcsTransitionDuration={0}
      pointsData={places.slice(0, 20000)}
      pointColor={() => "#FFFF00"}
      pointAltitude={0.01}
      pointLabel={"city"}
      pointRadius="size"
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={() => "rgba(255,255,255,1)"}
      showAtmosphere={true}
    />
  );
}

export default GlobeComponent;