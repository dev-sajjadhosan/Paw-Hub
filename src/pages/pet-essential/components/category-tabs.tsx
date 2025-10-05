import { Button } from "@/components/ui/button";
import useHorizontalSrcoll from "@/hooks/useHorizontalScroll";
import { useState } from "react";

const categories = [
  "food",
  "grooming",
  "toys",
  "accessories",
  "other",
  "supplies",
  "health",
  "training",
  "vet",
  "other",
  "food",
  "grooming",
  "toys",
  "accessories",
  "other",
  "supplies",
  "health",
  "training",
  "vet",
  "other",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("food");
  const scrollRef = useHorizontalSrcoll<HTMLDivElement>();

  return (
    <div
      className="flex items-center gap-4 mb-6 w-11/12 overflow-x-scroll py-5 mx-auto"
      ref={scrollRef}
    >
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={() => setActive(cat)}
          className="capitalize"
          variant={cat === active ? "default" : "secondary"}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
