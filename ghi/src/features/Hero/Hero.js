import "./Hero.css";
import Heroimg from "./Heroimg.jpg";
import HeroBtn from "./HeroBtn/HeroBtn";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Hero(props) {
  props.funcNav(false);
  return (
    <>
      <div className="Maincontainer">
        <div className="Herocontainer">
          <img className="Hero" src={Heroimg} alt="WanderWise" />
          <img className="logo" src={logo} alt="logo" />
          <div className="row position">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">WanderWise</span>
                  <p>
                    Where all your travel needs and recommendations are at the
                    click of a button. Plan your next trip with us!
                  </p>
                </div>
                <div class="row">
                  <div className="card-action">
                    <Link to={"/auth/signup"} className="Sign-up">
                      <button className="waves-effect waves-light btn">
                        Sign Up
                      </button>
                    </Link>
                    <Link to={"/auth/login"} className="Login">
                      <button className="waves-effect waves-light btn">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
