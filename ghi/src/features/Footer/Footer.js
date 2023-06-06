import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer indigo lighten-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">WanderWise</h5>
            <p className="grey-text text-lighten-4"></p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/"
                >
                  Travel Advisories
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://www.hotels.com/"
                >
                  Accomodations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2023 Team Jordan Year</div>
      </div>
    </footer>
  );
}
