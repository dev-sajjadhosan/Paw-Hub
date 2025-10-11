import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useLocalStore } from "@/store/useLocalStore";
import {
  Dices,
  ImageUpIcon,
  LogIn,
  MapPin,
  MapPinned,
  Phone,
  User2,
} from "lucide-react";

export default function UserSetup() {
  const { setSetupTab } = useLocalStore();

  return (
    <>
      <div className="p-5 flex gap-20 items-center justify-center h-screen w-4xl mx-auto">
        <div className="w-auto h-[20rem] bg-secondary rounded-full relative overflow-hidden group">
          <img src="/user.svg" alt="" className="object-cover w-full h-full" />
          <Label
            htmlFor="picture"
            className="absolute top-0 left-0 bg-secondary w-full h-full flex flex-col items-center justify-center invisible group-hover:visible cursor-pointer duration-75"
          >
            <input type="file" name="picture" id="picture" hidden />
            <ImageUpIcon />
            <p className="text-xs">Upload Your Picture</p>
          </Label>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-md">Write your info to compleate the profile</h3>
          <form className="mt-5 w-full space-y-3">
            <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
              <User2 size={20} />
              <Separator orientation="vertical" className="h-5!" />
              <Input
                placeholder="Write your username"
                className="bg-transparent! border-0"
              />
              <TooltipBtn label="Genearte" icon={Dices} />
            </div>
            <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
              <Phone size={20} />
              <Separator orientation="vertical" className="h-5!" />
              <Input
                placeholder="Write your phone number"
                className="bg-transparent! border-0"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                <MapPin size={20} />
                <Separator orientation="vertical" className="h-5!" />
                <Input
                  placeholder="Write your location"
                  className="bg-transparent! border-0"
                />
              </div>
              <Button type="button">
                <MapPinned />
                Auto Locate
              </Button>
            </div>
            <div className="float-right mt-5">
              <Button type="button" onClick={() => setSetupTab("pet")}>
                Next Pet <LogIn />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
