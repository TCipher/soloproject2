import React from "react"
import Navbar from "./components/Navbar"
import Journal from "./components/Journals"
import Data from "./components/Data"

export default function App(){
    let dataElement = Data.map((items) => {
        return <Journal 
                keys = {items.id}
                {...items}
        
                />
    })
    return(
        <div>
        <Navbar />
       <section>
           {dataElement}
       </section>
        </div>
       
        
    )
}