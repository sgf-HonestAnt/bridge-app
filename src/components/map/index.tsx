// page.js
"use client";
import Map, { Popup } from "react-map-gl";
import styles from "./style.module.css";

type MapBoxProps = {
  lat: number;
  lng: number;
  name: string;
};

const MapBox: React.FC<MapBoxProps> = ({ lat, lng, name }) => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";

  return (
    <div className={styles.mainStyle}>
      <Map
        style={{
          maxWidth: "100%",
          height: "300px",
        }}
        mapboxAccessToken={mapboxToken}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        initialViewState={{
          latitude: lat ?? 35.668641,
          longitude: lng ?? 139.750567,
          zoom: 15,
        }}
        maxZoom={22}
        minZoom={10}>
        <Popup offset={25} latitude={lat} longitude={lng} closeButton={false}>
          <h3 className={styles.popupTitle}>{name}</h3>
        </Popup>
      </Map>
    </div>
  );
};

export default MapBox;
