import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
  PawPrint,
  Palette,
  Dog,
  Bird,
  Rabbit,
  Skull,
  Baby,
  Ruler,
  MapPin,
  Nfc,
  SlidersHorizontal,
} from "lucide-react";

export default function FilterBy() {
  // Define filter categories + options in one place
  const filterOptions = [
    {
      label: "Species",
      icon: PawPrint,
      options: ["Cat", "Dog", "Bird", "Rabbit", "Snake", "Panda"],
    },
    {
      label: "Colors",
      icon: Palette,
      options: ["Black", "White", "Brown", "Gray", "Golden", "Mixed"],
    },
    {
      label: "Breed",
      icon: Dog,
      options: ["Bulldog", "Persian", "Parrot", "Lop", "Python", "Red Panda"],
    },
    {
      label: "Age",
      icon: Baby,
      options: ["Puppy/Kitten", "Young", "Adult", "Senior"],
    },
    {
      label: "Size",
      icon: Ruler,
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
    {
      label: "Location",
      icon: MapPin,
      options: [
        "Nearby",
        "Dhaka",
        "Chittagong",
        "Khulna",
        "Sylhet",
        "Rajshahi",
      ],
    },
  ];

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button> <SlidersHorizontal /> Filter by</Button>
      </DrawerTrigger>
      <DrawerContent className="p-5">
        <DrawerHeader>
          <DrawerTitle>Filter your pet</DrawerTitle>
        </DrawerHeader>
        <Separator />
        <div className="mt-3 space-y-6 overflow-y-scroll">
          {filterOptions.map((filter, i) => {
            const Icon = filter.icon;
            return (
              <div key={i} className="flex flex-col gap-2">
                <h3 className="font-normal text-muted-foreground flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </h3>
                <div className="flex items-center flex-wrap gap-2">
                  {filter.options.map((opt, idx) => (
                    <Button key={idx} size="sm" variant="outline">
                      {opt}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="my-5">
            <Button>
              Find on Nearby
              <Nfc />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
