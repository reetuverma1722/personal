import React from 'react';
import "../assets/css/Filter.css";

const Filter = () => {
  return (
    <div className='top'>
    <div className='left'>
        <span className='icon-set'><i className="fa-solid fa-bars"></i><b>Menu</b></span>
      
        <span><i className="fa-solid fa-list"></i><b>List</b></span>
        <span><i className="fa-regular fa-rectangle-list"></i><b>Aggregate</b></span>
        <span><i className="fa-solid fa-floppy-disk"></i><b>Save Search</b></span>
        <span><i className="fa-solid fa-filter"></i><b>Search Filter</b></span>
        <span><i className="fa-solid fa-city"></i><b>Company Profiles</b></span>
    </div>
 
   </div>
  )
}

export default Filter;