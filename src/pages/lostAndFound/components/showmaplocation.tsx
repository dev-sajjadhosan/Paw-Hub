import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// ✅ Custom icon so the marker looks correct
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function ShowMapLocation() {
  // Example: Central Park, NY
  const lostLocation = { lat: 40.785091, lng: -73.968285 };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <MapPin className="h-4 w-4" /> Location
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden md:w-2xl">
        <MapContainer
          center={[lostLocation.lat, lostLocation.lng]}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          />
          <Marker
            position={[lostLocation.lat, lostLocation.lng]}
            icon={customIcon}
          >
            <Popup>
              <strong>Lost Pet Here!</strong> <br />
              Last seen around this spot.
            </Popup>
          </Marker>
        </MapContainer>
      </DialogContent>
    </Dialog>
  );
}
