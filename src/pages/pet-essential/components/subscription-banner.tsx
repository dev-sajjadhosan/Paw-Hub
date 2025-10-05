import { Alert, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BellRing, Loader } from "lucide-react";
import { useState } from "react";
import { TbMailCheck } from "react-icons/tb";

export default function SubscriptionBanner() {
  const [tab, setTab] = useState<boolean>(false);
  return (
    <Card className="bg-gradient-to-r from-neutral-900 to-zinc-800 border-0 text-white rounded-2xl p-9 w-full md:w-3xl h-[16.5rem] mx-auto my-11">
      <CardContent className="text-center flex flex-col items-center justify-center h-full">
        {tab ? (
          <>
            <div className="flex items-center gap-2 bg-secondary py-3 px-7 rounded-md">
              <Avatar className="w-11 h-11 border p-1.5">
                <AvatarImage src="logo.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h3 className="text-lg">Mohammad Sajjad Hosan</h3>
                <p className="text-xs">devsajjadhosan@gmail.com</p>
              </div>
              <Loader className="animate-spin ml-3.5" />
            </div>
            <Alert className="mt-5 w-fit px-5 text-orange-600 border-0">
              <TbMailCheck />
              <AlertTitle>
                A test email has been send to the user mail box.
              </AlertTitle>
            </Alert>
          </>
        ) : (
          <>
            <h2 className="text-2xl">Never Run Out of Pet Supplies!</h2>
            <p className="mb-4 text-sm">
              Set up a subscription for auto-delivery of your pet’s essentials
              🐶🐱
            </p>
            <div className="flex items-center gap-3">
              <Button onClick={() => setTab(!tab)}>
                <BellRing /> Subscribe Now
              </Button>
              {/* <Button>Subscribe Now</Button> */}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
