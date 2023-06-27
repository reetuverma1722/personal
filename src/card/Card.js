import React from 'react'

const Card = ({data,active,setActive}) => {
    console.log(data);
  return (
    <div className={active===data?.id? "card set active":"card set"} onClick={()=>setActive(data?.id)}></div>
  )
}

export default Card