import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SearchBox({ label }: { label?: boolean }) {
  return (
    <section className="w-11/12 mx-auto rounded-md p-15">
      <div className="flex flex-col gap-3.5 items-center mx-auto w-lg">
        {label !== false && (
          <Label className="text-xl">Find Your Buddy Here</Label>
        )}
        <div className="flex items-center border px-3 py-0 rounded-lg w-full">
          <Search className="text-muted-foreground pr-2" size={29} />
          <Separator orientation="vertical" className="h-7!" />
          <Input
            className="bg-transparent! border-0"
            placeholder="pappy, birly, kitty..."
          />
          <Separator orientation="vertical" className="h-7!" />
          <Select>
            <SelectTrigger className="w-[120px] bg-transparent! border-0">
              <SelectValue placeholder="Pet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="bird">Bird</SelectItem>
              <SelectItem value="rabbit">Rabbit</SelectItem>
              <SelectItem disabled value="coming_soon">
                Coming Soon
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
