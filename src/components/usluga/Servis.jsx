import React from 'react'
import './Servis.css';
import furgon from '../../img/furgon.svg'
import valyuta from '../../img/valyuta.svg'
import call from '../../img/call.svg'

const Servis = () => {
    return (
        <div>
            <div className="servis">
                <div className="servis__card">
                    <img className='m-[25px]' src={furgon} alt="" />
                    <h3>FREE SHIPPING</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="servis__card">
                    <img className='m-[25px]'  src={valyuta} alt="" />
                    <h3>100% REFUND</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="servis__card">
                    <img className='m-[25px]' src={call} alt="" />
                    <h3>SUPPORT 24/7</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

            </div>
        </div>
    )
}

export default Servis
