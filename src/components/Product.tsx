import React from 'react'

const Product: React.FC = () => {
    const productArray: any = [
        { id: 1, name: "Chicken 65", price: 3499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" },
        { id: 2, name: "Chicken 65", price: 9499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" },
        { id: 3, name: "Chicken 65", price: 8499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" },
        { id: 4, name: "Chicken 65", price: 2499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" },
        { id: 5, name: "Chicken 65", price: 1499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" },
        { id: 6, name: "Chicken 65", price: 2499, img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-2_Rogan-Josh-1024x538.png" }
    ]
    return (
        <div className='w-[50vw] mx-auto'>
            {/* Product Container */}
            <div id="product-container" className='w-[50vw] mt-20'>
                <div id="products" className="flex flex-row w-[50vw] overflow-x-scroll">
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
                                    <button className="bg-blue-500 py-1 cursor-pointer w-full rounded-lg hover:opacity-80">
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
