import * as React from 'react'
import comlogo1 from '../../static/images/com-logo-1.png';
import comlogo2 from '../../static/images/com-logo-2.png';
import comlogo3 from '../../static/images/com-logo-3.png';
import comlogo4 from '../../static/images/com-logo-4.png';
import ImageText from './imagetext';

class Imagegrid extends React.Component {
    render() {
        return (
            <div className="image-grid">
                <p>Why choose Berger Sliks Breathe Easy?</p>
                <div className="wrapper">
                    <div className="box a">
                        <ImageText imageUrl={comlogo1} />
                        <h5>Anti pollution <br />& Anti-bacterial</h5>
                    </div>
                    <div className="box b">
                        <ImageText imageUrl={comlogo2} />
                        <h5>Enviroment Friendly <br />& Low VOC</h5>
                    </div>
                    <div className="box c">
                        <ImageText imageUrl={comlogo3} />
                        <h5>Kill 99% bacteria</h5>
                    </div>
                    <div className="box d">
                        <ImageText imageUrl={comlogo4} />
                        <h5 className="small-t"><span>Apporved By</span><br />The Indian Mediacl Association</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Imagegrid;
