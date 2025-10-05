import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export default function NotFound() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/logo2.png" alt="" width={250} />
      <h3 className="text-[15rem] -my-16 text-muted-foreground">404</h3>
      <h1 className="text-4xl">Page Not Found</h1>
      <p className="text-center text-muted-foreground my-2.5">
        The page you are looking for{" "}
        <Badge variant={"destructive"}>{pathname.replace("/", "-> ")}</Badge>{" "}
        does not exist.
      </p>
      <Button onClick={() => nav(-1)}>
        <ArrowBigLeftDash />
        Go Back
      </Button>
    </div>
  );
}
