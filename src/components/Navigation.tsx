import React from 'react';

import logo from '../assets/logo.svg';
import logoChars from '../assets/logoChars.svg';
import telega from '../assets/telegram.svg';
import viber from '../assets/viber.svg';
import whatsapp from '../assets/whatsapp.svg';

const Navigation: React.FC = () => {
  const menu = [
    {
      link: '#',
      name: 'Услуги',
    },
    {
      link: '#',
      name: 'Виджеты',
    },
    {
      link: '#',
      name: 'Интеграции',
    },
    {
      link: '#',
      name: 'Кейсы',
    },
    {
      link: '#',
      name: 'Сертификаты',
    },
  ];
  const contacts = [
    {
      icon: '+7 555 555-55-55',
      link: '#',
      name: 'Phone',
    },
    {
      icon: telega,
      link: '#',
      name: 'Telegram',
    },
    {
      icon: viber,
      link: '#',
      name: 'Viber',
    },
    {
      icon: whatsapp,
      link: '#',
      name: 'Whatsapp',
    },
  ];

  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <a href='/' className='nav__link'>
          <img src={logo} alt='Icon' />
          <img src={logoChars} alt='Name' />
        </a>
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>

      <div className='nav__menu'>
        <ul className='nav__list'>
          {menu &&
            menu.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
        </ul>
      </div>

      <div className='nav__contacts'>
        {contacts &&
          contacts.map((item, index) => (
            <div key={index} className='nav__contact'>
              <a href={item.link}>
                {item.icon.slice(0, 2) !== '+7' ? (
                  <img src={item.icon} alt={item.name} />
                ) : (
                  item.icon
                )}
              </a>
            </div>
          ))}
      </div>
    </nav>
  );
};

export default Navigation;
