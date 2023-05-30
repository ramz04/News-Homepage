import React from 'react'

function New() {
  return (
    <div>
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
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New