import React, { useContext } from 'react'
import { loginContext } from './loginContext'

export default function Profile() {
    const {username,password}=useContext(loginContext)
  return (
    <div>
        <h1>profile</h1>
        <h2>username:{username}</h2>
        <br />
        <h2>password:{password}</h2>
    </div>
  )
}
