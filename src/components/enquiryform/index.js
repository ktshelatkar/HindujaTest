import * as React from 'react'
import icondrop from '../../static/images/drop_icon.png';
class EnquiryForm extends React.Component {
    render() {
        return (
            <div className="emquiry-form">
                <div className="form-header">
                    <p className="blue-text">Know more bout the safe paint</p>
                    <p>Looking to paint your walls with a safe premium paint? Get in touch to know more about Ghar ka Sanitizer-Berger Slik Breathe Easy. Fill the form below</p>
                </div>
                <div className="form">
                    <input type="text" className="form-control form-rounded" placeholder="Name"></input>
                    <input type="text" className="form-control form-rounded" placeholder="Mobile Number"></input>
                    <input type="text" className="form-control form-rounded" placeholder="Email Id"></input>
                    <div className="drop-icon">
                        <select name="city" className="custom-select-sm form-control">
                            <option selected>Your City</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        <img src={icondrop} alt="comp" />
                    </div>
                    <div className="drop-icon">
                        <select name="language" className="form-control custom-select-sm">
                            <option selected>Language you prefer</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Marathi">Marathi</option>
                        </select>
                        <img src={icondrop} alt="comp" />
                    </div>
                    <textarea className="form-control textarea" rows="5" id="comment" placeholder="Message(Optional):"></textarea>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="check_agree">I agree to the terms and conditions and also authorize Barger Paints India to contact me overriding my registry on NDN</label>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}

export default EnquiryForm;
