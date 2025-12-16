import React from 'react'
import  {products} from "../data/products"
import { useLocation } from 'react-router-dom';
const Product = () => {
    const location = useLocation();
    const params= new URLSearchParams(location.search);
    const category = params.get("category");
    const visibleProducts = category ? products.filter((p)=> p.category && p.category.toLowerCase() === category.toLowerCase()): products;
  return (
    <section className='py-16 px-6 bg-[#ededed]'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='font-brand text-3xl tracking-widest text-[#7C0A02] uppercase mb-10'>
                our products
            </h2>
            
                {visibleProducts.length === 0? (
                    <p className='text-center text-[#7C0A02]'>No Products Found</p>
                ): (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
                {visibleProducts.map((product)=>(
                    <div 
                        key={product.id} className='group cursor-pointer'>
                            <div className='overflow-hidden flex justify-center h-64'>
                                <img src={product.image} alt={product.name} className='w-full h-64 object-cover transform group-hover:scale-105 transition duration-300'/>
                            </div>
                            <h3 className='mt-4 text-lg font-montserrat text-[#7C0A02] tracking-wide'>
                                {product.name}
                            </h3>
                    </div>
                ))}
            </div>
                )}
        </div>
    </section>
  )
}

export default Product
