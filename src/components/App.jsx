import { Component } from "react";
import { getApiPixabay } from "./api";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    image: [],
    query: '',
    page: 1,
  }
  createQuery = (valueSearch) => {
    this.setState({ query: valueSearch });
    getApiPixabay(this.state.query, this.state.page).then(image => this.setState({image}));
  };
  
  render() {
      return (
        <div>
<Searchbar queryValue={this.createQuery}></Searchbar>
          <ul>
<li>
  <img src="" alt="" />
            </li>
          </ul>
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