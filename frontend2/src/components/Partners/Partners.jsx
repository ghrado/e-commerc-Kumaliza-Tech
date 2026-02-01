import React from 'react'
import brand1 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/brands/br-1.png'
import brand2 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/brands/br-2.png'
import brand3 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/brands/br-3.png'
import brand4 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/brands/br-4.png'
import brand5 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/brands/br-5.png'

const Partners = () => {
  return (
    <div className='py-8 mt-24 bg-gray-200 dark:bg-white/10'>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-items-center 
            items-center gap-6 md:gap-10 opacity-50">
              <div className=''>
                <img src={brand1} alt="brand" className='w-[60px] md:w-[80px] dark:invert'/>
                <img src={brand2} alt="brand" className='w-[60px] md:w-[80px] dark:invert'/>
                <img src={brand3} alt="brand" className='w-[60px] md:w-[80px] dark:invert'/>
                <img src={brand4} alt="brand" className='w-[60px] md:w-[80px] dark:invert'/>
                <img src={brand5} alt="brand" className='w-[60px] md:w-[80px] dark:invert'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Partners