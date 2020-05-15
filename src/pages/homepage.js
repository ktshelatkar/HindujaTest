import * as React from 'react'
import Imagegrid from '../components/imagegrid';
import EnquiryForm from '../components/enquiryform';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="row dip">
            <div className="col-md-8 ">
              <div className="row no-gutters smdip">
                <div className="col-md-8 full">
                  <div className="about-text">
                    <p>This paint for healthy homes.Do you think sanitizing your hand is enough to saty safe? Think again.Iti is time you sanitized your home with <b>Berger Silk Breathe Easy</b>.</p>
                    <p>A luxury premium emulsion, the <b>Berger Silk Breathe Easy</b> paint kills 99% of bacteria and reduces pollution. It has been formulated with 100% acrylic emulsion and vibrant pigments. Keeping in mind the health of your family members, <b>Berger Silk Breathe Easy</b> has low Volatile Organic Compounds and Formaldehyde reduction abilities.
                </p>
                    <p>Berger Slik Breath Easy has been tested and certified for being an environment-friendly paint. boost the health of your family m members while they are indoors with <b>Ghar ka sanitizer</b> </p>
                  </div>
                </div>
                <div className="col-md-4 full">
                  <Imagegrid />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <EnquiryForm />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default HomePage;
