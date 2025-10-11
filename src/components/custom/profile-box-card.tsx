import { UserCog2 } from "lucide-react";
import TooltipBtn from "../custom_ui/tooltipBtn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export default function ProfileBoxCard() {
  return (
    <>
      <div className="flex items-center gap-3 bg-zinc-900 w-fit px-5 py-3 rounded-md">
        <Avatar className="w-11 h-11">
          <AvatarImage src="/user.svg" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-muted-foreground">
          <h1 className="text-sm">Mohammad Sajjad Hosan</h1>
          <h3 className="text-xs font-normal">devsajjadhosan@gmail.com</h3>
        </div>
        <Separator orientation="vertical" className="h-7!" />
        <TooltipBtn icon={UserCog2} label="Profile" />
      </div>
    </>
  );
}
