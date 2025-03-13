import React from 'react'

const CartSummary: React.FC = () => {
  return (
    <div>
      <div id="summary" className='w-[50vw] mx-auto'>
        <div>
          <h2 className='text-xl font-semibold'>Order Summary</h2>
        </div>
        {/* Products Lists */}
        <div className='mt-2.5'>
          <div id='product' className='border border-black flex flex-row items-center gap-3.5 w-fit p-2 rounded-lg'>
            <span><img src="https://www.nalis.gov.tt/wp-content/uploads/2024/04/local-fruits-banana.jpg" className='w-[50px] h-[50px] rounded-lg object-center' /></span>
            <span className='line-clamp-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis aut blanditiis? Rem possimus amet, error nobis ipsa ullam aliquam.</span>
            <span className='text-lg font-medium text-green-800'>$499</span>
            <div className='flex flex-row items-center gap-1.5 text-xl bg-amber-200 p-1 rounded-lg'>
              <button><span className="flex material-symbols-outlined">
                remove
              </span></button>
              <span>4</span>
              <button>
                <span className="flex material-symbols-outlined">
                  add
                </span>
              </button>
            </div>
            <span>delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
