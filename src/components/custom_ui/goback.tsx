import { ArrowBigLeftDash } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function GoBack() {
  const nav = useNavigate();
  return (
    <Button variant={"secondary"} onClick={() => nav(-1)}>
      <ArrowBigLeftDash /> Go Back
    </Button>
  );
}
