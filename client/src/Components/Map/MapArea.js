import React from 'react'
import { Loader } from "@googlemaps/js-api-loader"

// loader exposes a promise and callback interface
// default promise method is load

// const loader = new Loader({
//     apiKey: "YOUR_API_KEY",
//     version: "weekly",
//     ...additionalOptions,
//   });
//   loader.load().then(() => {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });

  const MapArea = () => {
      return(
          <div>
              <h1>GOOGLE MAP API</h1>
          </div>
      )
  }

export default MapArea