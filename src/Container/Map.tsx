import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
    
    const [lat, setLat] = useState(37.401579);
    const [lng, setLng] = useState(126.966115);

    navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
    })
    
    return (
        <div className="Map">
            <MapContainer
            style={{position:'absolute', width:'100%', height:'100vh', zIndex:-10}}
            // center={[37.401586,126.966043]}
            center={[lat,lng]}
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