import Header from "@/components/custom/header";
import NotFound from "@/error/not-found";
import AboutUsPage from "@/pages/about-us/about-us";
import AskAVetPage from "@/pages/ask-a-vet/ask-a-vet";
import FindAFriend from "@/pages/find_a_friend/find_a_friend";
import LostPetPage from "@/pages/find_a_friend/pages/lostpetpage";
import Home from "@/pages/home/home";
import LostAndFound from "@/pages/lostAndFound/lostAndFound";
import AddToCartDrawer from "@/pages/pet-essential/components/add-to-cart-drawer";
import PetWishlist from "@/pages/pet-essential/components/pet-wishlist";
import PetEssentialPage from "@/pages/pet-essential/pet-essential";
import PetStoriesPage from "@/pages/pet-stories/pet-stories";

import { Route, Routes } from "react-router";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/find-a-friend",
    element: <FindAFriend />,
  },
  {
    path: "/lost-and-found",
    element: <LostAndFound />,
  },
  {
    path: "/lost-pet",
    element: <LostPetPage />,
  },
  //
  {
    path: "/ask-a-vet",
    element: <AskAVetPage />,
  },
  {
    path: "pet-stories",
    element: <PetStoriesPage />,
  },
  //
  {
    path: "/pet-essentials",
    element: <PetEssentialPage />,
  },
  //
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
];

export default function Layout() {
  return (
    <div className="relative">
      <Header routes={routes} />
      <PetWishlist />
      <AddToCartDrawer />
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
