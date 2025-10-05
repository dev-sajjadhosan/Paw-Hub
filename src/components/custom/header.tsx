import {
  GalleryVertical,
  Heart,
  Home,
  Info,
  LogIn,
  Megaphone,
  PawPrint,
  Search,
  ShoppingCart,
  Store,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "../ui/button";
import TooltipBtn from "../custom_ui/tooltipBtn";
import { useLocation } from "react-router";
import { usePetStore } from "@/store/usePetStore";
import ProfileDropdown from "./profile-dropdown";
import { useLocalStore } from "@/store/useLocalStore";
import { Separator } from "../ui/separator";

const navigations = [
  {
    label: "home",
    path: "/",
    icon: Home,
  },
  {
    label: "find a friend",
    path: "/find-a-friend",
    icon: PawPrint,
  },
  {
    label: "lost & found",
    path: "/lost-and-found",
    icon: Search,
  },

  {
    label: "ask a vet",
    path: "/ask-a-vet",
    icon: Megaphone,
  },
  {
    label: "pet stories",
    path: "/pet-stories",
    icon: GalleryVertical,
  },
  {
    label: "pet essentials",
    path: "/pet-essentials",
    icon: Store,
  },
  {
    label: "about us",
    path: "/about-us",
    icon: Info,
  },
];

export default function Header({ routes }: { routes: { path: string }[] }) {
  const { isUser } = usePetStore();
  const { petAddToCart, petWishlist, setPetAddToCart, setPetWishlist } =
    useLocalStore();
  const isPath = (path: string) => useLocation().pathname === path;
  if (!routes.some((route) => route.path === useLocation()?.pathname)) return;

  return (
    <>
      <header className="flex items-center justify-between px-7 sticky top-1 bg-zinc-800 h-14 rounded-md w-11/12 mx-auto duration-300 z-20">
        <div>
          <img src="/logo2.png" alt="logo" width={140} />
        </div>
        <nav>
          <ul className="flex items-center gap-1 text-sm font-normal">
            {navigations.map((n, i) => (
              <li
                key={i}
                // className="flex items-center gap-0.5 cursor-pointer bg-primary py-2 px-4 rounded-md"
              >
                <TooltipBtn
                  label={n.label}
                  icon={n.icon}
                  url={n.path}
                  variant={isPath(n.path) ? "default" : "ghost"}
                />
              </li>
            ))}
          </ul>
        </nav>
        {isUser ? (
          <div className="flex items-center gap-3">
            <Button size={"sm"} onClick={() => setPetAddToCart(!petAddToCart)}>
              <ShoppingCart /> Cart
            </Button>
            <TooltipBtn
              variant="ghost"
              icon={Heart}
              label="Wishlist"
              action={() => setPetWishlist(!petWishlist)}
            />
            <Separator orientation="vertical" className="h-9!" />
            <ProfileDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant={"ghost"}>
              <LogIn />
              Login
            </Button>
            <Button>
              <UserRoundPlus /> Logup
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
