import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '100vh'
};


// किसी लोकेशन का latitude & longitude
const center = {
  lat: 26.7606,  // Gorakhpur के लिए
  lng: 83.3732
};


const MapAvatar = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBTsKsnsuCxRKn4YIXUo0TRTvWVMCOPoWM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker 
          position={center} 
          icon={{
            url: "https://em-content.zobj.net/source/apple/354/technologist_1f9d1-200d-1f4bb.png",  // कस्टम इमोजी (emoji image)
            scaledSize: { width: 80, height: 80 }
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapAvatar;
