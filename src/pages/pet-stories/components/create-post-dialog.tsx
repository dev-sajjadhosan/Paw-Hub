import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLocalStore } from "@/store/useLocalStore";
import { Image, ImagePlus } from "lucide-react";

export default function CreatePostDialog() {
  const { petCreatePost, setPetCreatePost } = useLocalStore();
  return (
    <>
      <Dialog
        open={petCreatePost}
        onOpenChange={() => setPetCreatePost(!petCreatePost)}
      >
        <DialogContent className="p-7 w-3xl h-[31rem]">
          <h3 className="text-lg text-center flex items-center gap-2 text-muted-foreground h-0 mt-2">
            <Image /> Create Post
          </h3>
          <div className="">
            <Card className="w-sm h-80 border-0 mx-auto">
              <CardContent className="flex flex-col gap-1 items-center justify-center h-full text-muted-foreground">
                <ImagePlus size={29} />
                Upload Picture
                <p className="text-xs">The file must be 20 mb or less</p>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
