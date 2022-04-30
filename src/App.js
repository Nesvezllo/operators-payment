import s from './App.module.scss';

import images from './assets/12345.png';
import git from './assets/github.jpg';
import OperatorsPage from './components/operatorsPage/OperatorsPage'
import PopupForm from './components/form/PopupForm'

function App() {
  return (
    <div className={s.wrapper}>
      <header>
        <div className={s.logo}>
          <img src={images} className={s.img} />
          <h1>Оплати</h1>
        </div>
          <a href="https://github.com/Nesvezllo"><img src={git} className={s.git} /></a>
      </header>
      <OperatorsPage />
    </div>
  );
}

export default App;
