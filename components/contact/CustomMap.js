import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];

const CustomMap = () => {
  const locationMap = useRef(null);

  useEffect(() => {
    // const myMap = L.(locationMap.current).setView([0,0], 13);
    let myMap;
    if (locationMap.current) {
      myMap = L.map(locationMap.current).setView(position, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
        foo: "bar",
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(myMap);

      // 1] marker
      // L.marker(position).addTo(myMap);

      // 2] circle
      // L.circle(position, {
      //   color: "red",
      //   fillColor: "#f03",
      //   fillOpacity: 0.5,
      //   radius: 500,
      // }).addTo(myMap);

      // 3] popup
      // L.popup()
      //   .setLatLng([51.5, -0.09])
      //   .setContent("I am a standalone popup.")
      //   .openOn(myMap);

      // 4] click on map
      // function onMapClick(e) {
      //   alert("You clicked the map at " + e.latlng);
      // }

      // myMap.on("click", onMapClick);

      // 5] popup 2
      var popup = L.popup();

      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(myMap);
      }

      myMap.on("click", onMapClick);
    }

    // rest of your map code here

    return () => {
      myMap.remove();
    };
  }, [locationMap]);

  return (
    <div className="map-container">
      <div style={{ height: "350px" }} ref={locationMap} />
    </div>
  );
};

export default CustomMap;
