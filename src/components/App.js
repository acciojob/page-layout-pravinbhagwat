
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  let x = "Welcome to my website"
  let y = "This is the content of my website."
  let z = "©️ 2023 My Website. All rights reserved."
  return (
    <div id="root">
         <Header header={x}/>
          <Content content={y}/>
          <Footer footer={z}/>
          © 2023 My Website. All rights reserved.
    </div>
  )
}

export default App
