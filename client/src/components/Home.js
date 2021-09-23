import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import ProfileImg from "../media/profileImg.jpg";
import logo from "../media/react-blog.png";

const Home = () => {
  //set index for work history tabs
  const [index, setIndex] = useState(1);

  //handle click for hisotry tabs
  const historyClicked = (e) => {
    let val = e.target.innerHTML;
    const tmg = document.getElementById("tmg");
    const kable = document.getElementById("kable");
    const freelance = document.getElementById("freelance");

    switch (val) {
      case "TMG":
        setIndex(1);
        tmg.classList.add("historyActive");
        kable.classList.remove("historyActive");
        freelance.classList.remove("historyActive");
        break;
      case "Kable Academy":
        setIndex(2);
        tmg.classList.remove("historyActive");
        kable.classList.add("historyActive");
        freelance.classList.remove("historyActive");
        break;
      case "Freelance":
        setIndex(3);
        tmg.classList.remove("historyActive");
        kable.classList.remove("historyActive");
        freelance.classList.add("historyActive");
        break;
      default:
        setIndex(1);
        break;
    }
  };

  //get date for footer
  let date = new Date();
  let year = date.getFullYear();


  return (
    <div id="home" className="container-fluid">
      {/* hero section */}
      <div className="" id="hero">
        <h7>Hello. My name is</h7>
        <h2 className="name">Seth Stephens.</h2>
        <h2 className="title ">You think it, I build it.</h2>
        <p className="content" style={{ color: "black" }}>
          I am a full stack web developer who can speak human and computer.
          Currently, I am accepting freelance and employment opportunities while
          investing personal time assisting new, diverse talent enter the
          tech industry.
        </p>
        <button className="btn btn-outline-dark">Check Out My Work</button>
      </div>

      <hr />
      {/* about section */}
      <div className="" id="about">
        <h1>about me</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="col about-content">
              <p>
                My interest in web development started in summer 2019. I self
                taught and dabbled in several languages until I got an intern
                opportunity to build Unity games with C# in 2020.
                <br />
                <br />
                From there I went to Kable Academy for formal training and
                experience working with a team. After graduating in Sept 2021, I
                was asked to join their outreach program in Dayton help get new,
                diverse talent into the tech industry.
                <br />
                <br />
                Currently, I am accepting freelance and employment opportunities
                and always look forward to the next great project.
                <br />
                <br />
                Speaking of projects, here are a few technologies I work with:
              </p>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5 fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-wordpress fa-3x"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm fa-3x"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 profileDiv">
            <img src={ProfileImg} className="profileImg" alt="seth" />
            <div className="profileOverlay">
              <div className="profileUnderlay"></div>
            </div>
          </div>
        </div>

        {/* history section */}
        <div className="" id="history">
          <div className="workHistory">
            <button
              id="tmg"
              className="btn btn-outline historyActive"
              onClick={historyClicked}
            >
              TMG
            </button>
            <button
              id="kable"
              className="btn btn-outline"
              onClick={historyClicked}
            >
              Kable Academy
            </button>
            <button
              id="freelance"
              className="btn btn-outline"
              onClick={historyClicked}
            >
              Freelance
            </button>
          </div>

          <History index={index} />
        </div>
      </div>

      <hr />

      {/* portfolio section */}
      <div className="" id="portfolio">
        <h1>my work</h1>
        <p>Thank you for checking out my work. Each piece displayed is a work in progress. If you have any suggestions or constructive critisism, I'm always open to listening. If you would like to see more work, please visit my <a href="https://github.com/SethCodes" target="_blank" rel="noreferrer">Github repository</a>.
        </p>
        <div className="projDiv">
          <div className="row">



            <div className="col-lg-4 col-md-12 projImgDiv">
              <img src={logo} className="projImg" alt="news aggregator" />
            </div>


            <div className="col-lg-8 col-md-12 ">
            <div className="projContentDiv">
              <h3>News Aggregator</h3>
              <p>Last Updated: 8-10-21</p>
              <p>
                This is a fun project to test my API and Redux skills. All data is pulling from gnews.io and is set to start with a search for "technology". Click any category to switch all elements on the page.
                <br/><br/>
                Future plans for this app are adding more sections displayed in a way you would expect from a news outlet.
                <br/><br/>
                View here:
              </p>
              <div className="codeLinks">
                  <a href="https://github.com/SethCodes/react-blog" target="_blank" rel="noreferrer" className="codeLink">          <i className="fab fa-github fa-2x"></i>
</a>
                  <a href="https://sethcodes.github.io/react-blog/" target="_blank" rel="noreferrer" className="codeLink" alt="github">          <i class="fas fa-desktop fa-2x"></i>
</a>
              </div>
              <div className="tech">
                  <p className="techItem">React</p>
                  <p className="techItem">Javascript</p>
                  <p className="techItem">Axios</p>
                  <p className="techItem">Redux</p>
              </div>
</div>
            </div>
          </div>
        </div>
       {/* <hr/> */}
        
      </div>
      <hr/>

      {/* contact section */}
      <div className="" id="contact">
        <h1>contact</h1>
        <div className="contact">
        <p className="lead">Do you have a project you've been wanting to do? Have an open position you think I would be great for? Or, have a question about me or my projects? Send an email and I'll get back to you as soon as I can!</p>
        <a className="btn btn-outline text-center" href="mailto: seth@seththedev.com">Contact</a>
        </div>
      </div>

      {/* footer section */}

      <div className="" id="footer">
      <div className="footerLinks">

      </div>
    <p>Copyright Seth the Dev {year}</p>
      </div>

      {/* links section */}
      <div className="text-center" id="links" sticky>
        <h4 className="links">
          <a href="https://www.github.com/sethcodes" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </h4>
        <h4 className="links">
          <a href="https://www.linkedin.com/in/seththedev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        </h4>
        <h4 className="links">
          <a href="https://www.instagram.com/seththedev" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        </h4>
        <h4 className="links">
          <a href="mailto: seth@seththedev.com"><i className="far fa-envelope"></i></a>
        </h4>
      </div>

    </div>
  );
};


