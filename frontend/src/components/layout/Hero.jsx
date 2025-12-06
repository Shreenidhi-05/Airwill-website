import React from 'react'
import heroImg from "../../assets/header5.jpg"
import Logo from "../../assets/logo-wobg.png"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='w-full relative h-[95vh] bg-cover bg-center bg-fixed flex items-center justify-center' style={{backgroundImage: `url(${heroImg})`}}>
        <div className='absolute inset-0 bg-black/25'></div>
        <div className='relative z-10 flex flex-col items-center text-white text-center gap-6 px-4'>
            <div className='flex items-center gap-6 text-base md:text-4xl tracking-[0.35em] uppercase'>
                <span className='hidden md:block h-px w-12 bg-white'/>
                <span>ESTB</span>
                <img src={Logo} alt="logo" className='w-30 h-30 object-contain'/>
                <span>2010</span>
                <span className='hidden md:block h-px w-12 bg-white'/>
                </div>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold font-brand tracking-[0.35em] uppercase'> AIRWILL HOME COLLECTIONS</h1>
                    <p className='text-m md:text-base font-semibold tracking-[0.45em] uppercase '>
                        every corner, a comfort.
                    </p>
                    <a href="https://airwill.in/" target="_blank" rel="noopener noreferrer" className='mt-4 px-10 py-3 bg-[#7C0A02] text-white font-medium tracking-wide uppercase hover:bg-[#FA8072] transition inline-block'>Shop now</a>
                </div>
            </div>
        
    </section>
  )
}

export default Hero
