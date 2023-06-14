import React from 'react'
import './newpfp.css'
import pfp from './images/pfp.png'






const Newpfp = () => {
var makeWinHeight = function () {
	var vh = $(window).height();
	var projects = vh / 2;
	$('#scene, .layer.main').height(vh);
	$('#scene .col a, #scene .col').height(projects);
};
$(document).ready(function () {
	makeWinHeight();
});
$(window).resize(function () {
	makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

  return (
		<section
			id="scene"
			data-pointer-events="true"
			data-x-origin="0.5"
			data-y-origin="0.5"
			data-scalar-y="150.0"
			data-scalar-x="100.0"
			data-friction-x="0.05"
			data-friction-y="0.05"
		>
			<div class="layer main" data-depth="1.0">
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img1.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img2.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img3.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img4.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img5.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img6.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img7.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img8.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img9.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img11.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img1.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img2.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img3.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img4.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img5.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img6.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img1.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img2.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img3.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img4.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img5.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img6.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img7.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img8.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img9.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img11.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img1.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img2.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img3.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img4.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img5.jpg);"
						></div>
					</a>
				</div>
				<div class="col">
					<a href="#">
						<div class="hover">
							<div class="pad align-bottom">
								<h2>Project Title</h2>
							</div>
							<div class="more">
								<i class="demo-icon icon-plus"></i>
							</div>
						</div>
						<div
							class="bg-img"
							style="background-image:url(http://www.caseycallis.com/codepen/img6.jpg);"
						></div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Newpfp
