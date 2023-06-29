import React from 'react';
import "../assets/css/Dropdown.css"

const Dropdown = () => {
  return (
    <div className='dropdown'>
     <select name="cars" id="cars">
    <option value="volvo">Action</option>
    <option value="saab">item 1</option>
    <option value="opel">item 2</option>
    <option value="audi">item 3</option>
  </select>
    </div>
  )
}

export default Dropdown;