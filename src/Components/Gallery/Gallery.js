import React from 'react';
import '../Home/Home.css'

const Gallery = (props) => {
    const {url}=props.picture;
    return (
        <div>
            <img className='img-css' width='100%' src={url} alt="img" />
            
            
        </div>
    );
};

export default Gallery;