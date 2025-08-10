import AboutFreedom from "./Components/AboutFreedom";
import Header from "./Components/Header";
import Idol1 from "./Components/idols/idol1";
import Idol2 from "./Components/idols/idol2";
import OurIndianIdols from "./Components/OurIndianIdols";
import { createBrowserRouter, Router, RouterProvider} from "react-router-dom";



const App = () => {

  return (
    
    <>
      <Header />
      <AboutFreedom />
      <OurIndianIdols />
    </>
  )
}

export default App






