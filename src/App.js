import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Login from './pages/Siakad/login';
import Home from './pages/Siakad/home';
import Cuti from './pages/Siakad/cuti';
import FormCuti2 from './pages/Siakad/formCuti2';
import './index.css'
const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    async function getAuth() {
      const request = await fetch(
        "http://localhost:1337/api/auth/local", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "identifier": username,
          "password": password
        })
      }
      )
      const respons = await request.json()
      setAuth(respons)
    }
    getAuth()

    auth.jwt && navigate("/home")
  }

  return (
    <Routes>
      <Route exact path="/" element={<Login submit={handlesubmit} username={(e) => { setUsername(e.target.value) }} password={(e) => { setPassword(e.target.value) }} />} />
      <Route exact path={`/dashboard`} element={<Home auth={auth} />} />
      <Route exact path={`/cuti`} element={<Cuti auth={auth} />} />
      <Route exact path={`/pengajuancuti`} element={<FormCuti2 auth={auth} />} />
    </Routes>
  );
}

export default App;