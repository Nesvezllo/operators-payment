import s from "./form.module.scss";

import React, {useEffect, Suspence} from 'react'
import { useSelector} from "react-redux";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import MaskedInput from 'react-text-mask'
import * as yup from 'yup';
import "yup-phone";
import * as axios from 'axios';

import { addReceivedData } from '../../store/popupSlice'


const PopupForm = ({}) => {

    const ref = React.useRef();
    const [state, setState] = React.useState()
    const [ready, setReady] = React.useState(false)
    const [error, setError] = React.useState(false)

    console.log(state);
    
        useEffect(() => {
            state && axios.post('https://jsonplaceholder.typicode.com/posts', {state}).then(res => {
            let resState = res.data.state
            console.log(res.data.id);
            resState ? setReady(true) : setError(true)
            })
        })



    const validationSchema = yup.object().shape({
        tel_no: yup.
        string().
        phone('RU', true, "Неверно указан номер").
        required('Укажите ваш номер'),
        
        money: 
        yup
        .number()
        .min(1, "Сумма пополнения должна состовлять не менее 1 руб")
        .max(1000, "Сумма пополнения должна составлять не более 1000 руб")
        .required('Укажите сумму')
    })

    return (
        <div className={s.form}>
            <Formik
                innerRef={ref}
                initialValues={{tel_no: "", money: ""}}
                validateOnBlur
                onSubmit={(value) => setState(value)}
                validationSchema={validationSchema}
            >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                <Form className={s.form}>
                    <p>Телефон</p>
                    <MaskedInput 
                        mask={["+",7,'(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        name={"tel_no"} 
                        placeholder="+7(___) ___-____"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel_no}

                    />
                    <br />
                    <ErrorMessage name="tel_no" component="div"/>
                    <br />

                    <p>Сумма(Руб.)</p>

                    <Field 
                        type={"number"}
                        name={"money"} 
                        placeholder=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.money}
                    />

                    <br />
                    <ErrorMessage name="money" component="div"/>
                    <br />

                    <p className={ready || state ? `${s.ready} ${s.active}` : s.ready }>
                            {ready ? "Ваш счет успешно пополнен" : error ? "Не удалось пополнить счет" : "Ожидание"}
                    </p>

                    <button
                        disabled={!isValid && !dirty}
                        onClick={() => handleSubmit}
                        type={"submit"}
                    >Отправить</button>
                </Form>
                
                </div>
                )
            }
            </Formik>
            
        </div>
        
    )
}

export default PopupForm;