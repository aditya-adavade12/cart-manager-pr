import React, { useState } from 'react';

const Cart: React.FC = () => {
    // Quantity
    const [Qty, setQty] = useState<number>(1);
    const increaseQty = () => {
        setQty((prev) => prev + 1);
    };
    const decreaseQty = () => {
        setQty((prev) => prev - 1);
    }
    return (
        <div className='w-[50vw] mx-auto'>
            <div id="cart-container" className='mt-20'>
                <div id="cart">
                    <div id="cart-item" className='flex py-1 px-2 flex-row items-center border justify-between border-stone-800 gap-1.5 rounded-lg'>
                        <img src="/" className='w-[50px] h-[50px] rounded-lg' />
                        <p className='w-3xs line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint?</p>
                        <p className='text-lg'>₹499</p>
                        <div className='flex flex-row gap-2.5 items-center text-xl bg-blue-500 px-0.5 py-0.5 rounded-lg border border-blue-700'>
                            <button className='cursor-pointer flex' onClick={increaseQty}>
                                <span className="flex material-symbols-outlined">
                                    add
                                </span>
                            </button>
                            <p>{Qty}</p>
                            <button className='cursor-pointer flex' onClick={decreaseQty}>
                                <span className="flex material-symbols-outlined">
                                    remove
                                </span>
                            </button>
                        </div>
                        <button className='flex cursor-pointer bg-red-500 py-1 px-1 rounded-lg hover:opacity-80'><span className="flex material-symbols-outlined">
                            delete
                        </span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
