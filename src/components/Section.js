import React from 'react';

const Section = () => {
  return (
    <>
        <div style={{color:"black",fontSize:"20px",fontWeight:"600"}}className='sidebar-left'>
        <box-icon name='menu'></box-icon>Menu<box-icon name='chevron-left'></box-icon>
        <ul ><li><box-icon   name='list-plus'> List</box-icon></li>
        <li style={{color:"black",fontSize:"20px",fontWeight:"600"}}> <box-icon type='solid' name='grid'>Aggregate</box-icon></li>
          <li><box-icon type='solid' name='save'>Save search</box-icon></li>
          <li><box-icon name='filter-alt'></box-icon>Search filter</li>
        </ul>
</div>
<div className='sidebar-right'>

</div>
    </>
    
    
  )
}

export default Section