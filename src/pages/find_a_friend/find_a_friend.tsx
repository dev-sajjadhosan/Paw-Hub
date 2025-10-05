import SearchBox from "@/components/custom/searchbox";
import { Button } from "@/components/ui/button";

import {  Loader, Plus, Sparkles } from "lucide-react";
import FilterBy from "./components/filterBy";
import PetProfileCard from "@/components/custom/petProfileCard";
import GoBack from "@/components/custom_ui/goback";

export default function FindAFriend() {
  return (
    <>
      <div className="flex flex-col p-7 w-full">
        <div className="flex items-center justify-between w-full">
          <GoBack />
          <div className="flex items-center gap-2.5">
            <FilterBy />
            <Button variant={"secondary"}>
              {" "}
              <Plus /> Add Species
            </Button>
            <Button variant={"secondary"}>
              {" "}
              <Sparkles /> AI Finder
            </Button>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="text-3xl text-center">Find Your Buddy</h3>
          <SearchBox label={false} />
        </div>
        <section className="mt-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {Array.from({ length: 10 }).map((_, i) => (
              <PetProfileCard key={i} />
            ))}
          </div>
          <span className="bg-primary text-primary-foreground flex items-center gap-2 justify-center mt-10 rounded-md w-full max-w-sm mx-auto py-3 cursor-pointer">
            <Loader size={21} className="animate-spin" /> Lode More...
          </span>
        </section>
      </div>
    </>
  );
}
