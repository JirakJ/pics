import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(i => <img alt={i.alt_description}
                                              src={i.urls.regular}
                                              key={i.id}
    />);

    return <div>{images}</div>
}

export default ImageList;
