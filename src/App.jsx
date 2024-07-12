import './App.css'
import Adidas from './components/adidas/Adidas'
import Product from './components/allproducts/Product'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Nav from './components/navbar/Nav'
import Top from './components/top/Top'
import Servis from './components/usluga/Servis'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Product />
      <Adidas />
      <Servis />
      <Top />
      <Footer />
    </>
  )
}

export default App
