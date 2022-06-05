import React from 'react';
// import { MDBCol, MDBIcon } from "mdbreact";
import './search.css'
import serach from '../images/search.png'
import add from '../images/Add_plus.png'
import line from  '../images/Line.png'
import {Link}  from "react-router-dom"

const SearchBAr = ({searchkey, setSearchKey}) => {

  return (
    <div className='searchbar-container'>

  <form className="form">
  <input className="form-control" type="text" value={searchkey} onChange={(e)=>{setSearchKey(e.target.value)}} placeholder="Search PPD ID" aria-label="Search"  />
  <img className='line' src={line} alt='dta'/> 

  <img id='search'  src={serach} alt='data'/>

</form>

        <Link to="/Basic">
        <button id='search-btn'>
          <img className='plus' src={add} alt='data'/> 
          Add Property
          </button>
        </Link>

        </div>
  )
}

export default SearchBAr