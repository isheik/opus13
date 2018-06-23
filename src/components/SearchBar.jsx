import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.changeText = this.changeText.bind(this);
  }
  changeText = (event) => {
    this.setState({ searchText: event.target.text });
  }
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchTwitter(this.state.searchText);
  }
  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <input type="text" onChange={this.changeText} />
      </form>
    );
  }
}
export default SearchBar;
