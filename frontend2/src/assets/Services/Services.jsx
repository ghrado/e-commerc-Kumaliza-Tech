import { data } from 'autoprefixer'
import React from 'react'
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from 'react-icons/fa'

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders',
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: '24/7 Support',
    description: 'Support online 24/7',
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Secure Payment',
    description: 'All payments Secure',
  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Safe Money',
    description: '30 days money back',
  },
]

const Services = () => {
  return (
    <div className='container mt-14 md:mt-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
        {ServiceData.map((service) => (
          <div key={service.id} className='flex items-start gap-4'>
            {service.icon}
            <div className='flex flex-col'>
              <h1 className='lg:text-xl font-semibold'>{service.title}</h1>
              <h1 className='text-gray-400 text-sm'>{service.description}</h1>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Services