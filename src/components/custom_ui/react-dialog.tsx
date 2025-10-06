import {
  Angry,
  Annoyed,
  Laugh,
  Smile,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import TooltipBtn from "./tooltipBtn";

export default function ReactDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>
            <ThumbsUp /> Like
          </Button>
        </DialogTrigger>
        <DialogContent className="p-5 w-xs bg-transparent! flex flex-row items-center gap-3">
          <TooltipBtn icon={ThumbsUp} label="Like" />
          <TooltipBtn icon={ThumbsDown} label="UnLike" />
          <TooltipBtn icon={Smile} label="Happy" />
          <TooltipBtn icon={Angry} label="Angry" />
          <TooltipBtn icon={Annoyed} label="Sad" />
          <TooltipBtn icon={Laugh} label="HaHa" />
        </DialogContent>
      </Dialog>
    </>
  );
}
