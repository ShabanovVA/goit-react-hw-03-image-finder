const ImageGalleryItem = ({id, smallImg, tag}) => {
    return (
        < li key={id}>
            <img
                src={smallImg}
                alt={tag}
                width="270px"
                height="200px" />
        </li>
)
}

export {ImageGalleryItem};