import React from 'react'
import './weigetlg.css'
function WeigetLg() {
    const Button = ({type})=>{
        return <button className={"widgetlgButton " +type}>{type}</button>
      }
  return (
    <>
        <div className='widgetlg'>
      <h2 className="widgetlgTitle">Latest Transaction</h2>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU'/>
            <span className="widgetlgName">Joyee Dies</span>
          </td>
          <td className="widgetlgDate">2 jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" className="widgetlgButton"/>
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU'/>
            <span className="widgetlgName">Joyee Dies</span>
          </td>
          <td className="widgetlgDate">2 jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Declined" className="widgetlgButton"/>
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU'/>
            <span className="widgetlgName">Joyee Dies</span>
          </td>
          <td className="widgetlgDate">2 jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Panding" className="widgetlgButton"/>
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU'/>
            <span className="widgetlgName">Joyee Dies</span>
          </td>
          <td className="widgetlgDate">2 jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" className="widgetlgButton"/>
          </td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default WeigetLg