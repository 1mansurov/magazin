import React from 'react'
import './Footer.css';
import nav from '../../img/navicon.svg'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation()

  return (
    <div>
      <div className="footer">
        <div className="footer__wrapper">
            <div className="footer__card">
                <img src={nav} alt="" />
                <span>{t("footerComment1")}</span>
            </div>
            <div className="footer__card">
                <h4>{t("footerTitle2")}</h4>
                <span>{t("footerComment2")}</span>
            </div>
            <div className="footer__card">
                <h4>{t("footerTitle3")}</h4>
                <span>{t("footerComment3")}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
