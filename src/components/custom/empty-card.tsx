import { TbDatabasePlus } from "react-icons/tb";
import { Card, CardContent } from "../ui/card";

export default function EmptyCard() {
  return (
    <>
      <Card className="w-lg h-72 mx-auto bg-transparent border-0">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <TbDatabasePlus size={53} />
          <h3 className="text-lg">No Content is here</h3>
          <p className="text-xs text-muted-foreground">
            Please add something to see here.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
