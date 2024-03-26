// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {

    const FadedKey = () => {
        return (
            <div className="app-key faded-key"></div>
        );
    }
    const SecondaryFadedKey = () => {
        return (
            <div className="app-key app-key-secondary faded-key"></div>
        );
    }
    const FadedSpaceKey = () => {
        return (
            <div className="app-key app-key-secondary faded-key" style={{width:"35vw", height:"5vw", aspectRatio:"unset"}}></div>
        );
    }

    return (
        <div>
            <div className="homepage">
                <h2>Henhen1227's Keyboard</h2>
                <div className="keyboard-layout">
                    <div className={"app-key-container first-row"}>
                        <FadedKey />
                        <FadedKey />
                        <FadedKey />
                        {/*<FadedKey />*/}
                        <Link to="/soundboard" className="app-key soundboard">KeySoundboard</Link>
                        <FadedKey />
                        <FadedKey />
                        <FadedKey />

                    </div>
                    {/* Render App Keys */}
                    <div className="app-key-container second-row">
                        <div className="app-key-secondary-container">
                            <SecondaryFadedKey />
                            <SecondaryFadedKey />
                        </div>
                        <FadedKey />
                        <FadedKey />
                        {/*<FadedKey />*/}
                        {/*<FadedKey />*/}
                        <Link to="/" className="app-key keyautoclicker faded-key">Coming Soon!</Link>
                        <Link to="/" className="app-key keymacros faded-key">Coming Soon!</Link>
                        <FadedKey />
                        <FadedKey />
                        <div className="app-key-secondary-container">
                            <SecondaryFadedKey/>
                            <SecondaryFadedKey/>
                        </div>
                    </div>

                    {/* Render Secondary Links */}
                    <div className="app-key-container app-key-secondary-container">
                        <SecondaryFadedKey/>
                        <SecondaryFadedKey/>
                        {/*<Link to="/updates" className="app-key-secondary updates">Update Log</Link>*/}
                        <Link to="/contact" className="app-key-secondary contact">Contact</Link>
                        <SecondaryFadedKey/>
                        {/*<Link to="/soundboard" className="app-key app-key-secondary" style={{width:"40vw", height:"5vw", aspectRatio:"unset"}}>KeySoundboard</Link>*/}
                        <FadedSpaceKey/>
                        <Link to="/faq" className="app-key-secondary contact">FAQ</Link>
                        <SecondaryFadedKey/>
                        <SecondaryFadedKey/>
                        <SecondaryFadedKey/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
