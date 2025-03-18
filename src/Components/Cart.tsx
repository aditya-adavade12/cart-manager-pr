import React, { useEffect, useState } from 'react'

const Cart: React.FC = () => {
  // Load cart from localstorage
  // State of Cart
  const [Cart, setCart] = useState<{ id: number, name: string, salePrice: number, realPrice: number, imgLink: any, qty: number }[]>(
    // Intial State
    JSON.parse(localStorage.getItem("P-Cart") || "[]")
  );
  useEffect(() => {
    () => loadCart
  }, [Cart]);
  const loadCart = () => {
    let getCart = JSON.parse(localStorage.getItem("P-Cart") || "[]");
    if (getCart) {
      setCart(getCart);
    } else {
      console.log("Not Found");
    }
  }
  return (
    <div>
      <div id="container" className='w-[50vw] mx-auto mt-4'>
        <h2>Your Cart</h2>
        <div id='cart-box'>
          {
            Cart.map((item: any) =>
              <div id='cart-item' className='flex flex-row gap-1.5 justify-start items-start border border-gray-300 p-1 rounded-lg'>
                <div>
                  <img src={item.imgLink} className='w-[80px] h-full border border-black rounded-lg' />
                </div>
                <div>
                  <p className='line-clamp-2 font-medium'>{item.name}</p>
                  <p className='font-semibold text-xl'>₹{item.salePrice}</p>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-1.5 py-0.5 rounded-lg items-center bg-black w-fit px-1.5 text-white'>
                      <button className='flex cursor-pointer'><span className="flex material-symbols-outlined">
                        remove
                      </span></button>
                      <span>2</span>
                      <button className='flex cursor-pointer'>
                        <span className="flex material-symbols-outlined">
                          add
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex text-red-500 p-1 rounded-lg cursor-pointer'><span className="flex material-symbols-outlined">
                        delete
                      </span></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
