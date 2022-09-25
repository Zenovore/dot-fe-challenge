import { Button } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const Score = () => {
  const quizState = useSelector(store => store.quiz)

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const handleClick = () => {

    localStorage.removeItem('persistantState')
    routeChange()
  }
  return (
    <div className='text-white mt-48'>
      <div className='h-auto w-96 mx-auto px-12 py-8 flex flex-col bg-[#1f2937] rounded-lg shadow-md gap-4'>
      <h1 className='font-medium text-center'>TOTAL SCORE</h1>
      <h1 className='font-bold text-3xl text-center py-4'>{quizState.quizScore}/10</h1>
      <h1>Incorrect Answer : {quizState.incorrectAnswer}</h1>
      <h1>Correct Answer : {quizState.quizScore}</h1>
      <h1>Unanswered Question : {10 - quizState.incorrectAnswer - quizState.quizScore}</h1>
      <Button onClick={() => {handleClick()}}>Take Another Quiz</Button>
      </div>
    </div>
  )
}
