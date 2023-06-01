import './Hero.css';
import Heroimg from './Heroimg.jpg';
import HeroBtn from './HeroBtn/HeroBtn';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import ikran from './images/ikran.jpeg';
import jeny from './images/jeny.jpeg';
import jason from './images/jason.jpeg';
import pfp from '../Userprofile/images/pfp.png';
export default function Hero(props) {
	props.funcNav(false);
	return (
		<>
			<div className="Maincontainer">
				<div className="Herocontainer">
					<img className="Hero" src={Heroimg} alt="WanderWise" />
					<div className="position">
						<div className="col s12 m6">
							<div className="card blue-grey darken-1">
								<div className="card-content white-text">
									<span className="card-title">WanderWise</span>
									<p>
										Where all your travel needs and recommendations are at the
										click of Link button. Plan your next trip with us!
									</p>
								</div>
								<div className="row">
									<div className="card-action">
										<Link to={'/auth/signup'} className="Sign-up">
											<button className="waves-effect waves-light btn">
												Sign Up
											</button>
										</Link>
										<Link to={'/auth/login'} className="Login">
											<button className="waves-effect waves-light btn">
												Login
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link to="/#aboutus"> Button </Link>
				</div>
			</div>

			<div className="about-us">
				<article id="aboutus">
					<h1>About Us</h1>
					<p>
						Welcome to WonderWise, the app that revolutionizes your travel
						experience. Powered by AI, we provide personalized travel
						suggestions, prioritize your safety, offer culinary delights,
						recommend hobbies, and unlock global adventures. With WonderWise as
						your trusted companion, every journey becomes extraordinary. Trust
						us to guide you towards unforgettable experiences, making your
						travels seamless, exciting, and tailored to your preferences.
					</p>
					<br />
					<p>
						WonderWise is more than just Link travel advisor; it's Link gateway
						to Link world of wonder and discovery. Our AI algorithms ensure your
						safety by analyzing real-time data from trusted sources, providing
						you with up-to-date and accurate information for every destination
						on your itinerary. From culinary delights to thrilling hobbies,
						WonderWise curates personalized recommendations to suit your tastes
						and interests. Explore iconic cities, relax on stunning beaches, and
						immerse yourself in diverse cultures around the globe. Let
						WonderWise inspire you, guide you, and make your travel dreams come
						true. Start your adventure today and embrace the wonders of the
						world with WonderWise as your AI-powered travel advisor.
					</p>
				</article>
				<Link to={'/auth/signup'} className="Sign-up">
					<button className="waves-effect waves-light btn">Sign Up</button>
				</Link>
			</div>

			<div className="contributors">
				<div className="my-card card">
					<div className="card-image waves-effect waves-block waves-light">
						<img id="ikran" className="activator" src={ikran} />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Ikran Haji<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<Link to="#">This is Link link</Link>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
					<div className="card-action">
						<Link to="https://www.linkedin.com/in/ikran-haji-458098260/">
							Linkedin
						</Link>
						<Link to="https://gitlab.com/ikranhaji">git hub</Link>
					</div>
				</div>
				<div className="my-card card">
					<div className="card-image waves-effect waves-block waves-light">
						<img id="jeny" className="activator" src={jeny} />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Jeny Kim<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<Link to="#">This is Link link</Link>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
					<div className="card-action">
						<Link to="#">Linkedin</Link>
						<Link to="https://gitlab.com/jenykimh">git hub</Link>
					</div>
				</div>

				<div className="my-card card">
					<div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src={pfp} />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Gianni Thi<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<Link to="#">This is Link link</Link>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
					<div className="card-action">
						<Link to="#">Linkedin</Link>
						<Link to="https://gitlab.com/gianniyonnithi">git hub</Link>
					</div>
				</div>
				<div className="my-card card">
					<div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src={pfp} />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Paul Baumann<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<Link to="#">This is Link link</Link>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
					<div className="card-action">
						<Link to="#">Linkedin</Link>
						<Link to="https://gitlab.com/baumajam">git hub</Link>
					</div>
				</div>
				<div className="my-card card">
					<div className="card-image waves-effect waves-block waves-light">
						<img id="jason" className="activator" src={jason} />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Jason A. Lago<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<Link to="#">This is Link link</Link>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
					<div className="card-action">
						<Link to="https://www.linkedin.com/in/jasonlago36/">Linkedin</Link>
						<Link to="https://gitlab.com/jasonlago36">git hub</Link>
					</div>
				</div>
			</div>

			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Footer Content</h5>
							<p className="grey-text text-lighten-4">
								You can use rows and columns here to organize your footer
								content.
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Links</h5>
							<ul>
								<li>
									<Link className="grey-text text-lighten-3" to="#!">
										Link 1
									</Link>
								</li>
								<li>
									<Link className="grey-text text-lighten-3" to="#!">
										Link 2
									</Link>
								</li>
								<li>
									<Link className="grey-text text-lighten-3" to="#!">
										Link 3
									</Link>
								</li>
								<li>
									<Link className="grey-text text-lighten-3" to="#!">
										Link 4
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2014 Copyright Text
						<Link className="grey-text text-lighten-4 right" to="#!">
							More Links
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
