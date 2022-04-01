import React from 'react'
import './featuredInfo.css'
const FeaturedInfo = () => {
  return (
    <>
        <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">NPR 20000.00</span>
                <span className="featuredMoneyrate">-11.00</span>
            </div>
            <span className="featuredsubTitle">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">User</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2200</span>
                <span className="featuredMoneyrate">+4.5</span>
            </div>
            <span className="featuredsubTitle">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Buses</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">203</span>
                <span className="featuredMoneyrate">+5.5</span>
            </div>
            <span className="featuredsubTitle">Compared to last month</span>
        </div>
    </div>
    </>
  )
}

export default FeaturedInfo