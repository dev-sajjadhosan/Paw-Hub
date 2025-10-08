import { Separator } from "@/components/ui/separator";
import login from "../../assets/login.svg";
import { AtSign, Eye, EyeOff, LogIn, QrCode, UserLock } from "lucide-react";
import { Input } from "@/components/ui/input";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TbBrandGoogleFilled, TbBrandMeta } from "react-icons/tb";
import ForgotDiolog from "./components/forgot-diolog";
import { useLocalStore } from "@/store/useLocalStore";
import { Card, CardContent } from "@/components/ui/card";

import qrCodeImg from "../../assets/qrCode.png";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const { qrCode, setQrCode } = useLocalStore();
  return (
    <>
      <div className="p-7 flex items-center justify-center h-screen">
        <div className="p-9 w-10/12 h-11/12 bg-neutral-900 rounded-2xl flex items-center gap-14">
          <div className="flex flex-col items-center gap-5">
            <img src={login} alt="" className="w-full md:w-2xl" />
            <img src="logo2.png" alt="" width={200} />
            <Button
              onClick={() => setQrCode(!qrCode)}
              variant={qrCode ? "default" : "secondary"}
            >
              <QrCode />
              Login with QR Code
            </Button>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col w-full duration-200">
            {qrCode ? (
              <>
                <Card className="mt-3 p-0 mx-auto">
                  <CardContent className="p-1.5">
                    <img
                      src={qrCodeImg}
                      alt=""
                      width={290}
                      className="object-contain mx-auto"
                    />
                  </CardContent>
                </Card>
                <p className="text-xs text-center capitalize mx-auto mt-3 text-muted-foreground">
                  scan the qr-code and login instantly
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-normal">Welome Back,</h3>
                <form className="mt-5 w-full space-y-3">
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <AtSign size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your email"
                      className="bg-transparent! border-0"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-secondary w-full rounded-md px-5 py-0.5">
                    <UserLock size={20} />
                    <Separator orientation="vertical" className="h-5!" />
                    <Input
                      placeholder="Write your password"
                      className="bg-transparent! border-0"
                      type={show ? "text" : "password"}
                    />
                    <div className="flex items-center">
                      <TooltipBtn
                        icon={show ? EyeOff : Eye}
                        label={show ? "Hide" : "Show"}
                        action={() => setShow(!show)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full mt-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="me" />
                      <Label htmlFor="me">Remember me</Label>
                    </div>
                    <ForgotDiolog />
                  </div>
                  <div className="">
                    <Button>
                      Login
                      <LogIn />
                    </Button>
                  </div>
                </form>
                <div className="flex flex-col gap-1 items-center justify-start mt-7">
                  {/* separetor */}
                  <div className="flex items-center gap-3 justify-center">
                    <Button variant={"secondary"}>
                      <TbBrandGoogleFilled /> Google
                    </Button>
                    <Button variant={"secondary"}>
                      <TbBrandMeta />
                      Facebook
                    </Button>
                    <Button>Others</Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
