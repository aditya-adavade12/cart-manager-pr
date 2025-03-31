import React, { useEffect, useState } from 'react';

const Cart: React.FC = () => {
    // Get data from Localstorage
    interface Cart {
        id: number,
        name: string,
        img: any,
        price: number,
        qty: number
    }
    const [cart, setCart] = useState<Cart[]>(() => {
        return JSON.parse(localStorage.getItem("Cart") || "[]");
    })
    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem("Cart") || "[]");
        setCart(getData);
    }, []);
    // Quantity
    const increaseQty = (id:number) => {
        let updateData = cart.map((item:Cart) => {
            return item.id === id ? {...item, qty: item.qty + 1} : item
        });
        setCart(updateData);
        localStorage.setItem("Cart", JSON.stringify(cart));
    };
    const decreaseQty = (id:number) => {
        let updateData = cart
        .map((item:Cart) => {
            return item.id === id ? {...item, qty: item.qty - 1} : item
        })
        .filter((item) => item.qty > 0)
        setCart(updateData);
        localStorage.setItem("Cart", JSON.stringify(updateData));
    };
    // Remove a product
    const removeProduct = (id:number) => {
        const ask = window.confirm("Are you sure!");
        if (ask) {
            let getData = JSON.parse(localStorage.getItem("Cart") || "[]");
            const newUpdate = getData.filter((p:Cart) => p.id !== id);
            setCart(newUpdate);
            localStorage.setItem("Cart", JSON.stringify(newUpdate));
        }
    }
    return (
        <div className='w-[50vw] mx-auto max-sm:w-[90vw]'>
            <div id="cart-container" className='mt-20'>
                <div id="cart">
                    {
                        cart.map((item: any, i: number) =>
                            <div id="cart-item" className='flex py-1 px-2 flex-row items-center border justify-between border-stone-800 gap-1.5 rounded-lg' key={i}>
                                <img src={item.img} className='w-[50px] h-[50px] rounded-lg object-cover max-sm:hidden' />
                                <p className='w-3xs line-clamp-1'>{item.name}</p>
                                <p className='text-lg'>₹{item.price}</p>
                                <div className='flex flex-row gap-2.5 items-center text-xl bg-blue-500 px-0.5 py-0.5 rounded-lg border border-blue-700'>
                                    <button className='cursor-pointer flex' onClick={() => increaseQty(item.id)}>
                                        <span className="flex material-symbols-outlined">
                                            add
                                        </span>
                                    </button>
                                    <p>{item.qty}</p>
                                    <button className='cursor-pointer flex' onClick={() => decreaseQty(item.id)}>
                                        <span className="flex material-symbols-outlined">
                                            remove
                                        </span>
                                    </button>
                                </div>
                                <button onClick={() => removeProduct(item.id)} className='flex cursor-pointer bg-red-500 py-1 px-1 rounded-lg hover:opacity-80'><span className="flex material-symbols-outlined">
                                    delete
                                </span></button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Cart
