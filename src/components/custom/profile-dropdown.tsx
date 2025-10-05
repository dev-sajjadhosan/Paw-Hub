import {
  Heart,
  ImagePlus,
  LayoutDashboard,
  LayoutList,
  UserRound,
  UserRoundCog,
  Youtube,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { TbShoppingCart } from "react-icons/tb";

export default function ProfileDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Card className="border-transparent bg-muted flex-row items-center gap-2 h-9.5 py-2 px-5 rounded-md cursor-pointer duration-200 active:scale-95 hover:border-neutral-600">
            <Avatar className="size-5">
              <AvatarImage src="logo.png" />
              <AvatarFallback className="">MS</AvatarFallback>
            </Avatar>
            <Separator orientation="vertical" className="h-5! my-0!" />
            <h3 className="text-sm">Mohammad</h3>
          </Card>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-5 w-60 mr-5 mt-1.5">
          <h3 className="text-xs mb-1.5 text-muted-foreground">Actions</h3>
          <DropdownMenuItem>
            <ImagePlus />
            Create Post
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Youtube /> Create Feed
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <TbShoppingCart />
            My Cart
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart />
            WishList
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutList />
            My Posts
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboard />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRound />
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRoundCog />
            Profile Setting
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
