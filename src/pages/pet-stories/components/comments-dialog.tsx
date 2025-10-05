import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Heart, Loader } from "lucide-react";
import MoreOptionDropdown from "./shared/more-options";
import { useLocalStore } from "@/store/useLocalStore";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function CommentsDialog() {
  const { petCommentDialog, setPetCommnetDialog } = useLocalStore();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Dialog
        open={petCommentDialog}
        onOpenChange={(e) => setPetCommnetDialog(e)}
      >
        <DialogContent className="p-7 w-4xl h-[38rem]">
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
              {/* <Button size={"sm"}>
                <Plus /> Follow
              </Button> */}
              <MoreOptionDropdown />
            </div>
          </div>
          <div className="mt-7 overflow-hidden p-5">
            <ul
              className=" flex overflow-y-scroll flex-col gap-3 h-full"
              onScrollEnd={() => setIsLoading(!isLoading)}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border border-transparent hover:border-secondary rounded-md py-2 px-5"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <Separator orientation="vertical" />
                  <div className="flex flex-col w-11/12">
                    <p className="text-xs font-light tracking-wide">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                      consectetur adi rfk krokpfokp kfpork k pok
                    </p>
                    <div className="flex items-center gap-3 justify-between mt-1">
                      <button className="text-xs text-muted-foreground cursor-pointer duration-200 active:scale-95">
                        ----Replay
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-xs text-muted-foreground cursor-pointer duration-200 active:scale-95">
                          ----View Replay
                        </button>
                        <span className="text-xs text-muted-foreground">
                          3 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <TooltipBtn label="Like" icon={Heart} />
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter className="items-center pt-1">
            <div className="bg-secondary px-3 py-0 flex items-center w-full rounded-md duration-200">
              <TooltipBtn />
              <Separator orientation="vertical" className="h-5!" />
              <Input
                placeholder="write a comment..."
                className="bg-transparent! border-0"
              />
              <button className="text-sm active:scale-95 cursor-pointer">
                Post
              </button>
            </div>
            {isLoading && (
              <Button>
                <Loader /> Load More
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
