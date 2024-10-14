"use client";
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png'
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
    return (
        <MapContainer
            className=" w-full h-72 lg:h-full rounded-lg z-20"
            center={[36.53873048, 52.67635198]}
            zoom={14}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[36.53873048, 52.67635198]}>
                <Popup className=" font-bold">الکتروشاپ</Popup>
            </Marker>
        </MapContainer>
    )
}
