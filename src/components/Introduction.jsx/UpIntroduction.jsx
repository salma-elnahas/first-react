import React from 'react'

function UpIntroduction() {
  return (
      <div id="introduction" className='flex justify-center gap-3 w-full flex-col md:flex-row   '> 
          <img className=' object-cover p-3.5 m-3.5 ' src="/public/the-town-01.jpg" alt="Error" />
          <div className='flex justify-evenly  flex-col  text-2xl text-mainColor text-left m-3 w-[40%]'>
              <h1 className='text-4xl font-bold'>Introduction</h1>
              <p>The Town is <span className='font-bold'>simple CSS template</span> built on Bootstrap v4.1.3 and this is a little parallax layout that you can use for your websites.</p>
              <p>Please tell your friends about our site templatemo. Thank you. Curabitur dapibus tristique enim a imperdiet. Etiam tristique sem sed condimentum posuere.</p>
              <a href='#work' className=" self-center bg-mainColor btn btn-outline  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Read More</a>
          </div>
          
    </div>
  )
}

export default UpIntroduction