import React from 'react'
import Header from '../components/headers/Header'
import HomeScreen from '../public_screen/HomeScreen'
import {Routes,Route} from 'react-router-dom'
const MainPublicPgae = () => {
  return (
    <>
        <Header/>
        <HomeScreen/>
    </>
  )
}

export default MainPublicPgae