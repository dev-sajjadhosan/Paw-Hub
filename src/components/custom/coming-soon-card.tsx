import { BellRing } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function ComingSoonCard() {
  return (
    <>
      <Card className="my-14 p-20 w-2xl mx-auto">
        <CardContent className="flex gap-2.5 items-center justify-center">
          <BellRing size={25} />
          Coming Soon
        </CardContent>
      </Card>
    </>
  );
}
