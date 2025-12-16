import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/potholder.webp";
import img2 from "../../assets/kitchentowel.webp";
import img3 from "../../assets/apron.webp";
import img4 from "../../assets/curtains.webp";
import img5 from "../../assets/96.jpg";
import img6 from "../../assets/97.jpg";

const items = [
  { title: "Pot holders", img: img1 },
  { title: "kitchen towel", img: img2 },
  { title: "apron", img: img3 },
  { title: "curtains", img: img4 },
  { title: "Table mats", img: img5 },
  { title: "chair cushions", img: img6 },
];

const DiscoverSlider = () => {
  return (
    <section className='w-full py-16 bg-[#ededed]'>
        <h2 className='text-center text-2xl md:text-3xl font-brand tracking-widest text-[#7C0A02] uppercase mb-12'>shop our best sellers</h2>
        <div className='max-w-7xl mx-auto px-4'>
            <Swiper modules={[Autoplay]} autoplay={{delay:1500, disableOnInteraction:false}} loop={true}
            spaceBetween={30} slidesPerView={1} breakpoints={{640:{slidesPerView: 2}, 1024: {slidesPerView: 3},}}>
                {items.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <div className='bg-white p-6 shadow-sm text-center flex flex-col items-center'>
                            <h3 className='text-xl tracking-[0.4em] uppercase text-[#7C0A02]'>
                                {item.title}
                            </h3>
                            <div className='h-px w-12 bg-[#a45732] my-4'></div>
                            
                            <img src={item.img} alt={item.title} className='w-full h-55 object-cover object-center mt-5'/>
                        </div>
                    </SwiperSlide>
                )
                
            )}
            </Swiper>
        </div>
    </section>
  )
}

export default DiscoverSlider
