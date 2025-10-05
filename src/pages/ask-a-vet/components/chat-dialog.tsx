import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLocalStore } from "@/store/useLocalStore";
import { Bot, Send } from "lucide-react";

export default function ChatDialog() {
  const { chatDialog, setChatDialog } = useLocalStore();
  return (
    <>
      <Dialog open={chatDialog} onOpenChange={() => setChatDialog(!chatDialog)}>
        <DialogContent className="w-11/12">
          <div className="flex flex-col gap-5 overflow-y-scroll min-h-11/12">
            <div className="flex items-start gap-2.5 p-2.5 w-full">
              <Avatar className="w-7 h-7 border p-1">
                <AvatarImage src="/logo.png" />
              </Avatar>
              <p className="text-xs font-medium tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                veniam repudiandae distinctio, vel ex provident necessitatibus.
                Alias atque quibusdam cupiditate maxime. Nobis deleniti facilis
                quo laudantium maiores iste optio hic, autem debitis, esse magni
                doloremque, maxime ad similique eum? Soluta suscipit tempore sed
                modi corrupti reiciendis inventore nemo repudiandae aspernatur.
              </p>
            </div>
            <div className="flex flex-row-reverse items-start ml-auto gap-2.5 p-3.5 w-9/12 rounded-md bg-secondary">
              <Avatar className="w-7 h-7 border p-1">
                <AvatarImage src="/logo.png" />
              </Avatar>
              <p className="text-xs font-light tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                veniam repudiandae distinctio, vel ex provident necessitatibus.
                Alias atque quibusdam cupiditate maxime. Nobis deleniti facilis
                quo laudantium maiores iste optio hic, autem debitis, esse magni
                doloremque, maxime ad similique eum? Soluta suscipit tempore sed
                modi corrupti reiciendis inventore nemo repudiandae aspernatur.
              </p>
            </div>
          </div>
          <DialogFooter>
            <div className="mt-9 flex items-center mx-auto gap-2 bg-secondary/55 px-5 py-1 rounded-md w-5xl duration-200">
              <Bot className="text-muted-foreground" />
              <Separator orientation="vertical" className="h-5!" />
              <Input
                placeholder="Write problem to get help..."
                className="bg-transparent! border-0"
              />
              <Button
                variant={"ghost"}
                onClick={() => setChatDialog(!chatDialog)}
              >
                <Send /> Ask
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
