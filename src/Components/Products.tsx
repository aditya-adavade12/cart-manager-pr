import React from 'react'

const Products:React.FC = () => {
  return (
    <div>
      <div id="product-container" className='w-[50vw] mx-auto mt-3.5'>
        <h2 className='text-lg mb-0.5 font-medium'>Choose your favorites from our best-selling non-veg delights! </h2>
        <div id="product-cards" className='border border-gray-300 rounded-lg py-2 px-2 overflow-x-auto'>
          {/* Card */}
          <div id="card" className='flex flex-col justify-start border border-gray-200 w-fit p-1.5 rounded-lg gap-1.5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDxyYy0VqUFfAG46jdg4cVLUYU96QqcURLA&s" className='w-full h-[150px] rounded-lg' />
            <p className='w-44 line-clamp-2 font-medium'>This is the title for product Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe.</p>
            <div className='flex flex-row gap-2.5 items-start'>
              <p className='font-semibold text-2xl'>$499</p>
              <p className='line-through text-md'>$599</p>
            </div>
            <div className='w-full text-center'>
              <button className='bg-amber-400 w-full rounded-lg py-1.5 cursor-pointer hover:bg-amber-500 transition-all font-medium'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
