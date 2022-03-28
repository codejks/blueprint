import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
    
    // const [lat, setLat] = useState(0);
    // const [lng, setLng] = useState(0);

    function location() {navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        return [lat,lng];
        })
    }

    return (
        <div className="Map">
            <MapContainer
            style={{position:'absolute', width:'100%', height:'100vh', zIndex:-10}}
            // center={[37.401586,126.966043]}
            center={location}
            zoom={16}
            zoomControl={false}
            dragging={true}
            doubleclickZoom={true}
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}