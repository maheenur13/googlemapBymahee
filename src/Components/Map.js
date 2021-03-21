import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }
  
const position = {
  lat: 22.944562,
  lng: 90.828151
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCeeyirgoZ03LBIVUIpws_xNSVzlIQouUY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
        <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)