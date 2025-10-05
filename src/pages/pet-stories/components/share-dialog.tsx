import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLocalStore } from "@/store/useLocalStore";
import { Bone, Copy } from "lucide-react";
import {
  TbBrandThreads,
  TbBrandDiscord,
  TbQrcode,
  TbMailShare,
  TbMessageCircle,
} from "react-icons/tb";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function ShareDialog() {
  const { petShareDialog, setPetShareDialog } = useLocalStore();
  return (
    <>
      <Dialog
        open={petShareDialog}
        onOpenChange={() => setPetShareDialog(!petShareDialog)}
      >
        <DialogContent className="p-7 w-3xl h-[21rem] flex flex-col">
          <h3 className="text-sm">Share Post</h3>
          <div className="flex items-center bg-secondary px-3 h-14 rounded-md">
            <Bone className="text-muted-foreground" />
            <Separator orientation="vertical" className="h-1/2! mx-2.5" />
            <Input
              value={
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              readOnly
              className="bg-transparent! border-0 px-1! text-muted-foreground"
            />
            <Separator orientation="vertical" className="h-1/2! mr-3" />
            <TooltipBtn label="Copy" icon={Copy} variant="default" />
          </div>
          <div className="mt-7">
            <h3 className="text-sm">Share Your Post on...</h3>
            <div className="mt-3 flex items-center flex-wrap gap-3">
              <Button variant={"secondary"}>
                <TbBrandThreads />
                Threads
              </Button>
              <Button variant={"secondary"}>
                <FaFacebook />
                Facebook
              </Button>
              <Button variant={"secondary"}>
                <TbMailShare />
                Email
              </Button>
              <Button variant={"secondary"}>
                <TbBrandDiscord />
                Discord
              </Button>
              <Button variant={"secondary"}>
                <FaXTwitter />
                XTwitter
              </Button>
              <Button variant={"secondary"}>
                <TbMessageCircle />
                Messanger
              </Button>
              <Button variant={"secondary"}>
                <TbQrcode />
                QrCode
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
