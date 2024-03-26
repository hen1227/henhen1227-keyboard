import React from 'react';
import './DriverSection.css';
import {Button} from "../components/Button";

function DriverSection() {

    return (
        <div className={'driverSection'}>
            <div className="driverSection-content">
                <h3>KeySoundboard Virtual Audio Driver</h3>
                <h6 className={'subtitle'}>Powered by BlackHole</h6>
                <div className="hero-btns">
                    <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        destination="/soundboard/driver"
                    >
                        DOWNLOAD INSTALLER
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        destination="/soundboard/driver"
                    >
                        LEARN MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DriverSection;
