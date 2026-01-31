import React from 'react'
import Heading from '../Shared/Heading'
import ProdutCard from './ProductCard'

//images
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img6 from '../../assets/product/p-7.jpg'
import Img7 from '../../assets/product/p-9.jpg'

const ProductsData = [
    {
       id: 1,
       img: Img1,
       title: 'Best Headphone', 
       price: '$99.00',
       aosDelay: '0',
    },
    {
         id: 2,
         img: Img2,
         title: 'Rocky Montain',
         price: '$199.00',
         aosDelay: '200',
    },
    {
            id: 3,
            img: Img3,
            title: 'Goggles',
            price: '$299.00',
            aosDelay: '400',
    },
    {
            id: 4,
            img: Img4,
            title: 'printed',
            price: '$49.00',
            aosDelay: '600',
    },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Heading Section */}
            <Heading title="Featured Products" subtitle="Discover our most popular products" />
             {/* body Section */}
             <ProdutCard data={ProductsData}/>
        </div>
    </div>
  )
}

export default Products