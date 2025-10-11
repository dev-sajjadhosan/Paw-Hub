import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStore } from "@/store/useLocalStore";
import {
  ArrowLeftToLine,
  Calendar,
  ImageUpIcon,
  LogIn,
  Palette,
  PawPrint,
  Tag,
  Utensils,
} from "lucide-react";
import { useState } from "react";

export default function PetSetup() {
  const { setSetupTab } = useLocalStore();
  const [tab, setTab] = useState(0);
  return (
    <>
      <form className="h-screen w-4xl mx-auto flex flex-col gap-1 items-center justify-center">
        <div className="p-5 w-full">
          {tab === 0 ? (
            <div className="flex flex-row gap-20 items-center justify-center h-full w-full">
              <div className="w-[37rem] h-[20rem] bg-secondary rounded-full relative overflow-hidden group">
                <img
                  src="/dog_pet.svg"
                  alt=""
                  className="object-contain w-full h-full"
                />
                <Label
                  htmlFor="picture"
                  className="absolute top-0 left-0 bg-secondary w-full h-full flex flex-col items-center justify-center invisible group-hover:visible cursor-pointer duration-75"
                >
                  <input type="file" name="picture" id="picture" hidden />
                  <ImageUpIcon />
                  <p className="text-xs">Upload Your Pet Picture</p>
                </Label>
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-md">Pet information</h3>
                <div className="mt-5 w-full space-y-3">
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <PawPrint size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your pet name"
                      className="bg-transparent! border-0"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <Calendar size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your pet age"
                      className="bg-transparent! border-0"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                      <Tag size={20} />
                      <Separator orientation="vertical" className="h-5!" />
                      <Input
                        placeholder="Write your pet nickname"
                        className="bg-transparent! border-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <Utensils size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your pet favourite foods"
                      className="bg-transparent! border-0"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <Palette size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your pet color"
                      className="bg-transparent! border-0"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-3 mt-5">
                    <Button
                      variant={"ghost"}
                      type="button"
                      onClick={() => setSetupTab("user")}
                    >
                      <ArrowLeftToLine />
                      Back
                    </Button>
                    <Button type="button" onClick={() => setTab(1)}>
                      Next <LogIn />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              <Label>Write something about your pet ?</Label>
              <Textarea
                rows={7}
                placeholder="about something..."
                className="rounded-xl! p-3"
              />
              <div className="flex items-center justify-end gap-3 mt-5">
                <Button
                  variant={"ghost"}
                  type="button"
                  onClick={() => setTab(0)}
                >
                  <ArrowLeftToLine />
                  Back
                </Button>
                <Button>
                  Create Account
                  <LogIn />
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
