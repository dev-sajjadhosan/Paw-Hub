"use client";

import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Input } from "@/components/ui/input";
import { MapPin, MapPinned } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";

export default function SearchMap() {
  const [petLocation, setPetLocation] = useState<[number, number]>([
    40.785091, -73.968285,
  ]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );
    const data = await res.json();
    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      setPetLocation([lat, lon]);
    }
    setLoading(false);
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPetLocation([latitude, longitude]);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
        alert("Unable to get your location");
      },
      { enableHighAccuracy: true }
    );
  };

  // This component moves the map whenever petLocation changes
  function RecenterMap() {
    const map = useMap();
    useEffect(() => {
      map.setView(petLocation, 15, { animate: true });
    }, [petLocation, map]);
    return null;
  }

  function MapEvents() {
    useMapEvents({
      load: () => setLoading(false),
    });
    return null;
  }

  return (
    <div
      className="p-5 w-full border rounded-lg relative"
      style={{ height: "400px" }}
    >
      {/* Search Input */}
      <div className="absolute bottom-4 left-4 z-[1000] pointer-events-auto">
        <div className="flex items-center gap-1 bg-primary-foreground px-5 py-1 w-md rounded-md">
          <MapPin className="size-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search location..."
            className="bg-transparent! border-0"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Separator orientation="vertical" className="h-5!" />
          <TooltipBtn
            label="My Location"
            icon={MapPinned}
            align="start"
            side="left"
            action={handleMyLocation} // call the function when clicked
          />
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
        </div>
      )}

      {/* Map */}
      <MapContainer
        center={petLocation}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        whenReady={() => setLoading(false)}
      >
        <MapEvents />
        <RecenterMap />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={petLocation}
          draggable
          eventHandlers={{
            dragend: (e) => {
              const marker = e.target;
              const pos = marker.getLatLng();
              setPetLocation([pos.lat, pos.lng]);
            },
          }}
        />
      </MapContainer>
    </div>
  );
}
