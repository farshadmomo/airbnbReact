import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Data from "./data";

function App() {

    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className='container'>
            <NavBar/>
            {/*<Hero />*/}
            <div className="cardContainer">
                {cards}
            </div>
        </div>
  )
}

export default App;
