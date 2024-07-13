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
            <div className="servis p-[20px] ">
                <div className="servis__card text-center ">
                    <div className='max-w-[300px]' >
                    <img className='m-[25px] p-[45px] ' src={furgon} alt="" />
                    <h3 className='mt-[40px]' text-center >{t("servisTitle1")}</h3>
                    <p className='text-center' >{t("servisComment")}</p>
                    </div>
                </div>
                <div className="servis__card">
                   <div className='max-w-[300px]' >
                   <img className='m-[25px]  p-[45px]'  src={valyuta} alt="" />
                    <h3 className='mt-[25px]'>{t("servisTitle2")}</h3>
                    <p>{t("servisComment")}</p>
                   </div>
                </div>
                <div className="servis__card">
                    <div className='max-w-[300px]' >
                    <img className='m-[25px]  p-[45px]' src={call} alt="" />
                    <h3>{t("servisTitle3")}</h3>
                    <p>{t("servisComment")}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Servis
