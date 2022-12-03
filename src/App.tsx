import React, { useState } from "react";
import "./App.css";
import Boxes from "./components/Boxes/Boxes";
import Header from "./components/Header/Header";
import JoinUs from "./components/JoinUs/JoinUs";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import RoadMap from "./components/RoadMap/RoadMap";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Menu
        menuOpen={menuOpen}
        buttons={[
          { name: "click", href: "#" },
          { name: "click", href: "#" },
          { name: "click", href: "#" },
        ]}
      />
      <Main
        title={"for all your privacy needs"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nobis ducimus ut reiciendis aliquam tempore, repudiandae ea saepe suscipit sit rerum, numquam eos dolore magni commodi!"
        }
        button1={"lorem ipsum"}
        button2={"read whitepaper"}
        linkTg={""}
        linkDs={""}
        linkTw={""}
      />
      <Boxes />
      <RoadMap />
      <JoinUs />
    </div>
  );
}

export default App;
