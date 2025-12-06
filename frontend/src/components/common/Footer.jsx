import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
        <footer className='bg-[#7C0A02] text-[#ededed]'>
            <div className='max-w-6xl mx-auto px-4  pt-8 space-y-16'>
                <div className='grid gap-12 text-center md:grid-cols-2 md:text-left'>
                    <div>
                        <h3 className='font-brand text-xl tracking-[0.1em]] uppercase mb-6'>
                            office address
                        </h3>
                        <p className='font-montserrat text-m leading-relaxed'>
                            Airwill Home Collections Pvt Ltd <br/>
                            S.F.No:170 A1A1A, Naval Nagar (opp), <br/>
                            Kathaparai Village, Vennamalai (po),<br/>
                            Karur - 639006,<br/>
                            Tamil Nadu, India
                        </p>
                        <p className='font-montserrat text-m mt-4'>
                            <a href="https://airwill.in/" target='_blank' rel="noopener noreferrer" className='inline-block bg-[#A45A52] shadow-md text-[#ededed] hover:text-[#FA8072] underline px-6 py-3 shadow-md transition duration-300 uppercase'>
                            SHOP NOW
                            </a>
                            </p>
                    </div>
                    <div>
                        <h3 className='font-brand text-xl tracking-[0.1em] uppercase mb-6'>
                            Contact
                        </h3>
                        <p className='font-montserrat text-m leading-relaxed flex items-center gap-3'>
                            <FaPhoneAlt />
                            <span>+91 9629726412</span>
                        </p>
                        <p className='font-montserrat text-m leading-relaxed flex items-center gap-3'>
                            <MdEmail />
                            <span>enquiry@airwillhomecollections.com</span>
                        </p>
                        
                    </div>
                </div>
            </div>
            
            <div className='mt-12 px-6 pb-5'>
                <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4293696594573!2d78.0718109!3d11.0063766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fa98e4c0001%3A0xb959fafb346c2c85!2sAirwill%20Home%20Collections%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1764477782244!5m2!1sen!2sin"
      width="600"
      height="450"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className="w-full h-64 rounded-lg border border-gray-400 shadow-lg"
    ></iframe>
            </div> 
        </footer>
    </>
  )
}

export default Footer
