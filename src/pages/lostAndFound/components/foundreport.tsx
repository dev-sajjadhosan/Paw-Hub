"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, Upload, MapPin, Trash2 } from "lucide-react";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";

export default function FoundReport() {
  const [photo, setPhoto] = useState<File | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex items-center gap-2">
          <FileText /> Found Report
        </Button>
      </DialogTrigger>

      <DialogContent className="w-3xl">
        <DialogHeader>
          <DialogTitle>Report Found Pet</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 flex items-center">
          {/* Upload Photo */}
          <div className="p-5">
            {photo ? (
              <div className="w-60 h-60 flex flex-col items-center border border-dashed rounded-lg p-2.5">
                <img
                  src={photo ? URL.createObjectURL(photo) : ""}
                  alt=""
                  className="object-contain"
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
                className="p-5 w-60 h-52 rounded-lg border border-dashed border-zinc-600 flex flex-col items-center justify-center cursor-pointer duration-200 active:scale-95 text-muted-foreground"
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

          {/* Pet Details */}
          <div className="flex flex-col gap-3 w-full">
            <div className="space-y-2">
              <Label htmlFor="location">Found Location</Label>
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
            <div className="space-y-2">
              <Label htmlFor="details">Pet Health Condition</Label>
              <Textarea
                id="details"
                rows={5}
                placeholder="Describe the pet (breed, color, special marks, etc.)"
                className="resize-none border-0"
              />
            </div>

            {/* Found Location */}

            {/* Submit Button */}
            <Button className="w-full mt-2">Submit Report</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
