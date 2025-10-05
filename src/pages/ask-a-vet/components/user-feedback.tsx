import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useHorizontalSrcoll from "@/hooks/useHorizontalScroll";

export default function UserFeedbacks() {
  const scrollRef = useHorizontalSrcoll<HTMLDivElement>();
  return (
    <>
      <div className="mt-20 flex flex-col gap-1 w-11/12 mx-auto">
        <h3 className="text-xl text-muted-foreground">Get help from us</h3>
        <div
          className="flex items-center gap-5 overflow-x-scroll p-5"
          ref={scrollRef}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Card className="border-0 w-lg shrink-0" key={i}>
              <CardContent>
                <p className="text-xs font-light tracking-wide">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, quidem dolores rerum est fugit cum deserunt
                  exercitationem veritatis eos blanditiis consequatur laborum
                  voluptas ad debitis minus autem sint maiores numquam!
                </p>
                <CardFooter className="mt-3 p-0 justify-between text-muted-foreground!">
                  <div className="flex items-center gap-1.5">
                    <Avatar className="w-9 h-9 border p-1">
                      <AvatarImage src="/logo.png" />
                    </Avatar>
                    <h1 className="text-sm">Jhon Deo</h1>
                  </div>
                  <Badge variant={"secondary"} className="font-light!">
                    18 hours ago
                  </Badge>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
