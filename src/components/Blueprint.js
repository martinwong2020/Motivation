import React from 'react'
// const sql=require("sqlite3");
function Retrieve(){
  console.log(localStorage.getItem("quote"));
}
function Blueprint() {
  return (

    <div>    
      <button onClick={
        ()=>{
          Retrieve();
        }
      }>Here</button>
    </div>
  )
}

export default Blueprint