import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { BrainCog, Loader } from "lucide-react";

export default function PetReviewDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>
            <BrainCog /> Ai Review
          </Button>
        </DialogTrigger>
        <DialogContent className="p-7 w-2xl flex flex-col items-center justify-center h-[11rem]">
          <Loader className="animate-spin" />
          <p className="text-sm">Please Wait...</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
