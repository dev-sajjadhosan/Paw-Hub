import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


import dog from '../../../assets/dog.png'

export default function FindYourBuddy() {
  return (
    <>
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
    </>
  );
}
