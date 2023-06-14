import "./App.css";
import { useState } from "react";
import { Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

import Footer from "./features/Footer/Footer";
import Nav from "./features/Nav/Nav";
import Hero from "./features/Hero/Hero";
import Login from "./features/login/Login";
import Signup from "./features/Signup/Signup";
import Recommendation from "./features/Recommendation/Recommendation";
import Userprofile from "./features/Userprofile/Userprofile";
import UserRecommendationDetails from "./features/Userprofile/UserRecommendationDetails";
import AboutUsPage from './features/AboutUsPage/AboutUsPage';
import Rec from "./features/tabs/recs";


function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero funcNav={setShowNav} />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="about" element={<AboutUsPage />} />
        <Route path="/createrecommendations" element={<Recommendation />} />
        <Route path="/myprofile" element={<Userprofile />} />
        <Route
          path="/recdetails/:itemId"
          element={<UserRecommendationDetails />}
        />
        <Route
          path="/tabs"
          element={<Rec />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
