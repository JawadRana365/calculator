import React from 'react'
import Button from '../../shared/Button/Button'

export default function Keypad({calculatorState,calculatorDispatch}) {
  return (
    <div className='flex flex-col'>
        {/* Row 1 */}
            <div className='flex flex-row'>
                <Button
                    className={""}
                    btnText={'1'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '1',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'2'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '2',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'3'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '3',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'+'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: '+',
                            result: false
                        })
                    }}
                />
            </div>
        {/* Row 2 */}
            <div className='flex flex-row'>
                <Button
                    className={""}
                    btnText={'4'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '4',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'5'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '5',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'6'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '6',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'-'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: '-',
                            result: false
                        })
                    }}
                />
            </div>

        {/* Row 3 */}
            <div className='flex flex-row'>
                <Button
                    className={""}
                    btnText={'7'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '7',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'8'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '8',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'9'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '9',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'*'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: '*',
                            result: false
                        })
                    }}
                />
            </div>

        {/* Row 4 */}
            <div className='flex flex-row'>
                <Button
                    className={""}
                    btnText={'AC'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: '^',
                            result: true
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'0'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '0',
                            opperation: calculatorState.opperation,
                            result: false
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'='}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: calculatorState.opperation,
                            result: true
                        })
                    }}
                />
                <Button
                    className={""}
                    btnText={'/'}
                    handleClick={() => {
                        calculatorDispatch({
                            value: '',
                            opperation: '/',
                            result: false
                        })
                    }}
                />
            </div>
    </div>
  )
}
