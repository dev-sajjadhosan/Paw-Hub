import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLocalStore } from "@/store/useLocalStore";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Pause,
  Play,
  Plus,
  SmilePlus,
} from "lucide-react";
import cat from "../../../assets/cat.png";

import MoreOptionDropdown from "./shared/more-options";
import CardActions from "./shared/card-actions";
import { useRef, useState } from "react";

export default function PetViewDialog() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const { petViewDialog, setPetViewDialog } = useLocalStore();
  // Change type to allow both "image" and "video"
  let typeaa = "video";

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Pause all other videos
    video.pause();

    // Play/pause current
    if (!playing) {
      video.play();
      setPlaying(!playing);
    } else {
      video.pause();
      setPlaying(!playing);
    }
  };

  return (
    <>
      <Dialog
        open={petViewDialog}
        onOpenChange={() => setPetViewDialog(!petViewDialog)}
      >
        <DialogContent className="flex flex-col md:flex-row gap-9 p-7 md:w-5xl h-full md:h-[35rem] overflow-y-auto">
          <div className="w-full md:w-xl lg:w-3xl flex flex-col gap-5">
            <div className="bg-secondary p-1 h-full rounded-lg flex items-center justify-center">
              {typeaa === "image" ? (
                <img src={cat} alt="" />
              ) : (
                <video src="/demo.mp4" className="rounded-md" ref={videoRef} />
              )}
            </div>
            <div className="w-full flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <TooltipBtn side="left" icon={ArrowBigLeft} label="Left" />
                <TooltipBtn
                  icon={playing ? Pause : Play}
                  label={playing ? "Pause" : "Play"}
                  variant="default"
                  action={togglePlay}
                />
                <TooltipBtn side="right" icon={ArrowBigRight} label="Right" />
              </div>
              <CardActions isRow={true} side="top" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <Avatar className="w-9 h-9">
                  <AvatarImage src="logo.png" />
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="text-xs">The TV Me</h1>
                  <h3 className="text-[10px]">the_tv_me</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size={"sm"}>
                  <Plus /> Follow
                </Button>
                <MoreOptionDropdown />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-1.5 overflow-y-scroll py-1.5">
              <div className="flex items-start gap-2.5">
                <Avatar className="w-9 h-9">
                  <AvatarFallback>TTM</AvatarFallback>
                </Avatar>
                <p className="text-sm mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, corrupti ad fugit labore, aperiam tempore ipsa
                  magnam odit assumenda voluptatibus dolorem asperiores
                  excepturi. Autem, quas facere provident rerum iste vero. Totam
                  nihil aliquid dolorem quas provident commodi dignissimos
                  mollitia corrupti excepturi iusto itaque quam ipsum dolorum,
                  voluptate a facere reiciendis.Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Provident, corrupti ad fugit
                  labore, aperiam tempore ipsa magnam odit assumenda
                  voluptatibus dolorem asperiores excepturi. Autem, quas facere
                  provident rerum iste vero. Totam nihil aliquid dolorem quas
                  provident commodi dignissimos mollitia corrupti excepturi
                  iusto itaque quam ipsum dolorum, voluptate a facere
                  reiciendis.Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Provident, corrupti ad fugit labore, aperiam tempore
                  ipsa magnam odit assumenda voluptatibus dolorem asperiores
                  excepturi. Autem, quas facere provident rerum iste vero. Totam
                  nihil aliquid dolorem quas provident commodi dignissimos
                  mollitia corrupti excepturi iusto itaque quam ipsum dolorum,
                  voluptate a facere reiciendis.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 mt-3 px-5">
                <button className="text-xs capitalize duration-200 active:scale-95 cursor-pointer">
                  see translation
                </button>
                <span className="text-xs bg-secondary px-3 py-0.5 rounded-sm text-muted-foreground">
                  1 week ago
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-end gap-3 text-muted-foreground">
                <span className="text-sm">120 Likes</span>
                <Separator orientation="vertical" className="h-3!" />
                <span className="text-sm">100 Comments</span>
              </div>
              <div className="bg-secondary px-1 py-0.5 flex items-center rounded-md">
                <TooltipBtn
                  label="icon"
                  icon={SmilePlus}
                  className="[&_svg]:size-5! text-muted-foreground"
                />
                <Separator orientation="vertical" className="h-5!" />
                <Input
                  placeholder="add a comment..."
                  className="bg-transparent! border-0"
                />
                <button className="text-sm px-3 active:scale-95 cursor-pointer">
                  Post
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
