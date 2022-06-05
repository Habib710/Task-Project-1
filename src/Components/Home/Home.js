import React, { useEffect, useState } from 'react'
import Gallery from '../Gallery/Gallery'
import './Home.css'

const Home = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    fetch(
      'https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product',
    )
      .then((res) => res.json())
      .then((data) => setproducts(data))
  }, [])
  console.log(products)
  return (
    <div>
      <section className="row  m-4  ">
        {/* Gallery div ........... */}

        <div className="col-6 mygallery-css text-center">
          {products?.gallery?.map((pic) => (
            <Gallery picture={pic}></Gallery>
          ))}
        </div>

        {/* product details div........... */}

        <div className="col-6   ">
            <h3>{products.title}</h3>
            <br />
            <h4 className='price-css'>Price : $ {products?.price?.discounted} <span className='old-price'>  $ {products?.price?.old}</span> (20% OFF)</h4>
            {/* color div........... */}
            <div className=''>


            </div>

        </div>

      </section>
    </div>
  )
}

export default Home
