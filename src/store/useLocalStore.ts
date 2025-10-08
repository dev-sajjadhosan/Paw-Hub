import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface LocalStoreProps {
  LFPet: number;
  chatDialog: boolean;
  petViewDialog: boolean;
  petCommentDialog: boolean;
  petShareDialog: boolean;
  petCreatePost: boolean;
  petCreateFeed: boolean;
  petAddToCart: boolean;
  petWishlist: boolean;
  cartItems: CartItem[];
  qrCode: boolean;

  setLFPet: (v: number) => void;
  setChatDialog: (v: boolean) => void;
  setPetViewDialog: (v: boolean) => void;
  setPetCommnetDialog: (v: boolean) => void;
  setPetShareDialog: (v: boolean) => void;
  setPetCreatePost: (v: boolean) => void;
  setPetCreateFeed: (v: boolean) => void;
  setPetAddToCart: (v: boolean) => void;
  setPetWishlist: (v: boolean) => void;
  setQrCode: (v: boolean) => void;

  // Cart functions
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useLocalStore = create<LocalStoreProps>()(
  persist(
    (set) => ({
      LFPet: 0,
      chatDialog: false,
      petViewDialog: false,
      petCommentDialog: false,
      petShareDialog: false,
      petCreateFeed: false,
      petCreatePost: false,
      petAddToCart: false,
      petWishlist: false,
      cartItems: [],
      qrCode: false,

      setLFPet: (v: number) => set(() => ({ LFPet: v })),
      setChatDialog: (v: boolean) => set(() => ({ chatDialog: v })),
      setPetViewDialog: (v: boolean) => set(() => ({ petViewDialog: v })),
      setPetCommnetDialog: (v: boolean) => set(() => ({ petCommentDialog: v })),
      setPetShareDialog: (v: boolean) => set(() => ({ petShareDialog: v })),
      setPetCreatePost: (v: boolean) => set(() => ({ petCreatePost: v })),
      setPetCreateFeed: (v: boolean) => set(() => ({ petCreateFeed: v })),
      setPetAddToCart: (v: boolean) => set(() => ({ petAddToCart: v })),
      setPetWishlist: (v: boolean) => set(() => ({ petWishlist: v })),
      setQrCode: (v: boolean) => set(() => ({ qrCode: v })),

      // Cart functions
      addToCart: (item: CartItem) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem) {
            // If item already exists, increase quantity
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          } else {
            // Add new item to cart
            return {
              cartItems: [...state.cartItems, { ...item, quantity: 1 }],
            };
          }
        }),

      removeFromCart: (id: number) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      updateCartItemQuantity: (id: number, quantity: number) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      clearCart: () => set(() => ({ cartItems: [] })),
    }),
    {
      name: "pet_hub_store",
    }
  )
);
