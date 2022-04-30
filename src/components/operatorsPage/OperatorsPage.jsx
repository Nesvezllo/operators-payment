import s from '../operatorsPage/op.module.scss';

import Operator from '../operators/Operator'
import Popup from '../popup/Popup'

import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'


import {MTC} from '../../assets/mts--600.png'
import Beeline from '../../assets/beeline.jpg'
import Megafon from '../../assets/megafon.png'

const OperatorsPage = () => {

    

    const operatorsData = useSelector(state => state.popupReducer.data)
    const operatorsValue = useSelector(state => state.popupReducer.operator) 
    const operators= useSelector(state => state.popupReducer) 
    const [onPopup, setOnPopup] = React.useState()


    return (
        <div className={s.container}>
            <h2>Выберите оператора</h2>
            <div className={s.operators} >
                {operatorsData.map((item, index) => (
                    <Operator key={item.id} img={item.img} name={item.name} active={onPopup} setActive={setOnPopup} />
                ))}
            </div>
            <Popup active={onPopup} setActive={setOnPopup}>{operatorsValue}</Popup>

    </div>
    )
}

export default OperatorsPage;