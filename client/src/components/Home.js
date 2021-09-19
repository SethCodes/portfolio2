import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";


const PortItem = ({name, content}) => {
    return(
        <div className="">
            <h1>{name}</h1>
            <p>{content}</p>
        </div>
    );

}

const Home = () => {

let name = "seth";
let content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate alias ad accusamus reiciendis? Repudiandae minus debitis eum fuga quos dolorum deserunt eaque itaque neque saepe. Aperiam quae quasi modi eius.";


  return (
    <div id="home" className="container-fluid">
      {/* hero section */}
      <div className="" id="hero">
        <h1>hero</h1>
      </div>

      {/* about section */}
      <div className="" id="about">
        <h1>about</h1>
        <PortItem
        name={name}
        content={content} />

      </div>

      {/* history section */}
      <div className="" id="history">
        <h1>history</h1>
      </div>

      {/* portfolio section */}
      <div className="" id="portfolio">
        <h1>portfolio</h1>
      </div>

      {/* contact section */}
      <div className="" id="contact">
        <h1>contact</h1>
      </div>

      {/* links section */}
      <div className="" id="links">
        <h1>links</h1>
        <h1>links</h1>
        <h1>links</h1>
        <h1>links</h1>
        <h1>links</h1>
        <h1>links</h1>
      </div>
    </div>
  );
};

export default Home;
