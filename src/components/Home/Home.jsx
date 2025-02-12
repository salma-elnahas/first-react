import React from 'react'
import UpHome from './UpHome'
import DownHome from './DownHome'

function Home() {
  return (
      <div className='bg-[url(/the-town.jpg)] bg-cover bg-bottom h-screen w-full ' id='home'>    
           <UpHome/>
           <DownHome/>
    </div>
  )
}

export default Home