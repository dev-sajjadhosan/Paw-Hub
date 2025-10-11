import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, PawPrint, Share2 } from "lucide-react";
import TooltipBtn from "../custom_ui/tooltipBtn";
import AdoptNowDialog from "@/pages/find_a_friend/components/adopt-now-dialog";
import { Link } from "react-router";

export default function PetProfileCard() {
  return (
    <Card className="w-full max-w-md shadow-md rounded-2xl overflow-hidden p-0">
      {/* Pet Photo */}
      <div className="relative">
        <img
          src="https://placedog.net/500/300?id=12"
          alt="Golden Retriever"
          className="w-full h-64 object-cover"
        />
        <div className="absolute right-3 bottom-1.5 space-x-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`px-1 rounded-full cursor-pointer duration-200 ${
                i === 1 ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-normal">Buddy</CardTitle>
          <div className="flex itmes-center gap-1.5">
            <TooltipBtn label="Save" icon={Heart} />
            <TooltipBtn label="Share" icon={Share2} />
          </div>
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          Golden Retriever • 2 years old • Male
        </p>
      </CardHeader>

      <CardContent className="space-y-4 pb-7">
        {/* Description */}
        <div>
          <h3 className="font-normal flex items-center gap-2">
            <PawPrint className="w-4 h-4" />
            About Buddy
          </h3>
          <p className="text-sm text-muted-foreground">
            Buddy is a playful, loyal golden retriever who loves kids and other
            pets. He’s house-trained, enjoys fetch, and is looking for a loving
            family.
          </p>
        </div>

        {/* Adoption Requirements */}
        <div>
          <h3 className="font-normal">Adoption Requirements:</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Secure fenced yard or regular walks</li>
            <li>Vaccination proof for other pets at home</li>
            <li>Commitment to yearly vet check-ups</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="flex gap-3">
          <AdoptNowDialog />
          <Link to={`/learn-more-about/${"pubby"}`}>
            <Button variant="outline" className="flex-1">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
