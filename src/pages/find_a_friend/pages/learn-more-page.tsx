import ProfileBoxCard from "@/components/custom/profile-box-card";
import StepperBox from "@/components/custom/stepper-box";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  CheckCircle,
  CheckCircle2Icon,
  Plus,
  Share2,
  User2,
  Video,
} from "lucide-react";
import { useState } from "react";

const pets = [
  {
    id: 1,
    name: "Bob",
    species: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    color: "Golden",
    weight: "25 kg",
    size: "Medium",
    image: "/dog_pet.svg",
    description:
      "A friendly and playful golden retriever who loves being around people.",
    vaccinations: [
      { name: "Rabies", date: "2024-03-15" },
      { name: "Parvovirus", date: "2024-05-02" },
    ],
    owner: {
      name: "Sarah Johnson",
      contact: "+880 1234 567890",
      email: "sarah@example.com",
    },
    adoptionStatus: "Available",
    lastCheckup: "2025-01-10",
    location: {
      city: "Dhaka",
      country: "Bangladesh",
      village: "Gajipur, House 098",
    },
  },
  // {
  //   id: 2,
  //   name: "Luna",
  //   species: "Cat",
  //   breed: "Persian",
  //   age: "1 year",
  //   gender: "Female",
  //   color: "White",
  //   weight: "5 kg",
  //   size: "Small",
  //   image: "/pets/luna.jpg",
  //   description: "A calm and affectionate Persian cat that loves attention.",
  //   vaccinations: [{ name: "Feline Distemper", date: "2024-02-10" }],
  //   owner: {
  //     name: "Mizan Rahman",
  //     contact: "+880 9876 543210",
  //     email: "mizan@example.com",
  //   },
  //   adoptionStatus: "Adopted",
  //   lastCheckup: "2025-02-12",
  //   location: {
  //     city: "Chittagong",
  //     country: "Bangladesh",
  //   },
  // },
];

function PTag({ label, data }: { label: string; data: any }) {
  return (
    <>
      <h3 className="text-sm">
        <span className="text-muted-foreground">{label}:</span> {data}
      </h3>
      <span />
    </>
  );
}

export default function LearnMorePage() {
  const [current, setCurrent] = useState(0);
  const [data, _] = useState(pets[0]);

  return (
    <>
      <div className="p-7 flex gap-24 items-center justify-start w-11/12 mx-auto h-screen">
        <div className="flex flex-col gap-5 w-xl">
          <Card className="w-full h-[27rem]">
            <CardContent className="p-5 h-full">
              <div className="flex">
                <Badge variant={"secondary"}>Species: {data.species}</Badge>
              </div>
              <img
                src={data.image}
                alt={data.name}
                className="object-contain"
              />
            </CardContent>
            <div className="flex items-center justify-center gap-7">
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => setCurrent(current > 0 ? current - 1 : current)}
              >
                <ArrowBigLeftDash /> Prev
              </Button>
              <StepperBox
                total={10}
                current={current}
                setCurrent={setCurrent}
              />
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => setCurrent(current < 9 ? current + 1 : current)}
              >
                Next
                <ArrowBigRightDash />
              </Button>
            </div>
          </Card>

          <div className="bg-secondary/45 p-5 flex itmes-center gap-3 rounded-lg w-full">
            <Avatar className="w-11 h-11 my-auto">
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <PTag label="Name" data={data.owner.name} />
              <PTag label="Email" data={data.owner.email} />
              <PTag label="Contact" data={data.owner.contact} />
            </div>
            <Separator orientation="vertical" className="h-10!" />
            <Button className="mx-auto my-auto">
              <User2 /> Owner
            </Button>
            {/* <h3 className="my-auto mx-auto text-orange-600">Owner</h3> */}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 w-[65%] h-full overflow-y-scroll">
          <div className="flex items-center justify-end gap-2">
            <Button>
              <Video /> Meet {data.name}
            </Button>
            <Button variant={"secondary"}>
              <Plus /> Save
            </Button>
            <Button variant={"secondary"}>
              <Share2 /> Share
            </Button>
          </div>
          <h3 className="text-xl">Pet Information</h3>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between w-full">
              <PTag label="Name" data={data.name} />

              <span className="flex items-center gap-2 text-xs w-fit">
                <CheckCircle size={17} />
                {data.adoptionStatus}
              </span>
            </div>
            <PTag label="Age" data={data.age} />
            <PTag label="Color" data={data.color} />
            <PTag label="Breed" data={data.breed} />
            <p className="text-sm">
              <span className="text-muted-foreground">About {data.name}: </span>
              {data.description}
            </p>
            {/* card */}
            <div className="flex items-center justify-between gap-5 mt-5">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-sm text-muted-foreground">
                  More About {data.name}:
                </h3>
                <div className="bg-secondary/45 w-full p-3.5 border rounded-md flex flex-wrap justify-between gap-1.5">
                  <PTag label="Gender" data={data.gender} />
                  <PTag label="Weight" data={data.weight} />
                  <PTag label="Size" data={data.size} />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-sm text-muted-foreground">Location:</h3>
                <div className="bg-secondary/45 w-full p-3.5 border rounded-md flex flex-wrap justify-between gap-1.5">
                  {/* <MapPin /> */}
                  <PTag label="Village" data={data.location.village} />
                  <PTag label="City" data={data.location.city} />
                  <PTag label="Country" data={data.location.country} />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Vaccinations:</p>
              <div className="grid grid-cols-2 gap-5">
                {data.vaccinations.map((v, i) => (
                  <Alert key={i}>
                    <CheckCircle2Icon color="green" />
                    <AlertTitle>Name: {v.name}</AlertTitle>
                    <AlertDescription>Date: {v.date}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
