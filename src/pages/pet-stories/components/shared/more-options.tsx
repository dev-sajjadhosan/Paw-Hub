import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocalStore } from "@/store/useLocalStore";
import {
  ArrowBigRightDash,
  Ban,
  Bug,
  Copy,
  Ellipsis,
  Info,
  Link2,
  Share2,
} from "lucide-react";

export default function MoreOptionDropdown() {
  const { setPetViewDialog } = useLocalStore();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipBtn label="more options" icon={Ellipsis} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-5 border-0 mt-1.5 w-60" align="end">
          <h3 className="text-xs mb-2.5">More Options</h3>
          <div className="flex flex-col gap-1.5">
            <DropdownMenuItem>
              <Bug /> Report
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowBigRightDash />
              Go to Post
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share2 />
              Share to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Copy link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link2 />
              Embed
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Info />
              About account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPetViewDialog(false)}>
              <Ban /> Cancel
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
