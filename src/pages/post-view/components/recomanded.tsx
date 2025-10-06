import { Card, CardAction } from "@/components/ui/card";
import useHorizontalSrcoll from "@/hooks/useHorizontalScroll";

export default function Recomanded() {
  const scrollRef = useHorizontalSrcoll<HTMLDivElement>();
  return (
    <>
      <div className="w-11/12 mx-auto mt-16">
        <h3 className="text-xl">Recomanded Posts</h3>
        <div
          className="mt-1 flex items-center gap-7 overflow-x-scroll py-5"
          ref={scrollRef}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <Card className="w-lg h-[17rem] shrink-0" key={i}>
              <CardAction className="flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-xl">Card {i <= 9 ? "0" + i : i}</h3>
              </CardAction>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
