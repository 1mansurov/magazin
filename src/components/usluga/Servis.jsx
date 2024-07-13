import React from 'react'
import './Servis.css';
import furgon from '../../img/furgon.svg'
import valyuta from '../../img/valyuta.svg'
import call from '../../img/call.svg'
import { useTranslation } from 'react-i18next';

const Servis = () => {
    const {t} = useTranslation()
    return (
        <div>
            <div className="servis">
                <div className="servis__card">
                    <img className='m-[25px]' src={furgon} alt="" />
                    <h3>{t("servisTitle1")}</h3>
                    <p>{t("servisComment")}</p>
                </div>
                <div className="servis__card">
                    <img className='m-[25px]'  src={valyuta} alt="" />
                    <h3>{t("servisTitle2")}</h3>
                    <p>{t("servisComment")}</p>
                </div>
                <div className="servis__card">
                    <img className='m-[25px]' src={call} alt="" />
                    <h3>{t("servisTitle3")}</h3>
                    <p>{t("servisComment")}</p>
                </div>

            </div>
        </div>
    )
}

export default Servis
