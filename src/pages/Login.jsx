import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';



export const Login = () => {
  const [cookies, setCookie] = useCookies(["isLoggedIn"]);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <div className='h-screen w-screen py-48'>
      <div className='h-auto w-96 mx-auto px-12 py-8 flex flex-col bg-white rounded-lg shadow-md gap-4'>
        <h1 className='text-2xl text-center text-blue-800'> Login</h1>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-between w-20 mr-2'>
            <h2 className='poppins'>Username</h2>
            <h2 className='poppins '>:</h2>
          </div>
          <input type="text" className='border-2 rounded-sm p-1' />
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-between w-20 mr-2'>
            <h2 className='poppins'>Password</h2>
            <h2 className='poppins '>:</h2>
          </div>
          <input type="password" className='border-2 rounded-sm p-1' />
        </div>
        <button onClick={() => {
          setCookie("isLoggedIn",true, {path:"/", maxAge: 60})
          routeChange() 
          }}>Login</button>
      </div>
    </div>
  )
}
