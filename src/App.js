import React from "react";
import './App.css';
import HomePage from "./Home";
import ComingSoonPage from "./pages/ComingSoonPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdatesPage from "./pages/UpdatesPage";
import SoundboardPage from "./soundboard/pages/Home";
import SoundboardFeaturesPage from "./soundboard/Features";
import ContactPage from "./pages/ContactPage";
import Navbar from "./Navbar";
import FAQPage from "./pages/FAQPage";
import SoundboardDriverPage from "./soundboard/pages/SoundboardDriverPage";
import Footer from "./Footer";


import ReactGA from 'react-ga4'
ReactGA.initialize("G-BJZ1YSP234");

function App() {
    if (window.location.hostname !== "localhost") {
        ReactGA.send("pageview");
    }

    return (
    <div className="App">
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" exact element={<SoundboardPage/>}/>
                    <Route path="/home" exact element={<HomePage/>}/>
                    <Route path="/faq" exact element={<FAQPage/>}/>
                    <Route path="/contact" exact element={<ContactPage/>}/>
                    <Route path="/updates" exact element={<UpdatesPage/>}/>
                    <Route path="/soundboard" exact element={<SoundboardPage/>}/>
                    <Route path="/soundboard/features" exact element={<SoundboardFeaturesPage/>}/>
                    <Route path="/soundboard/driver" exact element={<SoundboardDriverPage/>}/>
                    <Route path="/autoclicker" exact element={<ComingSoonPage/>}/>
                    <Route path="/macros" exact element={<ComingSoonPage/>}/>
                    {/*<Route path="/dining" exact element={<DiningPage/>}/>*/}
                </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
