import React from "react";
import styled from "styled-components"

const Container = styled.section`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);   
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 40%;
  padding: 1%;
  background-color: rgb(257,0,0);opacity:0.6;}
`

const Card = styled.h2`
  color: White;
`

const Card1 = styled.h3`
  color: black;
`

const StarCards = props => {
  
    return (
      
        <Container>
          {/* <h1>Hello from StarCard!</h1> */}
          <Card> {props.name} </Card>
          <Card1> {props.height} </Card1>
          <Card1> {props.mass} </Card1>
        </Container>
      
    )
    
  }
  
  export default StarCards;