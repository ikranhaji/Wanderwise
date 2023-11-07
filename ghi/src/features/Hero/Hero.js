import "./Hero.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import paul from "./images/paul.jpg";
import ikran from "./images/ikran.jpeg";
import jeny from "./images/jeny.jpeg";
import jason from "./images/jason.jpeg";
import gianni from "./images/gianni.jpg";
import pfp from "../Userprofile/images/pfp.png";
import tropicalVid from "./images/tropical-vid.mp4";
import friends from "./images/Traveling-friends.png";
import ImageCarosel from "../ImageCarosel/ImageCarosel";
import { useEffect } from "react";
import { useGetTokenQuery } from "../../app/apiSlice";

export default function Hero(props) {
  const { data: account } = useGetTokenQuery();
  const navigate = useNavigate();
  return (
    <>
      <div className="video-slider">
        <video muted autoPlay loop>
          <source src={tropicalVid} type="video/mp4" />
        </video>
        <div className="slider-container">
          <img id="hero-logo" src={logo} />
          <div className="desc">
            <p className="rotated-text">My Traveling AI Companion</p>
          </div>

          {!account && (
            <div className="button-box">
              <>
                <button
                  onClick={(e) => {
                    navigate(`/auth/login`);
                  }}
                  className="btn waves-effect amber darken-3"
                  type="submit"
                  name="action"
                >
                  Login
                  <i className="material-icons right">mood</i>
                </button>
                <button
                  onClick={(e) => {
                    navigate(`/auth/signup`);
                  }}
                  className="btn waves-effect pink darken-1"
                  type="submit"
                  name="action"
                >
                  Sign-up
                  <i className="material-icons right">play_circle_filled</i>
                </button>
              </>
            </div>
          )}
          {account && (
            <div className="btn-box">
              <>
                <button
                  onClick={(e) => {
                    navigate(`/createrecommendations`);
                  }}
                  className="btn waves-effect amber darken-3"
                  type="submit"
                  name="action"
                >
                  Recommendation
                  <i className="material-icons right"></i>
                </button>
                <button
                  onClick={(e) => {
                    navigate(`/myprofile`);
                  }}
                  className="btn waves-effect pink darken-1"
                  type="submit"
                  name="action"
                >
                  Profile
                  <i className="material-icons right">play_circle_filled</i>
                </button>
              </>
            </div>
          )}
        </div>
      </div>
      <div className="about-us">
        <div className="about-image">
          <img id="friends" src={friends} />
        </div>
        <article id="about-text">
          <h1>About Us</h1>
          <p>
            Experience extraordinary travels with WonderWise, the app that
            revolutionizes your journey. Let our AI-powered technology
            personalize your travel suggestions, prioritize your safety, offer
            culinary delights, recommend hobbies, and unlock global adventures.
            From iconic cities to stunning beaches, WonderWise curates tailored
            recommendations to suit your tastes and interests. Embrace the
            wonders of the world and start your extraordinary adventure today
            with WonderWise as your trusted companion.
          </p>
         {!account && (<button
            onClick={(e) => {
              navigate("/auth/signup");
            }}
            className="waves-effect  light-blue accent-4 btn"
          >
            Sign Up
          </button>)}
        </article>
      </div>

      <div className="contributors">
        <div className="front-card card">
          <div className="card-image waves-effect waves-block waves-light">
            <img id="ikran" className="activator" src={ikran} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Ikran Haji<i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              About Ikran<i className="material-icons right">close</i>
            </span>
            <p>
              I'm Ikran Haji, a software developer
              committed to delivering high-quality software solutions.With a
              keen interest in staying up-to-date with the latest industry
              trends.I continuously enhance my skills and knowledge. My passion
              lies in creating robust and user-friendly web applications that
              meet client and user expectations. With a strong foundation in
              React, I build dynamic and interactive interfaces that enhance the
              user experience.I'm also proficient in HTML and CSS. Additionally,
              I have experience with backend technologies such as FastAPI,
              Django, and databases like MongoDB and PostgreSQL, enabling me to
              develop efficient and scalable server-side solutions. I am
              thrilled to dive deeper into the captivating world of software,
              where endless possibilities await.
            </p>
			<Link to="https://www.linkedin.com/in/ikran-haji-458098260/">
              Lets Connect!
            </Link>
          </div>
          <div className="card-action">
            <Link to="https://www.linkedin.com/in/ikran-haji-458098260/">
              Linkedin
            </Link>
            <Link to="https://gitlab.com/ikranhaji">git hub</Link>
          </div>
        </div>
        <div className="front-card card">
          <div className="card-image waves-effect waves-block waves-light">
            <img id="jeny" className="activator" src={jeny} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Jeny Kim<i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              About Jeny<i className="material-icons right">close</i>
            </span>
            <p>
              I'm Jeny Kim, a 24-year-old software developer based in NYC with
              expertise in JavaScript, Python, HTML/CSS, PostgreSQL, MongoDB,
              React, Redux, FastAPI, and GitLab Pipelines. In web development, I
              thrive at creating visually appealing and functional user
              interfaces. I also have a strong background in backend
              development, managing databases, and building server-side
              applications. With my proficiency in collaboration and version
              control tools, I can streamline the development process and
              deliver top-notch solutions. I'm truly passionate about coding and
              make it a priority to stay updated with the latest industry
              trends. I'm excited to bring my valuable skills and unwavering
              commitment to excellence to any software development team.
            </p>
            <Link to="https://www.linkedin.com/in/jenykimh/">
              Add me on LinkedIn!
            </Link>
          </div>
          <div className="card-action">
            <Link to="https://www.linkedin.com/in/jenykimh/">Linkedin</Link>
            <Link to="https://gitlab.com/jenykimh">git hub</Link>
          </div>
        </div>

        <div className="front-card card">
          <div className="card-image waves-effect waves-block waves-light">
            <img id="gianni" className="activator" src={gianni} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Gianni Thi<i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              About Gianni<i className="material-icons right">close</i>
            </span>
            <p>
              My name is Gianni Thi, and I'm from the heart of Silicon Valley,
              San Jose, California. Born and raised amidst tech giants and
              innovative startups, I am an aspiring software developer, driven
              by my fascination for technology. My particular interest lies in
              the dynamic realm of Artificial Intelligence, which I believe
              holds the key to unprecedented advancements in the future of
              technology.In my journey as a software developer, I'm eager to
              delve into the complexities of AI, motivated by a vision of
              exploring and harnessing its vast potential. My passion for
              coding, combined with my perpetual curiosity for learning, propels
              me to break barriers and embrace challenges. As a tech enthusiast,
              my ultimate goal is to contribute to the field of AI technology,
              and I'm thrilled about the exciting opportunities that lie ahead
              in this ever-evolving landscape.
            </p>
          </div>
          <div className="card-action">
            <Link to="https://www.linkedin.com/in/gianni-thi/">Linkedin</Link>
            <Link to="https://gitlab.com/gianniyonnithi">git hub</Link>
          </div>
        </div>
        <div className="front-card card">
          <div className="card-image waves-effect waves-block waves-light">
            <img id="paul" className="activator" src={paul} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Paul Baumann<i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              About Paul<i className="material-icons right">close</i>
            </span>
            <p>
              My name is James Paul Baumann. As a budding software developer I
              am excited to expand my knowledge to build exciting new
              applications and useful tools that are easy to use and scalable.
              With my experience in Python, Javascript, React, FastAPI, Django,
              and MongoDB I have become even more eager to master these
              technologies as well as add more to my toolbelt.
            </p>
          </div>
          <div className="card-action">
            <Link to="#">Linkedin</Link>
            <Link to="https://gitlab.com/baumajam">git hub</Link>
          </div>
        </div>
        <div className="front-card card">
          <div className="card-image waves-effect waves-block waves-light">
            <img id="jason" className="activator" src={jason} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Jason A. Lago<i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              About Jason<i className="material-icons right">close</i>
            </span>
            <p>
              My name is Jason A. Lago, and I am a 32-year-old software
              developer. Over the years, I have honed my skills in a wide range
              of technologies, including HTML, CSS, React, Fast API, Django,
              MongoDB, postgres, and many more. I am passionate about crafting
              robust and user-friendly web applications that meet the needs of
              clients and users alike. With a solid foundation in HTML and CSS,
              I have expanded my expertise to include modern frameworks like
              React, which allows me to build dynamic and interactive
              interfaces. Additionally, my experience with backend technologies
              such as Fast API, Django, and databases like MongoDB and postgres
              enables me to develop efficient and scalable server-side
              solutions. I am always eager to stay updated with the latest
              industry trends and continuously enhance my skills to deliver
              high-quality software solutions.
            </p>
            <Link to="https://www.linkedin.com/in/jasonlago36/">
              Lets Connect!
            </Link>
          </div>
          <div className="card-action">
            <Link to="https://www.linkedin.com/in/jasonlago36/">Linkedin</Link>
            <Link to="https://gitlab.com/jasonlago36">git hub</Link>
          </div>
        </div>
      </div>
      <ImageCarosel />
    </>
  );
}
