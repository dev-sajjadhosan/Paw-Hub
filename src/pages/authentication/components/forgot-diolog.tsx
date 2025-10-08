import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Key, LogIn } from "lucide-react";

export default function ForgotDiolog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button
            type="button"
            className="text-xs text-orange-600 cursor-pointer active:scale-95"
          >
            Forgot password?
          </button>
        </DialogTrigger>
        <DialogContent className="w-2xl h-[15rem] p-5 flex flex-col gap-1 items-center justify-center">
          <h3 className="">Forgot Your Password</h3>
          <p className="text-sm text-center text-muted-foreground mb-3">
            Get your magic key to reset your password
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Button>
                <Key /> Send Code
              </Button>
              <Button>
                <LogIn /> Auto Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
