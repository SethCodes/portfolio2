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
let content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate alias ad accusamus reiciendis? Repudiandae minus debitis eum fuga quos dolorum deserunt eaque itaque neque saepe. Aperiam quae quasi modi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed distinctio eos doloribus. Atque voluptate cum totam natus magnam dolore voluptas, repudiandae tempore impedit perferendis, minima ex adipisci vel magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis atque, dolor ea itaque pariatur impedit vero! Voluptatum, tempora. Reiciendis";




  return (
    <div id="home" className="container-fluid">
      {/* hero section */}
      <div className="jumbotron" id="hero">
        <h7>Hello. My name is</h7>
        <h2 className="name">Seth Stephens.</h2>
        <h2 className="title ">You think it, I code it.</h2>
        <p className="content" style={{color: "black"}}>I am a full stack web developer able to speak human and computer. Currently, I am accepting freelance and employment opportunities while also working with <Link to="/">Kable Academy</Link> to assist in getting new, diverse talent into the tech industy.</p>
        <button className="btn btn-outline-dark">Check Out My Work</button>
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
      <div className="text-center" id="links" sticky>
        <h4 className="links"><i class="fab fa-github"></i></h4>
        <h4 className="links"><i class="fab fa-linkedin"></i></h4>
        <h4 className="links"><i class="fab fa-instagram"></i></h4>
        <h4 className="links"><i class="far fa-envelope"></i></h4>
      </div>
    </div>
  );
};

export default Home;
