import GoBack from "@/components/custom_ui/goback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Bot, Newspaper, Send } from "lucide-react";

import ChatDialog from "./components/chat-dialog";
import { useLocalStore } from "@/store/useLocalStore";
import ComingSoonCard from "@/components/custom/coming-soon-card";
import UserFeedbacks from "./components/user-feedback";
import ExpreienceUsers from "./components/expreience-users";

export default function AskAVetPage() {
  const { setChatDialog, chatDialog } = useLocalStore();

  return (
    <>
      <ChatDialog />
      {/* ------- */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <GoBack />
          <div className="flex items-center gap-3">
            <Button variant={"secondary"}>
              <Newspaper /> Vet Articles
            </Button>
            <Button disabled></Button>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-lg">Get Help from Paw.ai</h3>
              <div className="flex items-center gap-2 bg-secondary/55 px-5 py-1.5 rounded-md w-full md:w-xl duration-200">
                <Bot />
                <Separator orientation="vertical" className="h-5!" />
                <Input
                  placeholder="Write problem to get help..."
                  className="bg-transparent! border-0"
                />
                <Button
                  variant={"ghost"}
                  onClick={() => setChatDialog(!chatDialog)}
                >
                  <Send /> Ask
                </Button>
              </div>
            </div>
            <ExpreienceUsers />
          </div>
        </div>
        <UserFeedbacks />
        <ComingSoonCard />
      </div>
    </>
  );
}
