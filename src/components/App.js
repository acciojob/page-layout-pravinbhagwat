
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  let x = "Welcome to my website"
  let y = "This is the content of my website."
  let z = "©️ 2023 M y Website. All rights reserved."
  return (
    <div>
         <Header header={x}/>
          <Content content={y}/>
          <Footer footer={z}/>
    </div>
  )
}

export default App
