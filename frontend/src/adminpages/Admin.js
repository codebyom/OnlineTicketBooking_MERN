import React from 'react'
import './admin.css'
import AdminHeader from '../adminComponets/tobar/AdminHeader'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminHome from '../adminScreeen/home/AdminHome'
import Sidebar from '../adminComponets/sidebar/Sidebar'
import UserList from '../adminScreeen/userlist/UserList'
const Admin = () => {
  return (
    <>
      <Router>      
        <div>
        <AdminHeader/>       
        <div className='container-div'>
        <Sidebar/> 
            <div className='others'>  
            <Routes>
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/userlist' element={<UserList/>}/>
        </Routes>
            </div>
        </div>
          </div>      
        </Router>
    </>
  )
}

export default Admin