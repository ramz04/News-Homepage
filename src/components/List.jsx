import React from 'react'

function List(props) {
  return (
    <div>
        <div className='mt-10 md:grid space-y-6 md:space-y-0 md:gap-x-14 md:place-content-center md:grid-cols-3'>
        <div className='flex gap-5'>
          <img src={props.retro} className='w-[100px]'/>
          <div className='space-y-3'>
            <h1 className='text-2xl font-black text-Grayishblue'>01</h1>
            <h3 className='font-bold tracking-wide'>Revivng Retro PCs</h3>
            <p className='text-sm text-Darkgrayishblue '>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={props.laptops} className='w-[100px]'/>
          <div className='space-y-3 '>
            <h1 className='text-2xl font-black text-Grayishblue'>02</h1>
            <h3 className='font-bold tracking-wide'>  Top 10 Laptops of 2022</h3>
            <p className='text-sm text-Darkgrayishblue '>  Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={props.gaming} className='w-[100px]'/>
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

export default List