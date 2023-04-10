import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Searchbar extends Component {
    state = {
        query: '',
    }

    onChange = e => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = e => {
      e.preventDefault();

      if (this.state.query.trim() === '') {
        toast.warn('Please enter a search query');
        return;
      };

      this.props.queryValue(this.state.query);
      this.reset();
      }
    reset = () => {
        this.setState({ query: '' })
    }
    
    render() {
      return (
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
              value={this.state.query}
              onChange={this.onChange}
            />
          </form>
        </header>
      )
    }
}