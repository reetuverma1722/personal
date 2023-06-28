// import React from 'react';
// import "../assets/css/Container.css";



// const Container = () => {
//   return (
//    <div  className='container'>
//    <button className='head'> <box-icon name='menu'></box-icon><label>Menu</label><box-icon name='chevron-left'></box-icon> 
   
//    </button> 
//    <ol> 
//         <li><a href='#'><box-icon   name='list-plus'></box-icon>List</a></li>
//         <li> <a href='#'><box-icon type='solid' name='grid'></box-icon>Aggregate
//         </a>
        
//         </li>
//           <li><a href='#'><box-icon type='solid' name='save'></box-icon>save search</a></li>
//           <li><a href='#'><box-icon name='filter-alt'></box-icon>Search filter</a></li>
//           <li><a href='#'><box-icon type='solid' name='building-house'></box-icon>Company Profiles</a></li>
//     </ol>
//    </div>
  
//   )
// }

// export default Container;
import React, { useState } from 'react';

// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { ToggleButtonGroup } from '@mui/material';
// import ToggleButton from 'toggle-button';
// import ToggleButtonGroup from "toggle-button";
// import ViewModuleIcon from "toggle-button";
// import ViewListIcon from "toggle-button";
// import ViewQuiltIcon from "toggle-button";
// import view from "toggle-button";

const Container = () => {
  const [dropdownvalue, setDropdownValue] = useState('Menu');

  const items = ['Menu', 'List', 'Aggregate', 'Save search', 'Search Filter'];

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <div>
    {/* <ToggleButtonGroup
  orientation="vertical"
  value={view}
  exclusive */}
  {/* // onChange={handleChange} */}

  {/* <ToggleButton value="list" aria-label="list">
    <ViewListIcon />
  </ToggleButton>
  <ToggleButton value="module" aria-label="module">
    <ViewModuleIcon />
  </ToggleButton>
  <ToggleButton value="quilt" aria-label="quilt">
    <ViewQuiltIcon />
  </ToggleButton>
</ToggleButtonGroup> */}
      <div>
        <select value={dropdownvalue} onChange={handleDropdownChange}>
          {items.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// const MyApp = () => {
//   return (
//     <div>
//       <MyHomePage />
//     </div>
//   );
// };

export default Container;
