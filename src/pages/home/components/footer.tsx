import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MailboxIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="mt-32 flex flex-col bg-neutral-900 p-15">
        <div className="flex flex-col gap-2.5 mx-auto">
          <Label className="text-muted-foreground">
            //== Want Daily Notification?
          </Label>
          <div className="flex items-center gap-1.5 bg-secondary px-5 py-2 rounded-lg w-lg [&_svg]:text-muted-foreground">
            <MailboxIcon size={29} />
            <Input
              placeholder="Your_email@address.com"
              className="bg-transparent! border-0"
            />
            <Separator orientation="vertical" className="h-5!" />
            <Button variant={"ghost"}>
              Subscribe
              <Send />
            </Button>
          </div>
        </div>
        <div className="mt-11 flex itmes-center justify-between">
          <div className="flex flex-col">
            <img src="/public/logo2.png" width={190} alt="" className="" />
            <p className="text-sm text-gray-500 w-md mt-3">
              PawHub is your all-in-one platform for pets. Adopt, find lost
              pets, get care tips, and shop supplies, all in a safe, caring
              community where pets and owners thrive.
            </p>
          </div>
          <div className="flex items-center justify-between gap-20">
            <nav className="flex flex-col gap-1.5">
              <Label className="text-muted-foreground">Quick Goto</Label>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
                <li>Home</li>
                <li>Ask a Vet</li>
                <li>Pet Stories</li>
                <li>Pet Essentials</li>
                <li>About Us</li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-1.5">
              <Label className="text-muted-foreground">Company</Label>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-1.5">
              <Label className="text-muted-foreground">Legal</Label>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
              </ul>
            </nav>
          </div>
        </div>
        <Separator className="my-9" />
        <div className=" flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2024 PawHub. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <a href="" className="text-primary">
              Null_Stack
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
