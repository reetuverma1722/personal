import React from 'react';
import Container from './Container';
import MiddleContainer from './MiddleContainer';

const Section = () => {
  return (
    <>
        <div className='sidebar-left'>
        <Container/>
        
</div>
<div className='sidebar-right'>
  <MiddleContainer/>
</div>
    </>
    
    
  )
}

export default Section;