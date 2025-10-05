import GoBack from "@/components/custom_ui/goback";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocalStore } from "@/store/useLocalStore";
import { FileText, MapPinPlus, MapPinX, ScanSearch } from "lucide-react";
import LostPetCard from "./components/lostpetcard";
import { Link } from "react-router";
import { useState } from "react";

import dogImage from "../../assets/dog.png";
import catImage from "../../assets/cat.png";
import birdImage from "../../assets/bird.png";
import rabbitImage from "../../assets/rabbit.png";

export default function LostAndFound() {
  const { LFPet, setLFPet } = useLocalStore();
  const [petCategory, setPetCategory] = useState("dog");
  return (
    <>
      <div className="flex flex-col p-7">
        <div className="flex items-center justify-between w-full">
          <GoBack />
          <div className="flex items-center gap-3">
            <Link to={"/lost-pet"}>
              <Button>
                <ScanSearch /> Lost My Pet
              </Button>
            </Link>
            <Button variant={"secondary"}>
              <FileText /> Report Lost Pet
            </Button>
          </div>
        </div>
        <div className="mt-9">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-normal">
              {LFPet === 0 ? "Lost" : "Found"} Pet
            </h1>
            <div className="flex items-center gap-2.5 bg-secondary px-7 py-1.5 rounded-md">
              <Button
                onClick={() => setLFPet(0)}
                // size={"sm"}
                className={`text-xs`}
                variant={LFPet === 0 ? "default" : "ghost"}
              >
                Losts Pet
                <MapPinX />
              </Button>
              <Button
                onClick={() => setLFPet(1)}
                // size={"sm"}
                className={`text-xs`}
                variant={LFPet === 1 ? "default" : "ghost"}
              >
                Founds Pet
                <MapPinPlus />
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <Select onValueChange={(s) => setPetCategory(s)}>
                <SelectTrigger className="w-[120px] border-0">
                  <SelectValue placeholder="Pet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat">Cat</SelectItem>
                  <SelectItem value="dog">Dog</SelectItem>
                  <SelectItem value="bird">Bird</SelectItem>
                  <SelectItem value="rabbit">Rabbit</SelectItem>
                  <SelectItem disabled value="coming_soon">
                    Coming Soon
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[150px] border-0">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AtoZ">A to Z</SelectItem>
                  <SelectItem value="atoz">a to z</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="time">Time</SelectItem>
                  <SelectItem disabled value="coming_soon">
                    Coming Soon
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-3 gap-5">
              {Array.from({ length: 10 }).map((_, i) => {
                const images = [catImage, dogImage, birdImage, rabbitImage];
                const randomImage =
                  images[Math.floor(Math.random() * images.length)];
                return (
                  <LostPetCard
                    key={i}
                    photo={randomImage}
                    name="Buddy"
                    details="Golden retriever, very friendly, last seen wearing a red collar."
                    lastSeen="Central Park, NYC"
                    contact="+1 234 567 890"
                    status="missing"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
