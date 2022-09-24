import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

export const ProtectedPages = () => {
  const [cookies, setCookie] = useCookies(["isLoggedIn"]);
  console.log(cookies.isLoggedIn)
  if (cookies.isLoggedIn) {
    return <Outlet />
  } else{
    return <Navigate to="/login" />
  } 
}
