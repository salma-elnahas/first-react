import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaMapMarkedAlt } from "react-icons/fa";



function ContactUs() {
  return (
      <div id='contact' className='bg-[url(/the-town-02.jpg)] bg-cover bg-bottom w-full h-screen bg-fixed flex flex-col justify-evenly mt-10'>
          <div className='p-10 '>
              <h1 className='text-5xl '>Contact Us </h1>
              <p className='text-lg'>Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui, non tempus sem turpis vitae lorem. Maecenas eget odio in sapien ultrices viverra vitae vel leo. Curabitur at elit eu risus pharetra pellentesque at at velit.</p>
          </div>
          <div className='pl-20 justify-center-center text-3xl grid grid-flow-col grid-rows-2 gap-5 '>
              <div className='pb-10'>
                  <a href="##">
                      <BsFillTelephoneFill />
                      <span>0123456789</span>
                  </a>
              </div>
              <div>
                  <a href="mailto:someone@example.com">
                      <CgMail />
                      <span>info@mail.com</span>
                  </a>
              </div>
              <div>
                  <a href="https://www.google.com/maps">
                        <FaMapMarkedAlt />
                       <span>Location on Maps</span>
                  </a>
              </div>
              <div>
                  <p className='text-lg'>Enter your email address</p>
                <input
              type="text"
              placeholder="username@site.com"
             className="input input-bordered join-item" />
             <button className="btn btn-md join-item bg-white text-black">Subscribe</button>
           </div>
          </div>
            
            
         </div>
  )
}

export default ContactUs