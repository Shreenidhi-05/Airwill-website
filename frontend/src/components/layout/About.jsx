import React from 'react'

const About = () => {
  return (
    <section  className='bg-[#ededed] py-16 px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
        <div className='text-container px-4'>
          <h2 className='text-3xl font-brand tracking-widest text-[#7c0a02] mb-4] uppercase'>About us</h2><br/>
          <p className='font-montserrat leading-relaxed'>
            Airwill Home Collections Private Limited was founded in 1993 and has since grown into a leading manufacturer and exporter of high-quality home and kitchen furnishing items. Our commitment to excellence is reflected in the large number of repeat orders from renowned business houses, and our solid reputation within the industry.
          </p>
          <p className="font-montserrat text-base leading-relaxed text-gray-800 mb-6">
        We specialize in a <strong>diverse range of home textiles</strong>, offering products that cater to a variety of needs. Whether you're looking to elevate your kitchen, bedroom, or bathroom, we have something for everyone. Our offerings include:
      </p>
      <ul className=" text-base font-montserrat list-disc ml-6 text-gray-800 mb-6">
        <li>Kitchen Linen</li>
        <li>Table Linen</li>
        <li>Bed Linen</li>
        <li>Bath Linen</li>
        <li>Living Products</li>
        <li>Promotional Items</li>
      </ul>

      <p className="font-montserrat text-base leading-relaxed text-gray-800 mb-6">
        As a proud manufacturer of <strong>cotton home textiles</strong>, we take great pride in offering an extensive selection that includes dyed, plain, velour, printed, embroidered, and even fancy cotton options. We also specialize in unique features like viscose borders and applique work.
      </p>

      <p className="font-montserrat text-base leading-relaxed text-gray-800 mb-6">
        Our products are crafted from the finest quality <strong>cotton</strong> and fabrics sourced from trusted vendors. We ensure that every item meets our high standards of durability, comfort, and style, making it perfect for both everyday use and special occasions.
      </p>
        </div>
        <div className='image-container'>
        <div className=' flex'>
          <img src="../src/assets/about2.jpg" alt="about image" className='w-80 object-cover '/>
          <img src="../src/assets/about3.webp" className=' w-80 object-cover'></img>
        </div>
          <img src="../src/assets/oopopo-1000x1000.webp" alt="about image" className='w-full h-auto object-cover '/>
        </div>
      </div>

    </section>
  )
}

export default About
