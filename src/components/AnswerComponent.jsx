import React from 'react'

export const AnswerComponent = (props) => {
  const {answer} = props
  return (
    <div className='cursor-pointer flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col hover:bg-gray-100 dark:hover:bg-gray-700 p-8' >
    <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
      {answer}
    </p>
  </div>
  )
}