//history component with previous experience
const History = ({ index }) => {
  switch (index) {
    case 1:
      return (
        <div className="workDiv">
          <div className="employer">
            <h3>The Morley Group</h3>
            <p className="">Intern and Developer March 2020 - April 2021 </p>
          </div>
          <p>
            The Morley Group offered me an intern position building Unity games
            with C# for{" "}
            <a href="https://www.evolverangesolutions.com">
              {" "}
              Evolve Range Solutions
            </a>
            . While the scope of my responsibilites was solely game
            developement, the owner ensured I was exposed to how the project
            worked as a whole.
            <br />
            <br />
            From Objective-C to Wordpress, infared heat mapping and .Net holding
            it all together, I was grateful to be a part of such a large project
            in my first position.
            <br />
            <br />
            Once out of the intern position, I was given other contracts such as
            updating Wordpress projects and implementing Apple and Google pay.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="workDiv">
          <div className="employer">
            <h3>Kable Academy</h3>
            <p className="">Student June - Sept 2021</p>
          </div>
          <p>
            I was about to start submitting applications when my wife heard a
            commerical for{" "}
            <a href="https://www.kableacademy.com">Kable Academy</a> on the
            radio. The idea of formal training sounded wonderful, but also out
            of reach.
            <br />
            <br />
            I called anyway to find they offered a 12 week, fully immersive
            program! This included an in depth, instructor lead dive into
            relevant skills for today's tech industry and direct access to their
            career services. This was exactly what I needed to get to the next
            step of my career.
            <br />
            <br />I most enjoyed their built in career service department that
            helps beyond the program in preparing you for interviews and being
            job ready. They are very knowledgable and actually want to help you
            get to the next level.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="workDiv">
          <div className="employer">
            <h3>Freelance</h3>
            <p className="">Contract</p>
          </div>
          <p>
            I look forward to checking my messages every day to see who has the
            next great idea I get to help build. From custom informational
            Wordpress sites to fully custom e-commerce React applications,
            powered by Node, I am here for it.
            <br />
            <br />
            Don't worry if you don't know technology jargon. I speak human AND
            computer so we will figure out the best route for you.
            <br />
            <br />
            Please <a href="mailto: seth@seththedev.com">contact me</a> whether you're just
            starting off a project or just need some help with finishing
            touches.
          </p>
        </div>
      );

    default:
      break;
  }
};

export default Home;
