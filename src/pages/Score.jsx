import React from 'react'
import { useSelector } from 'react-redux'

export const Score = () => {
  const quizState = useSelector(store => store.quiz)
  return (
    <div className='text-white'>
      <h1>TOTAL SCORE</h1>
      <h1>{quizState.quizScore}/10</h1>
      <h1>Incorrect Answer : {quizState.incorrectAnswer}</h1>
      <h1>Correct Answer : {10-quizState.incorrectAnswer}</h1>
      <h1>Unanswered Question : {10 - quizState.incorrectAnswer - quizState.quizScore}</h1>
    </div>
  )
}
