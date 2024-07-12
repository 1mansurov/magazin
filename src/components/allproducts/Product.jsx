import React from 'react'
import './Product.css';
import product from '../../img/products.svg'
import kros from '../../img/kros.png'
import sumka from '../../img/sumka.png'
import icon from '../../img/icon.png'
import nikekros from '../../img/nikekros.png'
import krostegi from '../../img/krostegi.png'
import sariqkros from '../../img/sariqkros.png'
import sariqorqa from '../../img/sariqorqa.png'
import zvezda from '../../img/zvezda.svg'


const Product = () => {
  return (
    <div>
      <div className="products">
        <h3>ALL PRODUCTS</h3>
        <div className="products__wrapper">
          <div className='wrapper' >
            <div className="products__wrapper__card">
              <img src={kros} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
            <div className="products__wrapper__card">
              <img src={sumka} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
              
            </div>
            <div className="products__wrapper__card">
              <img className='icon' src={icon} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
            <div className="products__wrapper__card">
              <img src={nikekros} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
          </div>
          <div className='wrapper' >
            <div className="products__wrapper__card">
              <img src={krostegi} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
            <div className="products__wrapper__card">
              <img src={sariqkros} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
            <div className="products__wrapper__card">
              <img src={sariqorqa} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
            <div className="products__wrapper__card">
              <img src={nikekros} alt="" />
              <h4>Nike Air Max 270 React</h4>
              <img src={zvezda} alt="" />
              <div className='comment' >
                <large>$299,43</large>
                <small>$534,33</small>
                <span>24% Off</span>
                
              </div>
            </div>
          </div>
          <a  href=""><img className='more' src={product} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Product

