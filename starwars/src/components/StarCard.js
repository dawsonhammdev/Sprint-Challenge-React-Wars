import React from "react";

const StarCards = props => {
  
    return (
      
        <div>
          {/* <h1>Hello from StarCard!</h1> */}
          <h2> {props.name} </h2>
          <h3> {props.height} </h3>
          <h3> {props.mass} </h3>
        </div>
      
    )
    
  }
  
  export default StarCards;