import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.changeText = this.changeText.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  changeText = (event) => {
    this.setState({ searchText: event.target.value });
  }
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchTwitter(this.state.searchText);
  }
  render() {
    return (
      <div className="search-bar-form-container">
        <form id="search-bar-form" onSubmit={this.handleSearchSubmit}>
          <input id="search-bar" type="text" onChange={this.changeText} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
