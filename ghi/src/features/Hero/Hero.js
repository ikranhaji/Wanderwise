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
import { useEffect } from 'react';
import { useGetTokenQuery } from "../../app/apiSlice";

export default function Hero(props) {
	const { data: account } = useGetTokenQuery();
	const navigate = useNavigate();
	useEffect(()=> {
		props.funcNav(false);
	},[])
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


					{!account &&
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
					}
					{account &&
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

					}
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
						className="waves-effect  light-blue accent-4 btn"
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
