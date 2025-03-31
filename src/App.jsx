import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctor from './pages/Doctor'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/appointment/:docId' element={<Appointment />} />

      </Routes>

    </div>
  )
}

export default App