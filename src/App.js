import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Layouts/Footer";
import Home from "./Components/home/Home";
import Header from "./Components/Layouts/Header";

function App() {
  return (
    <div className="App overflow-hidden">
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
