import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    data: [
        {
            id: '1',
            img: require('../assets/mts--600.png'),
            name: 'МТС',
        },
        {
            id: '2',
            img: require('../assets/beeline.jpg'),
            name: 'Билайн',
        },
        {
            id: '3',
            img: require('../assets/megafon.png'),
            name: 'Мегафон'
        },
        
        {
            id: '4',
            img: require('../assets/Logo_Tele2_.jpg'),
            name: 'TELE2'
        },
        {
            id: '5',
            img: require('../assets/V4yULYCjCb.jpg'),
            name: 'Сбербанк'
        },
        {
            id: '6',
            img: require('../assets/unnamed.png'),
            name: 'Tinkoff Mobile'
        }
    ], 
    
    operator: "",

    receivedData: "",
}

export const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        addOperators: (state, {payload}) => {
           state.operator = payload
        },
        addReceivedData: (state, {payloud}) => {
            state.receivedData = payloud
        },
    }
})

export const popupReducer = popupSlice.reducer
export const { addOperators, addReceivedData } = popupSlice.actions





