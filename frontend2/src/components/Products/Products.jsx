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
       price: '9500.00 MT',
       aosDelay: '0',
    },
    {
         id: 2,
         img: Img2,
         title: 'Rocky Montain',
         price: '2500.00 MT',
         aosDelay: '200',
    },
    {
            id: 3,
            img: Img3,
            title: 'Goggles',
            price: '15000.00 MT',
            aosDelay: '400',
    },
    {
            id: 4,
            img: Img4,
            title: 'printed',
            price: '1500.00 MT',
            aosDelay: '600',
    },
]
const ProductsData2 = [
    {
       id: 1,
       img: Img5,
       title: 'Best Headphone', 
       price: '9500.00 MT',
       aosDelay: '0',
    },
    {
         id: 2,
         img: Img5,
         title: 'Rocky Montain',
         price: '2500.00 MT',
         aosDelay: '200',
    },
    {
            id: 3,
            img: Img6,
            title: 'Goggles',
            price: '15000.00 MT',
            aosDelay: '400',
    },
    {
            id: 4,
            img: Img7,
            title: 'printed',
            price: '1500.00 MT',
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
             <ProdutCard data={ProductsData2}/>
        </div>
    </div>
  )
}

export default Products