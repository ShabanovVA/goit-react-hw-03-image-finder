import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

    const ImageGallery = ({images}) => {
        return (
            <ul>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                    return (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            tags={tags}
                        />
                    );
                })}
            </ul>
        )
    }

export { ImageGallery };