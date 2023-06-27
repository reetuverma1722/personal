// import React from 'react';
// import "../assets/css/MiddleContainer.css";

// const MiddleContainer = () => {
//   return (
//     <div className='middle'>
   
//    <div class="dropdown">
//   <button class="dropbtn" style={{color:'black',fontSize:"15px",fontWeight:"bold", border:"blue"}}>
//     Action<box-icon  color="#ADD8E6"type='solid' name='down-arrow'></box-icon>
//   </button>
//   <div class="dropdown-content">
    
//   </div>
// </div>

//     </div>
    
//   )
// }

// export default MiddleContainer;

import React from 'react';
import "../assets/css/MiddleContainer.css";

const MiddleContainer = () => {
  return (
    <div className='middle'>
      <div className="dropdown">
        <button className="dropbtn" style={{ color: 'black', fontSize: "15px", fontWeight: "bold", border: "blue" }}>
          Action<box-icon color="#ADD8E6" type='solid' name='down-arrow'></box-icon>
        </button>
        <div className="dropdown-content">
          {/* Dropdown menu items */}
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
