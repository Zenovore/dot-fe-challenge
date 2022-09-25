import { Button, Spinner } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InputCategory } from '../components/InputCategory'
import { setDeadline } from '../redux/quizSlice'
import { useAxios } from '../services/api'

export const Category = () => {
  const dispatch = useDispatch()

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/quiz`; 
    dispatch(setDeadline({
      deadline: new Date()
    }))
    navigate(path);
  }

  const {data, err, loading} = useAxios({url : '/api_category.php'})
  const typeOptions = [
    {id: "multiple", name: 'Multiple Choice'},
    {id: "boolean", name: 'True / False'},
  ]

  if (loading){
    return <div className='w-24 mx-auto my-24'>
      <Spinner aria-label="Extra large spinner example" size={8} />
    </div> 
  }

  if (err){
    return <div className='text-3xl text-white'>Something went wrong</div>
  }

  if (data){
    return (
      <div className='flex flex-col w-80 mx-auto my-24 bg-[#1f2937] py-8 px-4 rounded-lg gap-4'>
        <InputCategory label="Category" options={data.trivia_categories}></InputCategory>
        <InputCategory label="Type" options={typeOptions}></InputCategory>
        <Button onClick={() => {routeChange()}}>Take Quiz</Button>
      </div>
    )
  }
}
