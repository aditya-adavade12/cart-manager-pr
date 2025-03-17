import React from 'react'

const Cart: React.FC = () => {
  return (
    <div>
      <div id="container" className='w-[50vw] mx-auto mt-4'>
        <h2>Your Cart</h2>
        <div id='cart-box'>
          <div id='cart-item' className='flex flex-row gap-1.5 justify-start items-start border border-gray-300 p-1 rounded-lg'>
            <div>
              <img src="/" className='w-[80px] h-full border border-black rounded-lg' />
            </div>
            <div>
              <p className='line-clamp-2 font-medium'>This is title of item Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, commodi.</p>
              <p className='font-semibold text-xl'>$199</p>
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
        </div>
      </div>
    </div>
  )
}

export default Cart
