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
                <Button>
                  <PawPrint /> Find a Friend
                </Button>
                <Button variant={"ghost"}>
                  <ShoppingBasket /> Shop Pet Supplies
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-24">
          <SearchBox />
        </div>
        <section className="mt-24 w-11/12 mx-auto">
          <h3 className="text-2xl mb-7 text-center">Find your buddy</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="hover:scale-95 transition-all duration-200 cursor-pointer group">
                      <CardContent className="flex flex-col aspect-square">
                        <div className="flex items-center justify-between gap-2">
                          <Badge variant={"secondary"}>
                            {index <= 9 ? "0" + index : index}
                          </Badge>
                          <Badge>Cat</Badge>
                        </div>
                        <img
                          src={dog}
                          alt=""
                          className=" transition-all duration-200 group-hover:scale-110"
                        />
                        <h3 className="text-xl text-muted-foreground mb-2.5">
                          Hey, I am Kitty
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </section>
        <section className="mt-24 w-11/12 mx-auto">
          <h3 className="text-2xl text-center">See Lost || Founds Pets</h3>
          <div className="mt-7">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 15 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/1 lg:basis-1/2"
                  >
                    <div className="p-1">
                      <Card className="h-72 transition-all duration-200 cursor-pointer">
                        <CardContent className="flex aspect-square">
                          <img src={dog} alt="" className="w-64 h-64" />
                          <Separator
                            orientation="vertical"
                            className="h-60! mr-5"
                          />
                          <div className="flex flex-col gap-0.5 w-full text-muted-foreground">
                            <Badge>Lost Pet</Badge>
                            <h3 className="text-xl mt-2.5">Name : Kitty</h3>
                            <p className="text-md">Color: Brown & Black</p>
                            <p className="text-md">Age: 02 years</p>

                            <Separator className="my-1 mt-3" />
                            <p className="text-md">Contact: 017XXXXXXXX</p>
                            <p className="text-md">
                              Lost: Nilphamari Boro Math
                            </p>
                            <div className="flex items-center justify-end gap-2.5 mt-5">
                              <Button variant={"ghost"}>Details</Button>
                              <Button>Contact</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="mt-24 w-11/12 mx-auto">
          <h3 className="text-2xl text-center">Pet Community</h3>
          <div className="mt-7 grid grid-cols-2 gap-5">
            <Card className="">
              <CardContent>
                <img src={dog} alt="" />
                <p className="">Meet Bella, the most playful pup!</p>
              </CardContent>
            </Card>
            <div className="flex flex-col gap-7">
              <h3 className="text-xl flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">Today</span> ... Trending Posts
              </h3>

              <ul className="space-y-3">
                {posts.slice(0, 5)?.map((post, index) => (
                  <li key={post.id}>
                    <Link
                      to={`/post/${post.id}`}
                      className="flex items-center gap-3 rounded-lg p-3 hover:bg-stone-700 transition"
                    >
                      <div className="w-15 h-15 flex items-center justify-center bg-secondary text-primary rounded-lg font-normal">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium">
                          {post.title}
                        </p>
                        <span className="text-gray-500 text-sm">
                          {post.views.toLocaleString()} views · {post.likes}{" "}
                          likes
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <TooltipBtn
                          label="Save"
                          icon={BookmarkPlus}
                          size="icon"
                        />
                        <TooltipBtn label="Share" icon={Share2} size="icon" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="mx-auto">View all</Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
