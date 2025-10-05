"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";
import { TbFilter } from "react-icons/tb";

export default function CategoryDrawer() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([10, 200]);

  // 🧩 Grouped categories
  const categories = [
    {
      title: "Food & Nutrition",
      items: ["Dry Food", "Wet Food", "Treats"],
    },
    {
      title: "Grooming & Hygiene",
      items: ["Shampoo", "Conditioner", "Brushes", "Wipes"],
    },
    {
      title: "Accessories",
      items: ["Collars", "Leashes", "Beds", "Carriers"],
    },
    {
      title: "Health & Medicine",
      items: ["Vitamins", "Flea Spray", "First Aid"],
    },
    {
      title: "Toys & Fun",
      items: ["Chew Toys", "Balls", "Ropes", "Interactive Toys"],
    },
  ];

  const sizes = ["Small", "Medium", "Large"];
  const petTypes = ["Dog", "Cat", "Bird", "Fish", "Rabbit", "Other"];
  const ratingOptions = [5, 4, 3, 2, 1];

  const toggleSelection = (
    list: string[] | number[],
    setList: any,
    item: string | number
  ) => {
    if ((list as (string | number)[]).includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const applyFilters = () => {
    console.log({
      categories: selectedCategories,
      sizes: selectedSizes,
      pets: selectedPets,
      ratings: selectedRatings,
      priceRange,
    });
  };

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="secondary">
          <TbFilter /> Filter
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-6 w-[320px] rounded-r-2xl overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-semibold">
            Filter Products
          </DrawerTitle>
        </DrawerHeader>

        {/* 🐾 Pet Type */}
        <section className="mt-4">
          <h3 className="text-md font-normal mb-3">Pet Type</h3>
          <div className="flex flex-wrap gap-3">
            {petTypes.map((pet) => (
              <Label
                key={pet}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedPets.includes(pet)}
                  onCheckedChange={() =>
                    toggleSelection(selectedPets, setSelectedPets, pet)
                  }
                />
                {pet}
              </Label>
            ))}
          </div>
        </section>

        {/* 🧩 Grouped Categories */}
        <section className="mt-6 border-b pb-4">
          <h3 className="text-lg font-normal mb-3">Category</h3>
          <div className="space-y-6">
            {categories.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-normal text-muted-foreground mb-2">
                  {group.title}
                </h4>
                <div className="flex items-center flex-wrap gap-3 pl-2">
                  {group.items.map((item) => (
                    <Label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer text-primary!"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(item)}
                        onCheckedChange={() =>
                          toggleSelection(
                            selectedCategories,
                            setSelectedCategories,
                            item
                          )
                        }
                      />
                      {item}
                    </Label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🧥 Sizes */}
        <section className="mt-6 border-b pb-4">
          <h3 className="text-lg font-medium mb-3">Size</h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((sz) => (
              <Label
                key={sz}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedSizes.includes(sz)}
                  onCheckedChange={() =>
                    toggleSelection(selectedSizes, setSelectedSizes, sz)
                  }
                />
                {sz}
              </Label>
            ))}
          </div>
        </section>

        {/* 💰 Price Range */}
        <section className="mt-6 border-b pb-4">
          <h3 className="text-lg font-medium mb-3">Price Range</h3>
          <Slider
            defaultValue={priceRange}
            min={0}
            max={500}
            step={10}
            onValueChange={setPriceRange}
          />
          <p className="text-sm text-gray-600 mt-2">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </section>

        {/* ⭐ Ratings */}
        <section className="mt-6 border-b pb-4">
          <h3 className="text-lg font-medium mb-3">Ratings</h3>
          <div className="flex items-center flex-wrap gap-5">
            {ratingOptions.map((stars) => (
              <Label
                key={stars}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedRatings.includes(stars)}
                  onCheckedChange={() =>
                    toggleSelection(selectedRatings, setSelectedRatings, stars)
                  }
                />
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </Label>
            ))}
          </div>
        </section>

        {/* ✅ Footer */}
        <DrawerFooter className="mt-3 flex-row gap-5">
          <Button onClick={applyFilters}>Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant="secondary">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
