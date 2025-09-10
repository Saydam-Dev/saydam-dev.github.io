import { useEffect, useState } from "react";
import StartingScreen from "./components/StartingScreen.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    
  const [ekran, setEkran] = useState("bios");

  useEffect(() =>{
    const biosTimer = setTimeout(() => setEkran("layout"),7000);

    return() =>{
      clearTimeout(biosTimer);
    };
  },[]);
  
  
  return (
    <>
      {ekran === "bios" && <StartingScreen/>}
      {ekran === "layout" && <Layout/>}
    </>
  );
}

export default App;
