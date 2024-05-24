import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [catFact,setCatFact]=useState("")
  const fetchData=async()=>{
    const {data}=await axios.get("https://catfact.ninja/fact")
    setCatFact(data.fact)
   
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      
      <button onClick={fetchData} className="flex bg-orange-500 rounded-md text-black px-5 py-4">Generate Cat Fact</button>
      <h1 className="text-2xl">{catFact}</h1>
    </div>
  );
}

export default App;
