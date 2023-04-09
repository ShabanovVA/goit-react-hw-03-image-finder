import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { getApiPixabay } from "components/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    valueSearch: null,
    images: [],
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    const { valueSearch, page } = this.state;
    
    if (prevState.valueSearch !== valueSearch) {
      getApiPixabay(valueSearch, page).then(response =>
      this.setState({ images: response.data.hits }))
    };
  };

  createQuery = (valueSearch) => {
    this.setState({ valueSearch });
  };
  
  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar queryValue={this.createQuery}></Searchbar>
        <ImageGallery images={images} />
        <button type="submit">
          <span>Load more</span>
        </button>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
  );
  }
};