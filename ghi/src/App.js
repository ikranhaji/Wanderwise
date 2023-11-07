import "./App.css";
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Footer from "./features/Footer/Footer";
import Nav from "./features/Nav/Nav";
import Hero from "./features/Hero/Hero";
import Login from "./features/login/Login";
import Signup from "./features/Signup/Signup";
import Recommendation from "./features/Recommendation/Recommendation";
import Userprofile from "./features/Userprofile/Userprofile";
import UserRecommendationDetails from "./features/Userprofile/UserRecommendationDetails";
import AboutUsPage from "./features/AboutUsPage/AboutUsPage";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(
    domain,
    "https://wanderwise.gitlab.io/module3-project-gamma/"
  );

  return (
    <BrowserRouter basename={basename}>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
