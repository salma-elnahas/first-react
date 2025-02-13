import React from 'react'

function UpHome() {
  return (
      <div>
         <div className="navbar  bg-lineColor shadow-sm flex justify-between">
        <a className="btn btn-ghost hover:bg-lineColor text-xl ">The Town</a>
        <div className='flex gap-4'>
          <a href="#introduction" className='btn btn-ghost text-xl hover:bg-lineColor'>Introduction </a>
          <a href="#work" className=' btn btn-ghost text-xl hover:bg-lineColor'>Our Work</a>
          <a href="#contact" className='btn btn-ghost text-xl hover:bg-lineColor' >Contact Us</a>
        </div>
          </div>
    </div>
  )
}

export default UpHome