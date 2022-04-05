import React from 'react'
import './admin.css'
import AdminHeader from '../adminComponets/tobar/AdminHeader'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminHome from '../adminScreeen/home/AdminHome'
import Sidebar from '../adminComponets/sidebar/Sidebar'
import UserList from '../adminScreeen/userlist/UserList'
import Ticketing from '../adminScreeen/ticketing/Ticketing'
import TicketViewPage from '../adminScreeen/ViewTicketDetail/TicketViewPage'
import RouteScreen from '../adminScreeen/routes/RouteScreen'
import BusPage from '../adminScreeen/managebus/BusPage'
import BusSchefule from '../adminScreeen/busschedule/BusSchefule'
const Admin = () => {
  return (
    <>
        <div>
        <AdminHeader/> 
              
        <div className='container-div'>
        <Sidebar/> 
            <div className='others'>  
            <Routes>
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/userlist' element={<UserList/>}/>
            <Route path='/ticketing' element={<Ticketing/>}/>
            <Route path='/ticketing/ticketdetail' element={<TicketViewPage/>}/>
            <Route path='/routescreen' element={<RouteScreen/>}/>
            <Route path='/managebus' element={<BusPage/>}/>
            <Route path='/busroutine' element={<BusSchefule/>}/>
        </Routes>
            </div>
        </div>
          </div>      
    </>
  )
}

export default Admin