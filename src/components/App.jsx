import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    valueSearch: '',
  }

  createQuery = (valueSearch) => {
    return this.setState({ valueSearch });
  };
  
  render() {
      return (
        <div>
<Searchbar queryValue={this.createQuery}></Searchbar>
          <ImageGallery valueSearch={this.state.valueSearch}>
<li>
  <img src="" alt="" />
            </li>
          </ImageGallery>
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