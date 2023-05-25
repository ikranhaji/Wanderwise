import './App.css';
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Nav from './features/Nav/Nav';
import Hero from './features/Hero/Hero';
import Login from './features/login/Login';
import Signup from './features/Signup/Signup';
import Recommendation from './features/Recommendation/Recommendation';
import Userprofile from './features/Userprofile/Userprofile';
import UserRecommendationDetails from './features/Userprofile/UserRecommendationDetails'


function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Hero/>} />
				<Route path='auth'>
					<Route path='login' element={<Login/>} />
					<Route path='signup' element={<Signup/>} />
				</Route>
				<Route path='/createrecommendations' element={<Recommendation/>} />
				<Route path='/myprofile' element={<Userprofile/>} />
				<Route path='/recdetails/:itemId' element={<UserRecommendationDetails/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
