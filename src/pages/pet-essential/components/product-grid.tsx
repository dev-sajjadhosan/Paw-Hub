import PaginationCom from "./pagination";
import ProductCard from "./product-card";

export default function ProductGrid() {
  const mockProducts = [
    { _id: 1, name: "Dog Food", price: 25, image: "../../../assets/dog.png" },
    { _id: 2, name: "Cat Toy", price: 10, image: "/img/cat-toy.jpg" },
    { _id: 3, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 4, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 5, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 6, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 7, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 8, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 9, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 10, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 11, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
    { _id: 12, name: "Pet Shampoo", price: 15, image: "/img/shampoo.jpg" },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 mt-12">
        {mockProducts.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <PaginationCom/>
      </div>
    </div>
  );
}
