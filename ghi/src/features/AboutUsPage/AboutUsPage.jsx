import React from 'react'
import './AboutUsPage.css'
import round from './round-logo.png'
import hiking from './hiking.jpg'

const AboutUsPage = () => {
  return (
		<div className="about-us-main-container">
			<div className="information-container">
				<article className="about-us-section">
					<h1>
						W<img id="about-friends" src={round} alt="" />
						nderWise
					</h1>
					<p>
						Introducing WonderWise, the revolutionary app that is set to
						transform your travel experiences and take your journey to
						extraordinary heights. Powered by state-of-the-art AI technology,
						WonderWise offers a personalized and immersive travel experience
						like no other.
					</p>

					<p>
						<img id='hiking' src={hiking} />
						With WonderWise, your travel suggestions are no longer a
						one-size-fits-all approach. Our AI-powered algorithms analyze your
						preferences, interests, and previous travel history to curate
						tailored recommendations that perfectly align with your unique
						tastes and interests. Whether you're a history buff, a foodie, an
						adventure seeker, or a nature enthusiast, WonderWise understands you
						and ensures that every destination and activity on your itinerary
						resonates with your passions.
					</p>

					<p>
						One of the key priorities of WonderWise is your safety. We
						understand the importance of feeling secure while exploring
						unfamiliar territories. Our app leverages advanced technologies to
						provide real-time safety alerts and recommendations, ensuring that
						you stay informed and prepared for any unforeseen circumstances.
						From local safety guidelines to emergency contact information,
						WonderWise keeps you well-informed, allowing you to focus on
						enjoying your journey with peace of mind.
					</p>

					<p>
						WonderWise goes beyond traditional travel apps by offering culinary
						delights that will tantalize your taste buds. Whether you're a fan
						of exotic cuisine, local street food, or fine dining experiences,
						WonderWise provides curated recommendations of the best restaurants
						and food establishments at your chosen destination. Discover hidden
						gems, savor authentic flavors, and embark on a culinary adventure
						that will leave you craving for more.
					</p>

					<p>
						In addition to travel and gastronomy, WonderWise also acts as your
						personal hobby curator. Our AI technology identifies your hobbies
						and interests, and suggests activities and experiences that align
						with your passions. From art galleries to hiking trails, music
						festivals to cooking classes, WonderWise opens doors to new hobbies
						and experiences, ensuring that your journey is not just about
						sightseeing but also about embracing new interests and expanding
						your horizons.
					</p>

					<p>
						With WonderWise as your trusted companion, you can unlock global
						adventures like never before. Explore iconic cities, relax on
						stunning beaches, trek through breathtaking landscapes, or immerse
						yourself in vibrant cultures. WonderWise provides you with detailed
						information, insider tips, and off-the-beaten-path recommendations,
						enabling you to make the most of your travel experience and create
						unforgettable memories.
					</p>

					<p>
						Embrace the wonders of the world and embark on your extraordinary
						adventure today with WonderWise. Say goodbye to cookie-cutter travel
						plans and let our AI-powered app transform your journey into an
						unparalleled exploration of your passions and interests. Discover
						new horizons, connect with diverse cultures, and make every moment
						count with WonderWise by your side. Your extraordinary travel
						experience awaits!
					</p>
				</article>
			</div>
		</div>
	);
}

export default AboutUsPage
