import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/product";
import Home from "./pages/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>



      {/* 1st yahan mene define krdiya ki agar url me koi is/ or /about prakar ka item ho to usme usme ye page show krdo element me  now check  header.jsx*/}
    
    </>
  );
};

export default App;
