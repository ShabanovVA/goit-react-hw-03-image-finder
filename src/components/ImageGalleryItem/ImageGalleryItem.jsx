import React from "react";

const ImageGalleryItem = ({ id, webformatURL, tags,largeImageURL }) => {
    return (
        < li key={id}>
            <img
                src={webformatURL}
                alt={tags}
                width="270px"
                height="200px" />
        </li>
)
}

export {ImageGalleryItem};