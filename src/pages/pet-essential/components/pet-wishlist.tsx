import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLocalStore } from "@/store/useLocalStore";
import { ArrowDownToDot, Trash2 } from "lucide-react";
import WishlistCard from "./wishlist-card";
import { Card, CardContent } from "@/components/ui/card";
import { TbDatabasePlus } from "react-icons/tb";
import EmptyCard from "@/components/custom/empty-card";

export default function PetWishlist() {
  const { petWishlist, setPetWishlist } = useLocalStore();
  const data = Array.from({ length: 0 });
  return (
    <>
      <Dialog
        open={petWishlist}
        onOpenChange={() => setPetWishlist(!petWishlist)}
      >
        <DialogContent className="p-5 w-3xl">
          <div className="flex items-center justify-between">
            <h3 className="">Pet Wishlist</h3>
            <div className="flex items-center gap-2">
              <Button size={"sm"} variant={"secondary"}>
                <Trash2 />
                Remove All
              </Button>
              <Button size={"sm"}>
                <ArrowDownToDot /> Export
              </Button>
            </div>
          </div>
          <div className="mt-3">
            {data.length <= 0 ? (
              <EmptyCard />
            ) : (
              <div className="mt-2 h-[30rem] overflow-x-auto flex flex-wrap gap-5 items-center justify-center">
                {data.map((_, i) => (
                  <WishlistCard key={i} item={i} />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
