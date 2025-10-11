import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dices,
  ImageUpIcon,
  LogIn,
  MapPin,
  MapPinned,
  Phone,
  User2,
  UserRoundPen,
} from "lucide-react";
import { useState } from "react";
import UserSetup from "./components/user-setup";
import PetSetup from "./components/pet-setup";
import { useLocalStore } from "@/store/useLocalStore";

export default function SetupProfilePage() {
  const [isDefault, setIsDefault] = useState(false);
  const { setupTab } = useLocalStore();
  return (
    <>
      {isDefault ? (
        <div className="p-5 flex flex-col items-center justify-center h-screen">
          <DefaultPage set={setIsDefault} />
        </div>
      ) : setupTab === "user" ? (
        <UserSetup />
      ) : (
        <PetSetup />
      )}
    </>
  );
}

function DefaultPage({ set }: { set: (v: boolean) => void }) {
  return (
    <>
      <UserRoundPen size={40} />
      <h3 className="text-xl mb-3 mt-1">Setup Your Profile</h3>
      <Button onClick={() => set(false)}>
        Let's Go <LogIn />
      </Button>
    </>
  );
}
