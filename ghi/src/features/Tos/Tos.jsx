import React from 'react';
import './Tos.css';
import round from '../AboutUsPage/round-logo.png'

const Tos = () => {
	return (
		<div className="about-us-main-container">
			<div className="information-container">
				<article className="about-us-section">
					<h1>
						W<img id="about-friends" src={round} alt="" />
						nderWise Terms of Serive
					</h1>

					<p>
						Welcome to our platform! These Terms of Service ("Terms") govern
						your access to and use of our services, including any content,
						features, or functionality offered on our platform (collectively
						referred to as the "Service"). Please read these Terms carefully
						before using our Service.
					</p>

					<h4>1. Acceptance of Terms</h4>
					<p>
						By accessing or using our Service, you agree to be bound by these
						Terms and all applicable laws and regulations. If you do not agree
						with any of these Terms, you are prohibited from using or accessing
						the Service.
					</p>

					<h4>2. Eligibility</h4>
					<p>
						You must be at least 18 years old or the age of majority in your
						jurisdiction to use our Service. By using the Service, you represent
						and warrant that you meet the eligibility requirements.
					</p>

					<h4>3. User Accounts</h4>
					<p>
						To access certain features of the Service, you may be required to
						create an account. You are responsible for providing accurate and
						complete information during the registration process. You must keep
						your account information secure and promptly notify us of any
						unauthorized use or suspected security breach.
					</p>

					<h4>4. Content</h4>
					<p>
						a. Our Service allows you to post, link, store, share, and otherwise
						make available certain information, text, graphics, videos, or other
						material ("Content"). You retain ownership of the Content you
						submit, but by posting it on our Service, you grant us a worldwide,
						non-exclusive, royalty-free license to use, copy, modify,
						distribute, and display the Content for the purpose of providing the
						Service.
					</p>
					<p>
						b. You are solely responsible for the Content you post on our
						Service. You agree not to post or transmit any Content that is
						unlawful, defamatory, infringing, abusive, offensive, or otherwise
						objectionable. We reserve the right to remove any Content that
						violates these Terms.
					</p>

					<h4>5. Intellectual Property</h4>
					<p>
						All intellectual property rights in the Service, including but not
						limited to trademarks, logos, and copyrights, are owned by us or our
						licensors. You may not use, reproduce, modify, or distribute any
						intellectual property without our prior written consent.
					</p>

					<h4>6. Prohibited Activities</h4>
					<p>While using the Service, you agree not to:</p>
					<ul>
						<li>Violate any applicable law, regulation, or these Terms;</li>
						<li>
							Engage in any unauthorized use or access of our systems, networks,
							or data;
						</li>
						<li>Interfere with or disrupt the Service or its servers;</li>
						<li>
							Use the Service to transmit any viruses, malware, or other harmful
							code;
						</li>
						<li>
							Engage in any fraudulent, deceptive, or misleading activities;
						</li>
						<li>
							Impersonate any person or entity or falsely state or misrepresent
							your affiliation with a person or entity;
						</li>
						<li>
							Collect or store personal information of others without their
							consent;
						</li>
						<li>Use the Service for any illegal or unauthorized purpose.</li>
					</ul>

					<h4>7. Third-Party Links</h4>
					<p>
						Our Service may contain links to third-party websites or services
						that are not owned or controlled by us. We have no control over and
						assume no responsibility for the content, privacy policies, or
						practices of any third-party websites or services. You acknowledge
						and agree that we shall not be liable for any damages or losses
						arising from your use of third-party websites or services.
					</p>

					<h4>8. Disclaimers and Limitation of Liability</h4>
					<p>
						a. We provide the Service on an "as is" and "as available" basis. We
						do not warrant that the Service will be uninterrupted, error-free,
						or secure. We disclaim all warranties, whether express, implied, or
						statutory, including but not limited to the warranties of
						merchantability, fitness for a particular purpose, and
						non-infringement.
					</p>
					<p>
						b. In no event shall we be liable for any indirect, incidental,
						special, or consequential damages arising out of or in connection
						with the use or performance of the Service.
					</p>
					<p>
						c. Our total liability for any claim arising out of or in connection
						with these Terms or the Service shall be subject to the limitations
						set forth in applicable laws.
					</p>
				</article>
			</div>
		</div>
	);
};

export default Tos;
