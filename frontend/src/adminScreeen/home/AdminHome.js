import React from 'react'
import FeaturedInfo from '../../adminComponets/featuredInfo/FeaturedInfo'
import './adminHome.css'
import Chart from '../../adminComponets/Chart/Chart'
import {userData} from '../../adminComponets/dymmyData/DummyData'
import Weigetsm from '../../adminComponets/weigetsm/Weigetsm'
import WeigetLg from '../../adminComponets/Weigetlg/WeigetLg'
const AdminHome = () => {
  return (
    <div className='admin_home'>
          <FeaturedInfo/>
          <Chart data={userData} title="User Analytics" grid dataKey="active user"/>
          <div className='homeWeiget'>
                <Weigetsm/>
                <WeigetLg/>
           </div>
    </div>
  )
}

export default AdminHome