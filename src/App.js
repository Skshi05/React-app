
import './App.css';
import React from 'react'
import Display from './Component/Display';

export default function App() {
  let obj ={
    Taxi : "a car licensed to transport passengers in return for payment of a fare",
    Food : {
      Sushi :
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      Apple : {
        Honeycrisp :
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji : "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  }
  return (
    <div className="Container">
       <h2>Object Assignment</h2>
      <Display taxi={obj.Taxi} food={obj.Food.Sushi} apple={obj.Food.Apple.Honeycrisp} fuji={obj.Food.Apple.Fuji}/>
    </div>
  )
}



