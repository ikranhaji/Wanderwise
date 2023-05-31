import "./Hero.css";
import Heroimg from "./Heroimg.jpg";
import HeroBtn from "./HeroBtn/HeroBtn";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Hero(props) {
  props.funcNav(false);
  return (
    <>
      <div>
        <div className="Herocontainer">
          <img className="Hero" src={Heroimg} alt="WanderWise" />
          <div className="row">
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
                    <span className="whatever">
                      <Link to={"/auth/login"} className="Login">
                        <button className="waves-effect waves-light btn">
                          Login
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">WanderWise</span>
              <p classNameName="Hero-text">
                <b>
                  Where all your travel needs and recommendations are at the
                  click of a button. Plan your next trip with us!
                </b>
              </p>
              <div className="card-action">
                <Link to={"/auth/signup"} classNameName="Sign-up">
                  <button classNameName="waves-effect waves-light btn">
                    Sign Up
                  </button>
                </Link>
                <Link to={"/auth/login"} classNameName="Login">
                  <button classNameName="waves-effect waves-light btn">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        <div classNameName="row"></div>
      </div>
    </>
  );
}
