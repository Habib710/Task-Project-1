import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import Gallery from '../Gallery/Gallery'
import Color from './Color'
import './Home.css'
import Size from './Size'

const Home = () => {
  const [newprice, setnewprice] = useState({ discounted: 23.41, old: 57.22 })
  const [products, setproducts] = useState([])
  const [mycolors, setmycolors] = useState({ id: 771, title: 'Black' })
  const [mysizes, setmysizes] = useState({ id: 200000338, title: '43' })


  useEffect(() => {
    fetch(
      'https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product',
    )
      .then((res) => res.json())
      .then((data) => setproducts(data))
  }, [])
  console.log(products)

  const setTheOrder = async  () => {
    const skus = products.variation?.skus.map((sku) => sku)

    const selectedcolor = mycolors.id
    const selectedsize = mysizes.id

    const selectedVariant =  skus.filter(
      (sku) => sku.props[0] === selectedcolor && sku.props[1] === selectedsize,
    )

  

   await setnewprice(selectedVariant[0]?.price)
 
    Swal.fire({
      icon: 'success',
      title:`Color : ${mycolors?.title}, Price : ${selectedVariant[0]?.price?.discounted} $` ,
      text: `Size : ${mysizes?.title} `,
      
    })
  }

  return (
    <div>
      <section className="row  m-lg-5 ">
        {/* Gallery div ........... */}

        <div className="col-lg-5 col-sm-12">
          <div className=" py-5 mygallery-css text-center">
            {products?.gallery?.map((pic) => (
              <Gallery key={pic.id} picture={pic}></Gallery>
            ))}
          </div>
        </div>

        {/* product details div........... */}

        <div className="col-lg-7 col-sm-12 px-lg-5   ">
          <h1 className="my-4 "> Product Details : </h1>
          <h3>{products.title}</h3>
          <br />
          <h4 className="price-css">
            Price : $ {newprice?.discounted}
            <span className="old-price"> $ {newprice?.old}</span> (20% OFF)
          </h4>
          {/* color div........... */}
          <div className="color-div-css">
            <div>
              <h2 className="my-lg-3">
                {products.variation?.props[0]?.name} : {mycolors?.title}
              </h2>
              <div className="d-lg-flex justify-content-around">
                {products.variation?.props[0]?.values.map((value) => (
                  <Color
                    key={value.id}
                    data={value}
                    mychoose={setmycolors}
                  ></Color>
                ))}
              </div>
            </div>
          </div>

          {/* size div.............. */}

          <div className="my-5 color-div-css">
            <h2 className="my-4 ">
              {products.variation?.props[1]?.name} : {mysizes?.title}
            </h2>

            <div className="d-lg-flex justify-content-around">
              {products.variation?.props[1]?.values.map((value) => (
                <Size key={value.id} data={value} mysizes={setmysizes}></Size>
              ))}
            </div>
          </div>

          <button
            className="btn my-lg-4  p-2  fs-5 custom-css "
            onClickCapture={setTheOrder}
          >
            Chackout your order
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
