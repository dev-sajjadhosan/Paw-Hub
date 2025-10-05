import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { useLocalStore } from "@/store/useLocalStore";
import { Heart, MessageCircleMore, Share2 } from "lucide-react";

export default function CardActions({
  className,
  isRow = false,
  side = "left",
}: {
  className?: string;
  isRow?: boolean;
  side?: "left" | "right" | "top" | "bottom";
}) {
  const {
    setPetCommnetDialog,
    petShareDialog,
    setPetShareDialog,
    petCommentDialog,
  } = useLocalStore();
  return (
    <>
      <div
        className={`${className} flex ${
          isRow ? "flex-row" : "flex-col"
        } items-center gap-1.5`}
      >
        <TooltipBtn icon={Heart} label="like" side={side} />
        <TooltipBtn
          icon={MessageCircleMore}
          label="Comments"
          side={side}
          action={() => setPetCommnetDialog(!petCommentDialog)}
        />
        <TooltipBtn
          icon={Share2}
          label="Share"
          side={side}
          action={() => setPetShareDialog(!petShareDialog)}
        />
      </div>
    </>
  );
}
