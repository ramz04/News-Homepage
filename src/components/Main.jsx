import React from 'react'
import web3desktop from '../assets/images/image-web-3-desktop.jpg'
import web3mobile from '../assets/images/image-web-3-mobile.jpg'
import retro from '../assets/images/image-retro-pcs.jpg'
import laptops from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

function Main() {
  return (
    <div className='p-4 md:px-[10rem]'>
      <div className='md:flex md:items-start h-full gap-10 '>
        <div className='hero--section md:basis-3/4 h-full'>
          <picture>
            <source media='(min-width:640px)' srcSet={web3desktop} />
            <img src={web3mobile} className='' />
          </picture>
          <div className='md:flex gap-20'>
            <h2 className='text-4xl md:text-5xl tracking-widest font-black md:basis-1/2 text-Verydarkblue mt-4 tracking-wide'>
              The Bright Future of Web 3.0?
            </h2>
            <div className='basis-1/2'>
            <p className='text-xs tracking-wide md:text-sm md:tracking-widest mt-3 text-Darkgrayishblue '>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?
            </p>
            <button className='mt-3 md:mt-5 bg-Softred text-Offwhite hover:bg-Verydarkblue py-2 px-4 uppercase font-bold '>Read more</button>
            </div>
          </div>
        </div>
        <div className='new--section w-full bg-Verydarkblue px-4 py-6 md:px-6 md:py-10 md:basis-1/4 md:mt-0 mt-6'>
          <h1 className='text-Softorange font-bold md:text-3xl'>New</h1>
          <div className='mt-4 md:mt-5'>
            <div className='text-Offwhite'>
                <h2 className=' text-sm font-bold md:text-lg'>Hydrogen VS Electric Cars</h2>
                <p className=' text-xs md:text-sm mt-1 md:mt-3 text-Grayishblue'>  
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
                <hr  className='mt-5 brightness-50 '/>
            </div>
            <div className='text-Offwhite mt-4 md:mt-5'>
                <h2 className=' text-sm font-bold md:text-lg'>  The Downsides of AI Artistry
                </h2>
                <p className=' text-xs md:text-sm md:mt-3 mt-1 text-Grayishblue'>  
                What are the possible adverse effects of on-demand AI image generation?
                </p>
                <hr  className='mt-5 brightness-50 '/>
            </div>
            <div className='text-Offwhite mt-4 md:mt-5'>
                <h2 className=' text-sm font-bold md:text-lg'>  Is VC Funding Drying Up?</h2>
                <p className=' text-xs mt-1 md:text-sm md:mt-3 text-Grayishblue'>  
                Private funding by VC firms is down 50% YOY. We take a look at what that means.                </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 md:grid space-y-6 md:space-y-0 md:gap-x-14 md:place-content-center md:grid-cols-3'>
        <div className='flex gap-5'>
          <img src={retro} className='w-[100px]'/>
          <div className='space-y-3'>
            <h1 className='text-2xl font-black text-Grayishblue'>01</h1>
            <h3 className='font-bold tracking-wide'>Revivng Retro PCs</h3>
            <p className='text-sm text-Darkgrayishblue '>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={laptops} className='w-[100px]'/>
          <div className='space-y-3 '>
            <h1 className='text-2xl font-black text-Grayishblue'>02</h1>
            <h3 className='font-bold tracking-wide'>  Top 10 Laptops of 2022</h3>
            <p className='text-sm text-Darkgrayishblue '>  Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={gaming} className='w-[100px]'/>
          <div className='space-y-3'>
            <h1 className='text-2xl font-black text-Grayishblue'>03</h1>
            <h3 className='font-bold tracking-wide'>The Growth of Gaming</h3>
            <p className='text-sm text-Darkgrayishblue '>  How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main