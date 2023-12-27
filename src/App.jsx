import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";

;
// Make sure to register ScrollTrigger


function App() {
  const [count, setCount] = useState(0);



  return (
    <>
    
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
      
    </>
  );
}

export default App;
