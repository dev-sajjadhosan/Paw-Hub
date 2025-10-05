import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useHorizontalSrcoll from "@/hooks/useHorizontalScroll";
import { MessageCirclePlus, PhoneOutgoing } from "lucide-react";

import person01 from "../../../assets/person-1.png";


export default function ExpreienceUsers() {
  const scrollRef = useHorizontalSrcoll<HTMLDivElement>();

  return (
    <>
      <div className="flex flex-col gap-3 w-11/12 mt-16">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl text-muted-foreground">
            Also Get Help from Our Expreience Persons
          </h3>
          <Select>
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
        </div>
        <div
          className="flex items-center gap-5 overflow-x-scroll p-5"
          ref={scrollRef}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i} className="shrink-0 w-72">
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge>0{i}</Badge>
                  <span className="p-1.5 rounded-full bg-red-600"></span>
                </div>
                <img src={person01} alt="" width={180} className="mx-auto" />
                <div className="flex flex-col gap-1 items-center w-full">
                  <div className="flex items-center justify-between w-full mt-2">
                    <h1 className="text-md font-normal">Jhon Deo</h1>
                    <Badge variant={"secondary"}>has Cat</Badge>
                  </div>
                  <p className="text-xs font-normal text-muted-foreground mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores dolore quae fugit
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button size={"sm"}>
                      <PhoneOutgoing /> Book a call
                    </Button>
                    <Button size={"sm"} variant={"secondary"}>
                      <MessageCirclePlus /> Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
