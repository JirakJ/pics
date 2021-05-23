import React, { useState, useEffect } from 'react';

const ImageCard = (props) => {
    const [spans, setSpans] = useState(0);
    const { description, urls } = props.image;
    const imageRef = React.createRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setCountSpans);
    })

    const setCountSpans = () => {
        const height = imageRef.current.clientHeight;

        const spans = Math.ceil(height/10);

        setSpans(spans);
    }

    return (
        <div style={{ gridRowEnd: `span ${spans}`}}>
            <img ref={imageRef}
                 alt={description}
                 src={urls.regular}
                 />
        </div>
    )
}

export default ImageCard;