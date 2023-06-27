import React from 'react';
import "../assets/css/Container.css";



const Container = () => {
  return (
   <div  className='container'>
   <button className='head'> <box-icon name='menu'></box-icon><label>Menu</label><box-icon name='chevron-left'></box-icon> 
   
   </button> 
   <ol> 
        <li><a href='#'><box-icon   name='list-plus'></box-icon>List</a></li>
        <li> <a href='#'><box-icon type='solid' name='grid'></box-icon>Aggregate
        </a>
        
        </li>
          <li><a href='#'><box-icon type='solid' name='save'></box-icon>save search</a></li>
          <li><a href='#'><box-icon name='filter-alt'></box-icon>Search filter</a></li>
          <li><a href='#'><box-icon type='solid' name='building-house'></box-icon>Company Profiles</a></li>
    </ol>
   </div>
  
  )
}

export default Container;