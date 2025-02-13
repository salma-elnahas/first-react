import React from 'react'
import Home from './components/Home/Home'
import Introduction from './components/Introduction.jsx/Introduction'
import Work from './components/Work/Work'
import ContactUs from './components/ContactUs/ContactUs'

 

function App() {
  return (
    <div className='bg-white'>
      <Home />
      <Introduction />
      <Work />
      <ContactUs/>
    </div>
  )
}

export default App