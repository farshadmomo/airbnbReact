import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import Card from "./components/Card";
// import profile1 from "../public/images/albert-dera-ILip77SbmOE-unsplash.jpg"
// import profile2 from "../public/images/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg"
// import profile3 from "../public/images/brooke-cagle-4gfbg7IulGA-unsplash.jpg"
// import profile4 from "../public/images/slav-romanov-BrEAp01_m5w-unsplash.jpg"
// import profile5 from "../public/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
// import profile6 from "../public/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
// import profile7 from "../public/images/charles-etoroma-95UF6LXe-Lo-unsplash.jpg"
// import profile8 from "../public/images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"


function App() {
    return (
        <div className='container'>
            <NavBar/>
            {/*<Hero />*/}
            <div className="cardContainer">
            <Card
                img='/images/profile1.jpg'
                rating="5.0"
                votes="6"
                country="USA"
                title="life lessons with albert dera"
                price="136"/>
            <Card
                img='/images/profile2.jpg'
                rating="3.0"
                votes="15"
                country="UK"
                title="yoga with oganj"
                price="220"/>
            <Card
                img='/images/profile3.jpg'
                rating="4.0"
                votes="16"
                country="IR"
                title="bussines with brookie cagle"
                price="330"/>
            <Card
                img='/images/profile4.jpg'
                rating="4.5"
                votes="4"
                country="DE"
                title="photography lessons with slav romanov"
                price="136"/>
            <Card
                img='/images/profile5.jpg'
                rating="3.5"
                votes="30"
                country="IN"
                title="programming lessons with jurcia"
                price="100"/>
            </div>
        </div>
  )
}

export default App;
