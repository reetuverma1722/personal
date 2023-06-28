import React from 'react';


import CountriesTable from './CountriesTable';
import Container from './Container';
// import MiddleContainer from './MiddleContainer';


const Section = () => {
  return (
    <>
        <div className='sidebar-left'>
        {/* <MiddleContainer/> */}
        <Container/>
         
</div>
<div className='sidebar-right'>

  <CountriesTable/>

</div>
    </>
    
    
  )
}

export default Section;