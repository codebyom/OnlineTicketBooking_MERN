import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarManu">
                <h3 className="sidebarTitle">DashBord</h3>
                <ul className="sidebarList">
               
                <Link to='/' className='Link'>
                    <li className="sidebarListItem active">
                        <img src='/icon/home.png'/>
                         Home 
                    </li>
                    </Link>
                   
                    <li className="sidebarListItem">
                        <img src='/icon/linestyle.png'/>
                        Analytics
                    </li>
                    
                    <Link to='/userlist' className='Link'>
                    <li className="sidebarListItem">
                        <img src='/icon/user.png'/>
                        User 
                    </li>
                    </Link>
                    
                    <Link to='/ticketing' className='Link'>
                    <li className="sidebarListItem">
                        <img src='/icon/user.png'/>
                        Ticketing 
                    </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebarManu">
                <h3 className="sidebarTitle">Action</h3>
                <ul className="sidebarList">
                <Link to='/routescreen' className='Link'>
                    <li className="sidebarListItem">
                        <img src='/icon/user.png'/>
                        Route
                    </li>
                    </Link>
                    <Link to='/managebus' className='Link'>
                    <li className="sidebarListItem">
                        <img src='/icon/user.png'/>
                        Bus
                    </li>
                    </Link>
                    <Link to='/busroutine' className='Link'>
                    <li className="sidebarListItem">
                        <img src='/icon/user.png'/>
                        Bus Schedule
                    </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebarManu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src='/icon/mail.png'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <img src='/icon/report.png'/>
                        FeedBack
                    </li>
                    <li className="sidebarListItem">
                        <img src='/icon/message.png'/>
                        Message
                    </li>
                </ul>
            </div>

            <div className="sidebarManu">
                <h3 className="sidebarTitle">Account</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src='/icon/money.png'/>
                        Collecting
                    </li>
                    <li className="sidebarListItem">
                        <img src='/icon/linestyle.png'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <img src='/icon/tranding.png'/>
                        Report
                    </li>
                </ul>
            </div>

        </div>
    </div>
    </>
  )
}

export default Sidebar