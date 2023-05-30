import React from 'react'
import web3desktop from '../assets/images/image-web-3-desktop.jpg'
import web3mobile from '../assets/images/image-web-3-mobile.jpg'
import retro from '../assets/images/image-retro-pcs.jpg'
import laptops from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'
import Hero from './Hero'
import New from './New'
import List from './List'

function Main() {
  return (
    <div className='p-4 md:px-[10rem]'>
      <div className='md:flex md:items-start h-full gap-10 '>
        <Hero
          web3desktop={web3desktop}
          web3mobile={web3mobile}
        />
        <New />
      </div>
      <List 
        retro={retro}
        laptops={laptops}
        gaming={gaming}
      />
    </div>
  )
}

export default Main