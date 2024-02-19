import React from 'react'
import User from '../User/User'
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
const DashBoard = () => {
const navigte = useNavigate()
  const handleLogOut =()=>{
    localStorage.clear()
    navigte('/')
  }
  return (
    <div>
       <div className='d-flex align-item-center justify-content-center text-center fs-3 bg-dark text-light p-3'>
        <div className=' float-end d-flex align-items-end justify-content-center w-75'>
        <h3>Welcome Admin</h3> &nbsp;
        <Link to={'/adduserform'} className='btn btn-primary fs-5'><IoMdAdd/>Add User</Link>
        </div>
       <div className= 'float-end d-flex align-items-end justify-content-end'>
       <Link to={'/'} className='btn btn-danger fs-5' onClick={handleLogOut}>logout</Link>
       </div>
       </div>
       <div className='d-flex -align-items-center justify-content-center w-100'>
      <User/>
       </div>
    </div>
  )
}

export default DashBoard