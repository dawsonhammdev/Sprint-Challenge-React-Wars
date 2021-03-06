import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import StarCard from "./components/StarCard"

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  export default function App() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => {
          console.log(res.data.results)
          setStars(res.data.results)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {stars.map((starData, index) => {
        console.log(starData)
        return (
          <StarCard
            key ={index} 
            name ={starData.name}
            height = {starData.height} 
            mass ={starData.mass}
          />
        )
      })}
      </div>
        
    );
  }

