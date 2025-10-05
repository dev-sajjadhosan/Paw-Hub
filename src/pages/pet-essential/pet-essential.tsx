import GoBack from "@/components/custom_ui/goback";
import CategoryTabs from "./components/category-tabs";
import ProductGrid from "./components/product-grid";
import CategoryDrawer from "./components/category-drawer";
import SubscriptionBanner from "./components/subscription-banner";

export default function PetEssentialPage() {
  return (
    <>
      
      {/* --------------- */}
      <div className="p-7">
        <div className="flex items-center justify-between w-full">
          <GoBack />
          <div className="flex items-center gap-3">
            <CategoryDrawer />
          </div>
        </div>
        <header className="text-center mb-3">
          <h1 className="text-3xl font-normal">Pet Essentials</h1>
          <p className="text-gray-500">
            Everything your pet needs — in one place
          </p>
        </header>
        <CategoryTabs />
        <ProductGrid />
        <SubscriptionBanner />
      </div>
    </>
  );
}
