import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />

      <Main
        title={"for all your privacy needs"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nobis ducimus ut reiciendis aliquam tempore, repudiandae ea saepe suscipit sit rerum, numquam eos dolore magni commodi!"
        }
        button1={"lorem ipsum"}
        button2={"read whitepaper"}
      />
    </div>
  );
}

export default App;
