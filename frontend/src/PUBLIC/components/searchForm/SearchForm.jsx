import React,{useState} from 'react'
import './searchform.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const SearchForm = () => {
  const [date,setDate ] = useState(new Date())
  return (
    <>
        <div className="main_div_form">
            <h2 className="title_from">Search Bus</h2>
            <div className="form">
              <form>
                <div className="form-text">
                <TextField id="outlined-basic" label="Enter Source City(Eg:Kathmandu)" variant="outlined" className='text'/>
                </div>


                <div className="form-text">
                <TextField id="outlined-basic" label="Enter Destination City(Eg:Pokhara)" variant="outlined" className='text'/>
                </div>

                <div className="form-group">
                <label className='form-label'>Traval Date :</label><br></br>
                <input type="date" id='date' className='datepicker'/>
                </div>
                 <Link to='/result'> <Button variant="primary" className='searchbtn'>Search</Button></Link>

              </form>
            </div>
        </div>
    </>
  )
}

export default SearchForm