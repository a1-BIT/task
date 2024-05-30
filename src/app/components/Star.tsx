'use client'
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
const Star = () => {

  const stars = [1,2,3,4,5]
  const [newIndex, setNewIndex] = useState(-1)

  const handleClick = (index:number)=>{
    
    setNewIndex((index))
  }

  return (
    <>
    <div >
    {
      stars.map((item, index:number)=>{
        return(
        <div key={index} className="">
        <CiStar 
        size={30}
        color={ index > newIndex ? 'white' : 'yellow'}
          onClick={()=> handleClick(index)}
        /> 
        </div>
        )
        
      })
      
    }
    </div>
    </>
  )
}
export default Star