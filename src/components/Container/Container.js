import React, { useReducer } from 'react'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

const initialState = {
    valueOne: "",
    valueTwo: "",
    opperation: "",
    result: 0
}

const reducer = (prevState,action) => {
    if(action.opperation){
        if(action.result){
            switch(action.opperation){
                case '+':
                    return {
                        valueOne: "",
                        valueTwo: "",
                        opperation: "",
                        result: parseInt(prevState.valueOne) + parseInt(prevState.valueTwo)
                    }
                case '-':
                    return {
                        valueOne: "",
                        valueTwo: "",
                        opperation: "",
                        result: parseInt(prevState.valueOne) - parseInt(prevState.valueTwo)
                    }
                case '*':
                    return {
                        valueOne: "",
                        valueTwo: "",
                        opperation: "",
                        result: parseInt(prevState.valueOne) * parseInt(prevState.valueTwo)
                    }
                case '/':
                    return {
                        valueOne: "",
                        valueTwo: "",
                        opperation: "",
                        result: parseInt(prevState.valueOne) / parseInt(prevState.valueTwo)
                    }
                default: 
                    return initialState
            }
        }else{
            return {
                ...prevState,
                opperation: action.opperation,
                valueTwo : prevState.valueTwo + action.value
            }
        }
    }else{
        return {
            ...prevState,
            valueOne : prevState.valueOne + action.value
        }
    }
}

export default function Container() {
    const[calculatorState,calculatorDispatch] = useReducer(reducer,initialState)

    return (
        <div className='border rounded-lg p-8 flex flex-col gap-4'>
            {/* Header */}
            <Paragraph 
                className='text-lg border-b border-neutral-600 bg-transparent text-white' 
                text='CALCULATOR' 
            />
            {/* Display */}
                <Display  calculatorState={calculatorState}/>
            {/* Keypad */}
                <Keypad calculatorState={calculatorState} calculatorDispatch={calculatorDispatch}/>
        </div>
    )
}
