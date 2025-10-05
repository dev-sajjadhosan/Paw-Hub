import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";
import dog from "../../../assets/dog.png";
import { Separator } from "@/components/ui/separator";
import ShowMapLocation from "./showmaplocation";
import FoundReport from "./foundreport";

interface LostPetCardProps {
  photo?: string;
  name: string;
  details: string;
  lastSeen: string;
  contact: string;
  status?: "missing" | "found";
}

export default function LostPetCard({
  photo = dog,
  name,
  details,
  lastSeen,
  contact,
  status = "missing",
}: LostPetCardProps) {
  return (
    <Card className="max-w-md mx-auto shadow-md rounded-2xl overflow-hidden">
      <img src={photo} alt={photo} width={250} className="mx-auto rounded-lg" />

      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <Badge
          variant={status === "missing" ? "destructive" : "secondary"}
          className="capitalize"
        >
          {status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground">{details}</p>
        <Separator />
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <MapPin className="h-4 w-4" />
          <span>Last seen: {lastSeen}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Phone className="h-4 w-4 " />
          <span>Contact: {contact}</span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <ShowMapLocation />
        <FoundReport />
      </CardFooter>
    </Card>
  );
}
