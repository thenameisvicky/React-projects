import { useState } from "react"
import Navbar from "./Components/Navbar.jsx"
import Newsboard from "./Components/NewsBoard.jsx"

export const App = () => {
  const [category,setCategory]=useState("general");
  const [country,setCountry]=useState("us");
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <Newsboard category={category} country={country}/>
    </div>
  )
}
export default App