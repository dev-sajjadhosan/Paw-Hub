import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TbBrandGoogleFilled, TbBrandMeta } from "react-icons/tb";
import { toast } from "sonner";

export default function Socials({ label }: { label: string }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-start mt-7">
        {/* separetor */}
        <div className="flex items-center justify-center gap-3 w-full">
          <Separator className="w-1/3!" />
          <p className="text-xs capitalize">{label}</p>
          <Separator className="w-1/3!" />
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Button variant={"secondary"}>
            <TbBrandGoogleFilled /> Google
          </Button>
          <Button variant={"secondary"}>
            <TbBrandMeta />
            Facebook
          </Button>
          <Button
            onClick={() =>
              toast.info("Developement Mode. We are currnetly working...")
            }
          >
            Others
          </Button>
        </div>
      </div>
    </>
  );
}
