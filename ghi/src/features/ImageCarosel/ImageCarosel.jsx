import { Link } from 'react-router-dom';
import './ImageCarosel.css';
import rock from './images/rock-climbing.jpg';

const ImageCarosel = () => {
	return (
		<>
        <div className='carosel-container'>
            <h1>Plaßces To Travel</h1>

<section id="slider">
  <input type="radio" name="slider" id="s1" hidden checked/>
  <input type="radio" name="slider" id="s2" hidden checked/>
  <input type="radio" name="slider" id="s3"hidden checked/>
  <input type="radio" name="slider" id="s4" hidden checked/>
  <input type="radio" name="slider" id="s5"hidden checked/>

  <label htmlFor="s1" id="slide1"><img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt=""/></label>
  <label htmlFor="s2" id="slide2"><img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt=""/></label>
  <label htmlFor="s3" id="slide3"><img src="https://wallpaperaccess.com/full/1154341.jpg" alt=""/></label>
  <label htmlFor="s4" id="slide4"><img src="https://wallpapercave.com/wp/wp2634222.jpg" alt=""/></label>
  <label htmlFor="s5" id="slide5"><img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt=""/></label>
</section>
        </div>
		</>
	);
};

export default ImageCarosel;
