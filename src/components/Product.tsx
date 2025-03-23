import React, { useEffect, useState } from 'react'

const Product: React.FC = () => {
    // Product array of objects
    const productArray: any = [
        { id: 1, name: "Spicy Chettinad Chicken", price: 3499, img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/chicken_chettinand_made_from_non-veg_spices_480x480.jpg?v=1693671559", qty: 1 },
        { id: 2, name: "Chicken 65", price: 9499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png", qty: 1 },
        { id: 3, name: "Prawn Thokku", price: 8499, img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/prawn_thokku_480x480.jpg?v=1693671877", qty: 1 },
        { id: 4, name: "Egg Bhurji", price: 2499, img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/spicy_egg_bhurji_480x480.jpg?v=1693672157", qty: 1 },
        { id: 5, name: "Lamb Chops", price: 1499, img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/lamb_chops_480x480.jpg?v=1693673499", qty: 1 },
        { id: 6, name: "Butter Chicken", price: 2499, img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/butter_chicken_masala_480x480.jpg?v=1693674488", qty: 1 }
    ]
    // Add to cart
    interface Cart {
        id: number,
        name: string,
        img: any,
        price: number,
        qty: number
    }
    const [cart, setCart] = useState<Cart[]>(() => {
        return JSON.parse(localStorage.getItem("Cart") || "[]");
    });
    // Syncing cart state with localstorage

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cart));    
    }, [cart]);

    const addtoCart = (item:any) => {
        setCart((prevCart) => {
            // Cart checking for product id
            const updateCart = prevCart.map((product) =>
                product.id === item.id ? {...product, qty: product.qty + 1} : product,
            );
            // Item exist
            const itemExists = prevCart.some((product) => product.id === item.id)
            return itemExists ? updateCart : [...prevCart, {...item, qty : 1}];
        })
    }
    return (
        <div className='w-[50vw] mx-auto'>
            {/* Product Container */}
            <div id="product-container" className='w-[50vw] mt-20'>
                <div id="products" className="flex flex-row w-[50vw] overflow-x-scroll gap-2.5">
                    {productArray.length > 0 ? (
                        productArray.map((item: any) => (
                            <div
                                id="item"
                                key={item.id}
                                className="w-fit border border-stone-800 p-2 rounded-lg flex flex-col gap-1.5"
                            >
                                <img src={item.img} className="w-full h-[150px] rounded-lg object-cover" alt={item.name} />
                                <p className="w-44 line-clamp-2">{item.name}</p>
                                <p>₹{item.price}</p>
                                <div>
                                    <button className="bg-blue-500 py-1 cursor-pointer w-full rounded-lg hover:opacity-80" onClick={() => addtoCart(item)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No products available</div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Product
