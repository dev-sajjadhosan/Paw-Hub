import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useLocalStore } from "@/store/useLocalStore";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeftDash,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { TbShoppingCartDown, TbShoppingCartUp } from "react-icons/tb";

export default function AddToCartDrawer() {
  const {
    petAddToCart,
    setPetAddToCart,
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
  } = useLocalStore();

  const increaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateCartItemQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(id, item.quantity - 1);
    }
  };

  const removeItem = (id: number) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Drawer
        direction="right"
        open={petAddToCart}
        onOpenChange={() => setPetAddToCart(!petAddToCart)}
      >
        <DrawerContent className="p-7">
          <DrawerHeader className="p-0">
            <DrawerTitle className="text-sm font-semibold flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Your Cart ({cartItems.length})
            </DrawerTitle>
          </DrawerHeader>

          <div className="mt-5 h-full">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 h-full">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button className="mt-4" onClick={() => setPetAddToCart(false)}>
                  <TbShoppingCartUp />
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardContent className="p-4 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{item.name}</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7 rounded-full"
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-3 min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7 rounded-full"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <span className="ml-auto font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between font-medium text-lg mb-6">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>

                  <div className="flex gap-3">
                    <TooltipBtn
                      icon={ArrowBigLeftDash}
                      label="Continue"
                      action={() => setPetAddToCart(false)}
                    />
                    <TooltipBtn
                      icon={Trash2}
                      label="Remove All"
                      action={clearCart}
                    />

                    <Button className="w-[40%] ml-auto" size={"sm"}>
                      <TbShoppingCartDown /> Checkout
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
