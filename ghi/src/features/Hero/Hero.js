import './Hero.css';
import Heroimg from './Heroimg.jpg';
import HeroBtn from './HeroBtn/HeroBtn';
import logo from './logo.png'

export default function Hero() {
	return (
		<>
			<div id="hero">
				<div className="overlay">
					<img src={Heroimg} alt="" />
					<div className="hero-message">
						<img src={logo} className='logo'/>
						<p>
							Hello world this is just some random textHello world this is just
							some random textHello world this is just some random text
						</p>
						<div className="btn-box">
							<HeroBtn />
							<HeroBtn />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
