import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    valueSearch: null,
  }

  createQuery = (valueSearch) => {
    this.setState({ valueSearch });
  };
  
  render() {
    return (
      <div>
        <Searchbar queryValue={this.createQuery}></Searchbar>
        <ImageGallery valueSearch={this.state.valueSearch} />
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