import React from "react";
import Navbar from "layouts/Navbar";
import Hero from "layouts/Hero";
import ConferenceWith from "layouts/ConferenceWith";
import Highlights from "layouts/Highlights";
import GreatestMinds from "layouts/GreatestMinds";
import Features from "layouts/Features";
import Team from "layouts/Team";
import Welcome from "layouts/Welcome";
import Footer from "layouts/Footer";
import Contact from "layouts/Contact";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-200px">
        <ConferenceWith />
      </div>
      <div className="mb-200px">
        <Highlights />
      </div>
      <div className="mb-200px">
        <GreatestMinds />
      </div>
      <div className="mb-200px">
        <Features />
      </div>
      {/* <div className="mb-200px">
      <Team />
    </div> */}
      <div className="mb-100px" id="form">
        <Contact />
      </div>
      <div className="mb-100px">
        <Welcome />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
