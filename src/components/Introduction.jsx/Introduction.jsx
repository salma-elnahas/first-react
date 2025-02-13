import React from 'react'
import UpIntroduction from './UpIntroduction'
import DownIntroduction from './DownIntroduction'

function Introduction() {
  return (
      <div className='w-full bg-white mt-10'>
          <UpIntroduction />
          <DownIntroduction/>
      </div>
  )
}

export default Introduction