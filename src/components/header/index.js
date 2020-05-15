import * as React from 'react'
import logo from '../../static/images/logo.png';
import certi1 from '../../static/images/img-1.png';
import certi2 from '../../static/images/img-2.png';
import certi3 from '../../static/images/img-3.png';
import sprey from '../../static/images/sprey.png';

class Header extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <div className="container">
                        <div className="header-banner">
                            <div className="top-header">
                                <img src={logo} className="logo" alt="logo" />
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <div className="left-text">
                                        <h1 className="color-white">Ghar ka</h1>
                                        <h1 className="color-black">Sanitizer</h1>
                                        <h4><span>The point</span> for healthy homes</h4>
                                        <div className="certi">
                                            <div>
                                                <ul>
                                                    <li><img src={certi1} alt="logo" /></li>
                                                    <li><img src={certi2} alt="logo" /></li>
                                                    <li><img src={certi3} alt="logo" /></li>
                                                </ul>
                                            </div>
                                            <div className="tg-text">
                                                <h5>The Indian Medical Association</h5>
                                                <h5><span>approved by</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="sprey-img">
                                        <img src={sprey} alt="logo" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="check">
                                        <ul>
                                            <li>Kills 99% Bacteria</li>
                                            <li>Reduces Pollution & Protects Immunity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
