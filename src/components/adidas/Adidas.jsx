import React from 'react'
import './Adidas.css';
import adidaskros from '../../img/adidas.png';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>

const Adidas = () => {
    return (
        <div>
            <div className="adidas">
                <div className="adidas__wrapper">
                    <div className="adidas__content">
                        <h3>Adidas Men Running Sneakers</h3>
                        <p>Performance and design. Taken right to the edge.</p>
                        <button className='show' >SHOP NOW</button>
                    </div>
                    <div className="adidas__img">
                        <img src={adidaskros} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adidas
