import React from "react";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsOfUse from "pages/TermsOfUse";
import PrivacyPolicy from "pages/PrivacyPolicy";
import CookiesPolicy from "pages/CookiesPolicy";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
