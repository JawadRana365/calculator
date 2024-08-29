import React from 'react'
import Paragraph from '../../shared/Paragraph/Paragraph'

export default function Display({calculatorState}) {
  return (
    <div className='flex flex-col w-96'>
        <Paragraph 
            className='text-sm bg-white text-neutral-800 flex flex-row justify-end px-4'
            text={`${calculatorState.valueOne} ${calculatorState.opperation} ${calculatorState.valueTwo}`} 
        />
        <Paragraph 
            className='text-md bg-white text-neutral-800 flex flex-row justify-end px-4'
            text={calculatorState.result} 
        />
    </div>
  )
}
