import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLocalStore } from "@/store/useLocalStore";
import { Youtube } from "lucide-react";

export default function CreateFeedDialog() {
  const { petCreateFeed, setPetCreateFeed } = useLocalStore();
  return (
    <>
      <Dialog
        open={petCreateFeed}
        onOpenChange={() => setPetCreateFeed(!petCreateFeed)}
      >
        <DialogContent className="p-7 w-3xl h-[31rem]">
          <h3 className="text-lg text-center flex items-center gap-2 text-muted-foreground h-0 mt-2">
            <Youtube /> Create Feed
          </h3>
        </DialogContent>
      </Dialog>
    </>
  );
}
