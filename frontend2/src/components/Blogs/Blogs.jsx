import React from 'react'
import Heading from '../Shared/Heading'
import { data } from 'autoprefixer'

//import images
import img1 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/blogs/blog-1.jpg'
import img2 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/blogs/blog-2.jpg'
import img3 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/blogs/blog-3.jpg'

const BlogData = [
    {
        title: 'How to use Perfect Smartwatch',
        subtitle: 'a historia toda por tras do uso dos relogios inteligentes e porque viraram uma febre, ate Stelio ja usa.',
        published: '20 de Janeiro, 2026 por Ghrado',
        image: img1,
    },
    {
        title: 'How to choose a Perfect gadget',
        subtitle: 'essa eh das dicas mais dificeis de dar porque ate o chines que nos vende, diz que todos sao bons, entao se fera na escolha tambem',
        published: '15 de Janeiro, 2026 por Ghrado',
        image: img2, 
    },
    {
        title: 'How to choose a Perfect VR headset',
        subtitle: 'primeira dica talvez a mais importante, tem que caber na tua cabeça, porque malta voces tem cabeças grandes',
        published: '15 de Janeiro, 2026 por Ghrado',
        image: img3, 
    },
]


const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            {/* Heading Section */}
            <Heading title="Recent News" subtitle="Explore Our Blogs" />

            {/*Blog Section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-6 gap-y-8 sm:gap-7'>
                {/*Blog Card*/}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-900'>
                            {/*image section*/}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} 
                                className='w-full h-[220px] object-cover
                                rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>
                            {/*content section*/}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600
                                dark:text-gray-400'>
                                    {data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Blogs