import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, ShoppingCart, Trash2 } from "lucide-react";
import img from "../../../assets/dog.png";

export default function WishlistCard({}: { item?: any }) {
  return (
    <>
      <Card className="w-fit">
        <CardContent className="relative">
          <div className="absolute -top-3 right-2 flex flex-col gap-1">
            <TooltipBtn icon={Trash2} label="remove" side="right" />
            <TooltipBtn icon={ShoppingCart} label="add to cart" side="right" />
            <TooltipBtn icon={Share2} label="Share" side="right" />
          </div>
          <img src={img} alt="" width={150} />
          <div className="flex items-center justify-between">
            <h3 className="text-sm">Kitty</h3>
            <span className="text-xs">3d ago</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
