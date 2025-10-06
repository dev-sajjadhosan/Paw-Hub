import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";
import bird from "../../assets/bird.png";
import rabbit from "../../assets/rabbit.png";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, PawPrint, Share2, ShoppingBasket } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Link } from "react-router";
import SearchBox from "@/components/custom/searchbox";
import Footer from "./components/footer";
import PetCommunity from "./components/community";
import SeeLostFoundPet from "./components/see-lost-found-pets";
import FindYourBuddy from "./components/find-your-buddy";

const posts = [
  { id: 1, title: "How I trained my cat in 7 days", views: 1200, likes: 320 },
  { id: 2, title: "Top 10 dog toys in 2025", views: 980, likes: 210 },
  { id: 2, title: "Top 10 dog toys in 2025", views: 980, likes: 210 },
  { id: 2, title: "Top 10 dog toys in 2025", views: 980, likes: 210 },
  {
    id: 3,
    title: "Why parrots are smarter than you think",
    views: 760,
    likes: 150,
  },
];

export default function Home() {
  return (
    <>
      {/* ----------------------------------- */}
      <div className="flex flex-col h-full">
        <section className="w-11/12 h-[33rem] mt-14 mx-auto relative">
          <Avatar className="w-72 h-72 absolute left-0 -bottom-3">
            <AvatarImage src={cat} />
          </Avatar>
          <Avatar className="w-64 h-64 absolute right-0 bottom-0">
            <AvatarImage src={dog} />
          </Avatar>
          <Avatar className="w-32 h-32 absolute right-32 top-5">
            <AvatarImage src={bird} />
          </Avatar>
          <Avatar className="w-64 h-64 absolute hidden">
            <AvatarImage src={rabbit} />
          </Avatar>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="text-7xl flex items-center gap-2 justify-center mb-3">
              Paw
              <img src="/logo.png" alt="" width={100} />
              Hub
            </h1>
            {/* <h1 className="text-5xl font-semibold mb-2">PawHub</h1> */}
            <div className="">
              <p className="text-lg font-light">
                — your all-in-one platform for pets. Adopt, find lost pets, get
                care tips, and shop supplies, all in a safe, caring community
                where pets and owners thrive.
              </p>
              <div className="mt-5 space-x-3">
                <Link to={"/find-a-friend"}>
                  <Button>
                    <PawPrint /> Find a Friend
                  </Button>
                </Link>
                <Link to={"/pet-essentials"}>
                  <Button variant={"ghost"}>
                    <ShoppingBasket /> Shop Pet Supplies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-24">
          <SearchBox />
        </div>
        <FindYourBuddy />
        <SeeLostFoundPet />
        <PetCommunity posts={posts} />
        <Footer />
      </div>
    </>
  );
}
