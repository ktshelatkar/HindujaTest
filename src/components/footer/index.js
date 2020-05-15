import * as React from 'react'
import iconf from '../../static/images/icon-f.png';
import icont from '../../static/images/icon-t.png';
import icony from '../../static/images/icon-y.png';
import iconl from '../../static/images/icon-l.png';
import iconp from '../../static/images/icon-p.png';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-md-9">
                        <div className="left-f">
                            <ul>
                                <li>Sitemap | </li>
                                <li>Disclaimer | </li>
                                <li>Privacy Policy | </li>
                                <li><sup>*</sup>Terms & Condition | </li>
                                <li>© 2020 Berger Paints India Limited - All Rights Reserved | Website by HGS Intractive</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="right-f">
                            <ul>
                                <p>Contact with us:</p>
                                <li><img src={iconf} alt="facebook" /></li>
                                <li><img src={icont} alt="twitter" /></li>
                                <li><img src={icony} alt="youtub" /></li>
                                <li><img src={iconl} alt="linked" /></li>
                                <li><img src={iconp} alt="pintrest" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;
