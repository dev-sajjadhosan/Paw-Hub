import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import dog from "../../../assets/dog.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SeeLostFoundPet() {
  return (
    <>
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
                          <p className="text-md">Lost: Nilphamari Boro Math</p>
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
    </>
  );
}
