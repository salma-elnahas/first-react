import React from 'react'
import { FaBus } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";


function DownIntroduction() {
  return (
      <div className='flex flex-col justify-evenly gap-4 p-3 m-3 text-mainColor'>
          <div>
              <FaBus className='stroke-3 stroke-mainColor text-center text-4xl m-5 hover:animate-bounce' />
              <h2 className='text-2xl font-bold'>Curabitur at elit eu risus</h2>
              <p className='text-xl'>Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus. Duis imperdiet lacus justo.
                  
              </p>
          </div>
          <div>
              <FaBicycle  className='stroke-3 stroke-mainColor text-center text-4xl m-5  hover:animate-bounce'/>
              <h2 className='text-2xl font-bold'>Nunc sed metus vel nisi</h2>
              <p className='text-xl'>Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc. Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus nisi, sed fringilla purus. In hac habitasse platea.</p>
          </div>
          <div>
              <FaBuilding  className='stroke-3 stroke-mainColor text-center text-4xl m-5  hover:animate-bounce'/>
              <h2 className='text-2xl font-bold'>Fusce sed nisi sagittis</h2>
              <p className='text-xl'>Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus.</p>
          </div>
        
      </div>
  )
}

export default DownIntroduction