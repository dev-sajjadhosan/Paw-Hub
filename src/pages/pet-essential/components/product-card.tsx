import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStore } from "@/store/useLocalStore";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import dogImg from '../../../assets/dog.png';
import catImg from '../../../assets/cat.png';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart, setPetAddToCart } = useLocalStore();

  const handleAddToCart = () => {
    // Use the product image if available, otherwise use a fallback image
    const productImage = product.image.includes('assets') ? 
      (product.image.includes('dog') ? dogImg : catImg) : 
      (product.name.toLowerCase().includes('dog') ? dogImg : catImg);
    
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: productImage
    });
    
    // Show toast notification
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart`,
      action: {
        label: "View Cart",
        onClick: () => setPetAddToCart(true)
      }
    });
  };

  return (
    <Card className="rounded-2xl p-5 transition hover:shadow-md">
      <CardContent className="p-0">
        <img
          src={product.image.includes('assets') ? 
            (product.image.includes('dog') ? dogImg : catImg) : 
            (product.name.toLowerCase().includes('dog') ? dogImg : catImg)}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500 mb-3">${product.price.toFixed(2)}</p>

        <div className="flex gap-5 justify-between">
          <Button onClick={handleAddToCart}>
            <ShoppingCart size={16} className="mr-2" /> Add to cart
          </Button>
          <Button variant={'ghost'}>
            <Heart size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
