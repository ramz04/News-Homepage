import React from 'react'

function Hero(props) {
  return (
    <div>
        <div className='hero--section md:basis-3/4 h-full'>
          <picture>
            <source media='(min-width:640px)' srcSet={props.web3desktop} />
            <img src={props.web3mobile} className='' />
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
    </div>
  )
}

export default Hero