import React from 'react'
import './Adidas.css';
import adidaskros from '../../img/adidas.png';
import { useTranslation } from 'react-i18next';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>

const Adidas = () => {
    const {t} = useTranslation()
    return (
        <div>
            <div className="adidas">
                <div className="adidas__wrapper">
                    <div className="adidas__content">
                        <h3>{t("adidasTitle")}</h3>
                        <p>{t("adidasComment")}</p>
                        <button className='show' >{t("adidasBtn")}</button>
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
