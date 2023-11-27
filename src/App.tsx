import { Navigation, Footer } from './components';
import { BlueBtn } from './components/common/BlueBtn';

function App() {
  return (
    <div className='App'>
      <header className='header wrapper'>
        <Navigation />
      </header>
      <main className='main wrapper'>
        {/* Baloons */}
        <div className='main__circle'></div>
        <div className='main__circle'></div>
        <div className='main__circle'></div>
        <div className='main__circle'></div>
        <div className='main__circle'></div>
        <div className='main__circle'></div>

        <section className='main__content'>
          <div className='main__utp'>
            <h1>Зарабатывайте больше</h1>
            <span>с WELBEX</span>
            <p>Развиваем и контролируем продажи за вас</p>
          </div>

          <div className='main__info'>
            <div className='main__text'>
              Вместе с <span>бесплатной</span> <span>консультацией</span>{' '}
              мы дарим:
            </div>

            {/* Desktop version */}
            <div className='main__ditails'>
              <div className='main__ditails-left'>
                <div className='main__ditails-item'>
                  <div className='main__ditails-header'>Виджеты</div>
                  <div className='main__ditails-text'>30 готовых решений</div>
                </div>
                <div className='main__ditails-item'>
                  <div className='main__ditails-header'>Skype Аудит</div>
                  <div className='main__ditails-text'>
                    отдела продаж и CRM системы
                  </div>
                </div>
              </div>

              <div className='main__ditails-right'>
                <div className='main__ditails-item'>
                  <div className='main__ditails-header'>Dashboard</div>
                  <div className='main__ditails-text'>
                    с показателями вашего бизнеса
                  </div>
                </div>
                <div className='main__ditails-item'>
                  <div className='main__ditails-header'>35 дней</div>
                  <div className='main__ditails-text'>использования CRM</div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className='main__ditails--mobile'>
              <div className='main__ditails-item--mob'>
                <div className='main__ditails-header--mob'>Skype аудит</div>
                <div className='main__ditails-header--mob'>Dashboard</div>
              </div>

              <div className='main__ditails-item--mob'>
                <div className='main__ditails-header--mob'>30 виджетов</div>
                <div className='main__ditails-header--mob'>Месяц аmoCRM</div>
              </div>
            </div>

            <div className='main__cosultation'>
              <BlueBtn text={'Получить консультацию'} />
            </div>
          </div>
        </section>
      </main>

      <footer className='footer wrapper'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
