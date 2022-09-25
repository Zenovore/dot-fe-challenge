import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const [, setCookie] = useCookies(["isLoggedIn"]);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <div className='h-screen w-screen py-48 text-white'>
      <div className='h-auto w-96 mx-auto px-12 py-8 flex flex-col bg-[#1f2937] rounded-lg shadow-md gap-4 justify-center'>
        <h1 className='text-2xl text-center text-white'>Login</h1>
        <div>
          <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  value="Username"
                />
              </div>
              <TextInput
                id="username"
                type="text"
                sizing="sm"
              />
        </div>
        <div>
          <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Password"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                sizing="sm"
              />
        </div>
        <Button onClick={() => {
          setCookie("isLoggedIn",true, {path:"/", maxAge: 1800})
          routeChange() 
          }}>Login</Button>
      </div>
    </div>
  )
}
