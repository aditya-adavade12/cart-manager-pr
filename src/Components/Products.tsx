import React, { useEffect, useState } from "react";

const Products: React.FC = () => {
  // State of Cart
  const [Cart, setCart] = useState<{ id: number, name: string, salePrice: number, realPrice: number, imgLink: any, qty: number }[]>(
    // Intial State
    JSON.parse(localStorage.getItem("P-Cart") || "[]")
  );
  // Products Array of objects
  const productArray: any = [
    { id: 1, name: "Chicken Biryani", salePrice: 180, realPrice: 220, imgLink: "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg", qty: 1 },
    { id: 2, name: "Mutton Biryani", salePrice: 250, realPrice: 300, imgLink: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe-500x500.jpg", qty: 1 },
    { id: 3, name: "Butter Chicken", salePrice: 220, realPrice: 270, imgLink: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg", qty: 1 },
    { id: 4, name: "Chicken Tandoori (Full)", salePrice: 350, realPrice: 400, imgLink: "https://sinfullyspicy.com/wp-content/uploads/2023/11/1200-by-1200-images-2.jpg", qty: 1 },
    { id: 5, name: "Chicken 65", salePrice: 190, realPrice: 230, imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLUylpXSB7u85LFAYqTeMTc1SBAuH-YKJ_Q&s", qty: 1 },
    { id: 6, name: "Fish Curry", salePrice: 200, realPrice: 250, imgLink: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min-750x750.jpg", qty: 1 },
  ];
  // Function add to cart
  const addToCart = (item: { id: number, name: string, salePrice: number, realPrice: number, imgLink: any, qty: number }) => {
    const updateCart = [...Cart, item];
    const getCart = JSON.parse(localStorage.getItem("P-Cart") || "[]");
    const findProdId = getCart.find((product:any) => product.id === item.id);
    if (findProdId) {
      console.log("found", findProdId.id, item.id);
    } else {
      console.log("not found");
      setCart(updateCart);
      localStorage.setItem("P-Cart", JSON.stringify(updateCart));
    }
  }
  useEffect(() => {
    console.log(Cart);
  }, [Cart]);
  return (
    <div>
      <div id="product-container" className="w-[50vw] max-sm:w-[90vw] mx-auto mt-3.5">
        <h2 className="text-lg mb-0.5 font-medium underline">
          Choose your favorites from our best-selling non-veg delights!
        </h2>
        <div
          id="product-cards"
          className="border border-gray-300 rounded-lg py-2 px-2 overflow-x-auto flex flex-row items-center gap-1.5"
        >
          {/* Card */}
          {productArray.map((product: any) => (
            <div
              id="card"
              className="flex flex-col justify-start border border-gray-200 w-fit p-1.5 rounded-lg gap-1.5 h-fit"
              key={product.id}
            >
              <img
                src={product.imgLink}
                className="w-full h-[150px] rounded-lg object-cover flex-shrink-0"
              />
              <p className="w-44 line-clamp-2 font-medium">{product.name}</p>
              <p className="text-sm">1 Piece</p>
              <div className="flex flex-row gap-2.5 items-start">
                <p className="font-semibold text-2xl">₹{product.salePrice}</p>
                <p className="line-through text-md">₹{product.realPrice}</p>
              </div>
              <div className="w-full text-center">
                <button className="bg-amber-400 w-full rounded-lg py-1.5 cursor-pointer hover:bg-amber-500 transition-all font-medium" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
