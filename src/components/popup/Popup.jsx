import s from './popup.module.scss';
import close from '../../assets/close.png'

import PopupForm from '../form/PopupForm'

const Popup = ({active, setActive, name, children}) => {
    return (
        <div className={active ? `${s.Popup} ${s.active}` : s.Popup}>
            <div className={s.popupContent}>
                <img src={close} alt="Закрыть" className={s.close} onClick={() => setActive(false)} />
                <h1>{children}</h1>
                    <PopupForm />
            </div>
        </div>
    )
}

export default Popup;