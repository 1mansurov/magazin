import React from 'react'
import './Top.css'
import makas from '../../img/makas.png'
import zvezda from '../../img/zvezda.svg'

const Top = () => {
    return (
        <div>
            <div className="top">
                <h3>MOST TOP RATED PRODUCTS</h3>
                <div className='card__wrapper' >
                    <div className="top__card">
                        <img src={makas} alt="" />
                        <div className="top__card__content">
                            <h4>Blue Swade Nike Sneakers</h4>
                            <img src={zvezda} alt="" />
                            <p>$499</p>
                        </div>
                    </div>
                    <div className="top__card">
                        <img src={makas} alt="" />
                        <div className="top__card__content">
                            <h4>Blue Swade Nike Sneakers</h4>
                            <img src={zvezda} alt="" />
                            <p>$499</p>
                        </div>
                    </div>
                    <div className="top__card">
                        <img src={makas} alt="" />
                        <div className="top__card__content">
                            <h4>Blue Swade Nike Sneakers</h4>
                            <img src={zvezda} alt="" />
                            <p>$499</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Top
