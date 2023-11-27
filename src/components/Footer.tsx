import telega from '../assets/telegram.svg';
import viber from '../assets/viber.svg';
import whatsapp from '../assets/whatsapp.svg';

const Footer: React.FC = () => {
  const about = [
    {
      link: '#',
      name: 'Партнёрская программа',
    },
    {
      link: '#',
      name: 'Вакансии',
    },
  ];

  const menu = [
    {
      link: '#',
      name: 'Расчёт стоимости',
    },
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
      name: 'Наши клиенты',
    },
    {
      link: '#',
      name: 'Кейсы',
    },
    {
      link: '#',
      name: 'Благодарственные письма',
    },
    {
      link: '#',
      name: 'Сертификаты',
    },
    {
      link: '#',
      name: 'Блог на Youtube',
    },
    {
      link: '#',
      name: 'Вопрос / Ответ',
    },
  ];

  const contacts = [
    {
      link: '#',
      name: '+7 555 555-55-55',
    },
    {
      link: '#',
      social: [telega, viber, whatsapp],
    },
    {
      link: '#',
      name: 'Москва, Путевой проезд 3с1, к 902',
    },
  ];

  return (
    <>
      <div className='footer__content'>
        <div className='footer__about'>
          <p>О компании</p>

          <ul>
            {about &&
              about.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className='footer__container'>
          <div className='footer__menu'>
            <p>Меню</p>

            <ul>
              {menu &&
                menu.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
            </ul>
          </div>

          <div className='footer__contact'>
            <p>Контакты</p>

            <ul>
              {contacts &&
                contacts.map((item, index) => (
                  <li key={index}>
                    {item.social ? (
                      item.social.map((elem) => (
                        <a key={elem} href={item.link}>
                          <img src={elem} alt={item.link} />
                        </a>
                      ))
                    ) : (
                      <a href={item.link}>{item.name}</a>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='footer__copy'>
        ©WELBEX 2022. Все права защищены.
        <a href='#'>Политика конфиденциальности</a>
      </div>
    </>
  );
};

export default Footer;
