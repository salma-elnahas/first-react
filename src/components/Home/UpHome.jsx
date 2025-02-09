import React from 'react'

function UpHome() {
  return (
      <div>
          <div id='home' className=' text-3xl font-medium text-white flex justify-between p-4 m-4'>
              <a className='mx-3 hover:text-blue-700' href='#home'>Home</a>
              <div className='flex gap-6 justify-between '>
                <a className=' hover:text-blue-700'>Introduction</a>
                <a className=' hover:text-blue-700'> Our Work</a>
                <a className=' hover:text-blue-700' href=''>Contact Us</a>
              </div>
                
          </div>
    </div>
  )
}

export default UpHome