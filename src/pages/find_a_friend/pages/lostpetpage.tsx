"use client";

import { useState } from "react";
import GoBack from "@/components/custom_ui/goback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, MapPin, Trash2, Bone } from "lucide-react";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
// import { MapContainer, Marker, TileLayer } from "react-leaflet";
import SearchMap from "../components/search-map";

export default function LostPetPage() {
  const [photo, setPhoto] = useState<File | null>(null);
  // const [petLocation, setPetLocation] = useState<[number, number]>([
  //   40.785091, -73.968285,
  // ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission here, e.g., upload photo + details to backend
    console.log(photo);
  };

  return (
    <div className="p-7">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <GoBack />
        <Button>Lost Pet Page</Button>
      </div>

      {/* Form */}
      <div className="mt-9">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-7">
            {/* Upload Photo */}
            <div className="p-5">
              {photo ? (
                <div className="w-full md:w-md h-60 flex flex-col items-center border border-dashed rounded-lg p-2.5">
                  <img
                    src={photo ? URL.createObjectURL(photo) : ""}
                    alt=""
                    className="w-fit h-60 object-contain"
                  />
                  <TooltipBtn
                    className="mx-auto bg-transparent!"
                    icon={Trash2}
                    label="Remove"
                    side="left"
                    action={() => setPhoto(null)}
                  />
                </div>
              ) : (
                <Label
                  htmlFor="photo"
                  className="p-5 w-full md:w-md h-60 rounded-lg border border-dashed border-zinc-600 flex flex-col items-center justify-center cursor-pointer duration-200 active:scale-95 text-muted-foreground"
                >
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                    className="cursor-pointer"
                  />
                  <Upload className="size-6" />
                  <p className="text-sm">Upload Pet Picture</p>
                </Label>
              )}
            </div>
            <div className="w-full">
              <SearchMap />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Pet Name</Label>
            <div className="flex items-center bg-primary-foreground px-3.5 rounded-md">
              <Bone className="h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                type="text"
                placeholder="pet name"
                className="bg-transparent! border-0"
              />
            </div>
          </div>
          {/* Pet Details */}
          <div className="space-y-2">
            <Label htmlFor="details">Pet Details</Label>
            <Textarea
              id="details"
              rows={5}
              placeholder="Describe the pet (breed, color, special marks, etc.)"
              className="resize-none border-0"
            />
          </div>

          {/* Last Seen Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Last Seen Location</Label>
            <div className="flex items-center bg-primary-foreground px-3.5 rounded-md">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                type="text"
                placeholder="Enter location where pet was found"
                className="bg-transparent! border-0"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-fit mx-auto">
            Report Lost Pet
          </Button>
        </form>
      </div>
    </div>
  );
}
