import React, {useEffect, useState} from 'react';
import './SoundboardDriverPage.css';
import '../../pages/Pages.css';
import Xarrow from "react-xarrows";
import {Button} from "../../components/Button";
import Popup from "../../components/Popup";
import {useNavigate} from "react-router-dom";

const SoundboardDriverPage = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handleHashChange = () => {
        const hash = window.location.hash;
        console.log(hash)
        if (hash === '#install') {
            setShowPopup(true);
            setPopupContent('install');
        } else if (hash === '#uninstall') {
            setShowPopup(true);
            setPopupContent('uninstall');
        } else {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange, false);
        // Check the hash on initial load
        handleHashChange();

        // Cleanup
        return () => window.removeEventListener('hashchange', handleHashChange, false);
    }, []);

    useEffect(() => {
        if(!showPopup){
            navigate('/soundboard/driver');
        }
    }, [showPopup]);

    const renderPopup = () => {
        if (popupContent === 'install') {
            return (
                <Popup onClose={() => setShowPopup(false)}>
                    <h2>Install Driver</h2>
                    <p>Click the button below to download and install the KeySoundboard Virtual Audio Driver.</p>
                    <Button onClick={() => {
                        window.open("https://api.henhen1227.com/download/keysoundboard_driver");
                    }}>
                        Download
                    </Button>
                </Popup>
            );
        } else if (popupContent === 'uninstall') {
            return (
                <Popup onClose={() => setShowPopup(false)}>
                    <h2>Uninstall Driver</h2>
                    <p>Click the button below to uninstall the KeySoundboard Virtual Audio Driver.</p>
                    <Button onClick={() => {/* logic to handle uninstall */}}>
                        Uninstall
                    </Button>
                </Popup>
            );
        }
    };

    const handleInstallClick = () => {
        setShowPopup(true);
        setPopupContent('install');
    };

    const handleUninstallClick = () => {
        setShowPopup(true);
        setPopupContent('uninstall');
    };

    return (
        <div className={"driver-mainContent subpage"}>
            <div className={"driver-title"}>
            <h1>KeySoundboard Virtual Audio Driver</h1>
            <p className={"subtitle"}>Powered by BlackHole</p>
            </div>
            <div className={'driver-subsection'}>
                <h3>What is it?</h3>
                <p>KeySoundboard Virtual Audio Driver is a Virtual Microphone for macOS that allows you to route audio from your computer to (almost) any streaming software, or any other application that requires a microphone input.</p>
            </div>

            <div className={'driver-howItWorks'}>
                <div className={'driver-subsection'}>
                <h3>How does it work with KeySoundboard?</h3>
                <p>KeySoundboard will use this virtual virtual so that your sound effects can be picked up and played with your microphone.</p>
                </div>
                    <div className={'diagram'}>
                    <div className={"column"}>
                        <div className={"item"} id={"computer-microphone"}>
                            <img src={"/icon/mic.png"} alt={"microphone"}/>
                            Computer Microphone
                        </div>
                        <div className={"item"} id={"sound-files"}>
                            <img src={"/icon/folder.png"} alt={"files"}/>
                            Your sound files
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"item"} id={"microphone-effects"}>
                            <img src={"/icon/sparkles.png"} alt={"sparkle"}/>
                            Special Effects
                        </div>
                        <div className={"item"} id={"sound-effects"}>
                            <img src={"/icon/sparkles.png"} alt={"sparkle"}/>
                            Special Effects
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"item"} id={"mixer"}>
                            <img src={"/icon/arrow.triangle.merge.png"} alt={"mixer"}/>
                            {/*<img src={"/icon/arrow.triangle.pull.png"} alt={"mixer"}/>*/}
                            Mixer
                        </div>
                        <div className={"item"} style={{border: "none"}}>
                            {/*    Empty     */}
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"item highlighted-item"} id={"virtual-audio-device"}>
                            <img src={"/icon/arrow.triangle.swap.png"} alt={"Virtual Audio Device"}/>
                            Virtual Audio Device
                        </div>
                        <div className={"item"} id={"speakers"}>
                            <img src={"/icon/speaker.wave.3.png"} alt={"speakers"}/>
                            Computer Speakers
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"item"} id={"3rd-party"}>
                            <img src={"/icon/app.dashed.png"} alt={"3rd Party Software"}/>
                            3rd Party Software
                        </div>
                        <div className={"item"} style={{border: "none"}}>
                            {/*    Empty     */}
                        </div>
                    </div>
                    <Xarrow start={"computer-microphone"} end={"microphone-effects"}/>
                    <Xarrow start={"sound-files"} end={"sound-effects"}/>
                    <Xarrow start={"microphone-effects"} end={"mixer"}/>
                    <Xarrow start={"sound-effects"} end={"mixer"}/>
                    <Xarrow start={"mixer"} end={"virtual-audio-device"}/>
                    <Xarrow start={"sound-effects"} end={"speakers"}/>
                    <Xarrow start={"virtual-audio-device"} end={"3rd-party"}/>
                </div>
            </div>

            <div className={'driver-subsection'}>
                <h3>Download Driver</h3>
                <p>Get the driver to start routing audio!</p>
                <Button
                    buttonStyle={'btn--primary'}
                    buttonSize={'btn--large'}
                    onClick={handleInstallClick}
                    destination = {'#install'}
                >
                    Download Installer
                </Button>
                {/*<Button*/}
                {/*    buttonStyle={'btn--outline'}*/}
                {/*    buttonSize={'btn--large'}*/}
                {/*    onClick={handleUninstallClick}*/}
                {/*    destination = {'#uninstall'}*/}
                {/*>*/}
                {/*    Download Uninstaller*/}
                {/*</Button>*/}
            </div>
            <div className={'driver-subsection'}>
                <h3>Open Source Project</h3>
                <p>KeySoundboard Virtual Audio Driver is made possible by the open-source project BlackHole, published under a GPL-3.0 License.</p>
                <p>BlackHole is a modern macOS virtual audio driver that allows applications to pass audio to other applications with zero additional latency. <a href={"https://github.com/ExistentialAudio/BlackHole"} target={"_blank"} rel={"noopener noreferrer"}>BlackHole on GitHub</a></p>

                <p>KeySoundboard's version of BlackHole is published <a href={"https://github.io/hen1227/KeySoundboard-driver"} >here</a>.</p>
            </div>
            {showPopup && renderPopup()}
        </div>

        // Generate me an Icon for my MacOS app. The app is a soundboard app that allows the user to press keybinds to play custom sound effects. The app also allows the user to enable their microphone and output the audio to a virtual audio driver. I want the app icon to have very little detail, only simple wave shapes but I want it to be mostly dark with the few details to be colorful!
    );
}

export default SoundboardDriverPage;
