import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Nav from './components/navbar/Nav'
import Home from './routes/home/Home';
import SinglePost from './routes/single-post/SinglePost'


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-post/:id' element={<SinglePost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
