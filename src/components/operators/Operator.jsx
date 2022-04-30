import s from './operator.module.scss';
import React from 'react'
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useDispatch } from 'react-redux';

import { addOperators } from '../../store/popupSlice'

import Popup from '../popup/Popup'



const Operators = ({id, img, name, setActive, setOperatorValue}) => {

    const [popupValue, setPopupValue] = React.useState('')
    const ref = React.useRef()
    const dispatch = useDispatch();


    useEffect(() => {
            setPopupValue(ref.current.innerHTML);
    }, [popupValue])

    return (
        <div className={s.operator} onClick={() => setActive(true) || dispatch(addOperators(popupValue))}>
            <img src={img}/>
            <h3 ref={ref}>{name}</h3>
        </div>
    )
}

export default Operators;