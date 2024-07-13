import React from 'react'
import Adidas from '../../components/adidas/Adidas'
import Servis from '../../components/usluga/Servis'
import Top from '../../components/top/Top'
import Hero from '../../components/hero/Hero'
import Product from '../../components/allproducts/Product'

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Adidas />
      <Servis />
      <Top />
    </div>
  )
}

export default Home
