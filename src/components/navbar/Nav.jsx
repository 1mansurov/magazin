import React from 'react';
import './Nav.css';
import profile from '../../img/nav.svg';
import navicon from '../../img/navicon.svg';
import karzinka from '../../img/navbasket.svg';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation

  return (
    <div>
      <div className="nav">
        <div className="nav__language">
          <select
            className='lang'
            defaultValue={i18n.language}
            onChange={e => {
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
        </div>
        <div className="nav__content" >
          <img src={profile} alt="" />
          <img src={navicon} alt="" />
          <img src={karzinka} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
