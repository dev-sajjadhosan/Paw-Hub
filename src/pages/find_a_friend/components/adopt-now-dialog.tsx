import ProfileBoxCard from "@/components/custom/profile-box-card";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, MailCheck, Send, UserCog2 } from "lucide-react";
import { useState } from "react";

export default function AdoptNowDialog() {
  const [request, setRequest] = useState(false);
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="flex-1">
            <HandHeart /> Adopt Now
          </Button>
        </DialogTrigger>
        <DialogContent className="w-3xl p-7 flex flex-col items-center">
          {!request ? (
            <>
              <ProfileBoxCard />
              <form className="mt-3 w-full space-y-5">
                <Textarea
                  placeholder="Why you want to adopt this pet ?"
                  rows={5}
                />
                <Button type="button" onClick={() => setRequest(true)}>
                  Request for Adopt <Send />
                </Button>
              </form>
            </>
          ) : (
            <div className="flex flex-col gap-1.5 items-center justify-center h-[13rem] w-full">
              <MailCheck size={30} />
              <h3 className="text-lg">Request Message Send</h3>
              <p className="text-sm text-center font-light tracking-wide">
                Please check on your mail box. We have send your a mail about
                the pet your request to adopt and We also has send to the Admin
                the request you send.
              </p>
              <p className="text-sm mt-3">
                So, Please wait! We will contact you soon!
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
