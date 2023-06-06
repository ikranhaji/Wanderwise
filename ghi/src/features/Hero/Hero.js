import './Hero.css';
import logo from './images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ikran from './images/ikran.jpeg';
import jeny from './images/jeny.jpeg';
import jason from './images/jason.jpeg';
import pfp from '../Userprofile/images/pfp.png';
import tropicalVid from './images/tropical-vid.mp4';
import friends from './images/Traveling-friends.png';
import ImageCarosel from '../ImageCarosel/ImageCarosel';

export default function Hero(props) {
	props.funcNav(false);
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

					<div className="button-box">
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
					</div>
					{/* <div className='cta'>
						Contact us
				</div> */}
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

					<button
						onClick={(e) => {
							navigate('/auth/signup');
						}}
						className="waves-effect  light-green accent-4 btn"
					>
						Sign Up
					</button>
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
				<div className="front-card card">
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

				<div className="front-card card">
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
				<div className="front-card card">
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
				<div className="front-card card">
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
			<ImageCarosel />

		</>
	);
}
