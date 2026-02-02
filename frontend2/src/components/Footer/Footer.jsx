import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
          <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/*Detalhes da Empresa*/}
            <div className='py-8 px-4'>
              <a 
                    href="#"
                    className='text-primary 
                    font-semibold tracking-widest
                    text-2xl uppercase sm:text-3xl'>
                        Kumaliza Tech
              </a>
              <p className='text-gray-600 mt-4'>
                Kumaliza Tech da incubadora de negocios da UEM é uma startup focada em fornecer solucoes tecnologicas inovadoras
              </p>
              <p className='text-gray-500'>
                 Made with ❤️ by Ghrado 2026
              </p>
            </div>
          </div>
        </div>   
    </div>
  )
}

export default Footer