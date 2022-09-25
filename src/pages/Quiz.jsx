import React from 'react'
import { useSelector } from 'react-redux'
// import { AnswerComponent } from '../components/AnswerComponent'
// import store from '../redux/store'
import { useDispatch } from 'react-redux'
import { useAxios } from '../services/api'
import { setQuizScore, setIncorrectAnswer } from '../redux/quizSlice'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'flowbite-react'




export const Quiz = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/score`; 
    navigate(path);
  }
  const quizState = useSelector(store => store.quiz)
  // urlGet = '/api.php?amount=10&category=' + quizState.quizCategory + '&type=' + quizState.quizType
  const url = `/api.php?amount=10&category=${quizState.quizCategory}&type=${quizState.quizType}`
  const {data, err, loading} = useAxios({url : url})
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = React.useState(0)

  if (loading){
    return <div className='w-24 mx-auto my-24'>
      <Spinner aria-label="Extra large spinner example" size={8} />
    </div> 
  }

  if (err){
    return <div className='text-3xl text-white'>Something went wrong</div>
  }


  const handleAnswer = (e) => {
    if (e.target.innerText === data.results[questionIndex].correct_answer){
      console.log('correct')
      dispatch(setQuizScore({
        quizScore: 1
      }));
    } else {
      dispatch(setIncorrectAnswer({
        incorrectAnswer: 1
      }));
      console.log('wrong')
    }
    if (questionIndex < 9){
      setQuestionIndex(questionIndex + 1)
    } else {
      routeChange()
    }
  }


  console.log(data)
  if (data){
    var answer 
    // Randomize correct answer position so it wont stay in the same position 
    if (data.results[questionIndex].type === 'multiple'){
      const randomNumber = Math.floor(Math.random() * 3);
      answer = data.results[questionIndex].incorrect_answers
      answer.splice(randomNumber, 0, data.results[questionIndex].correct_answer)
    } else {
      answer = ["True", "False"]
      // answer.push(data.results[questionIndex].correct_answer)
    }
    return (
      <div>
        <div className="flex flex-col px-24 py-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">Question {questionIndex+1}</h1>
          {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">Score {quizState.quizScore}</h1> */}
          <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white py-4">{data.results[questionIndex].question}</h1>
          <div className='flex flex-col gap-8 '>
            {answer.map((answer, index) => {
              return (
                // <AnswerComponent onClick={(e) => {handleAnswer(e)}} answer={answer} key={index}></AnswerComponent>
                <div onClick={(e) => {handleAnswer(e)}} answer={answer} key={index} className='cursor-pointer flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col hover:bg-gray-100 dark:hover:bg-gray-700 p-8' >
                <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                  {answer}
                </p>
              </div>
              )
            })}
            {/* <div className="flex flex-row gap-8 mx-auto">
              <AnswerComponent answer={data.results[questionIndex].incorrect_answers[0]}></AnswerComponent>
              <AnswerComponent answer={data.results[questionIndex].incorrect_answers[1]}></AnswerComponent>
            </div>
            <div className="flex flex-row gap-8 mx-auto">
              <AnswerComponent answer={data.results[questionIndex].incorrect_answers[2]}></AnswerComponent>
              <AnswerComponent answer={data.results[questionIndex].correct_answer}></AnswerComponent>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
