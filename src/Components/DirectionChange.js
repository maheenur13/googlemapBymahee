import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
};


const position = {
    lat: 22.944562,
    lng: 90.828151
};

function DirectionChange() {
    const [direction, setDirection] = useState(null);
    console.log(direction);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCeeyirgoZ03LBIVUIpws_xNSVzlIQouUY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={10}
            >
                <DirectionsService
                    // required
                    options={{
                        destination: "Mirpur-11 Dhaka Bangladesh",
                        origin: "Dhanmondi Dhaka Bangladesh",
                        travelMode: "DRIVING"
                    }}
                    // required
                    callback={res => {
                        if (res !== null) {
                            setDirection(res);
                        }
                    }}

                />
                {
                    direction && <DirectionsRenderer
                        // required
                        options={{
                            directions: direction
                        }}

                    />
                    }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(DirectionChange)