import React from 'react'

const ImageText = (props) => (
    <div className="img-with-text">
        <img  className="img" src={props.imageUrl} alt="img"/>
    </div>
);

export default ImageText;