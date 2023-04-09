import { Component } from "react";
import { getApiPixabay } from "components/api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        dataImg: [],
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.valueSearch !== this.props.valueSearch) {
            getApiPixabay(this.props.valueSearch, this.state.page).then(response =>
                this.setState({ dataImg: response.data.hits }))
        };
    }

    render() {
        return (
            <ul>
                {this.state.dataImg.map(({id, webformatURL, largeImageURL, tag}) => {
                    return (
                        <ImageGalleryItem
                            key={id}
                            smallImg={webformatURL}
                            normalImg={largeImageURL}
                            tag={tag}
                        />
                    );
                })}
            </ul>
        );
    };
}