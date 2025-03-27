
import React from "react";



function Nav({library,setLybrary}){
  return(
    <div className="nav">
        <p>waves</p>
        <button onClick={()=>{setLybrary(!library)}} className="libraryBtn">Library</button>
    </div>
  )
}
export default Nav