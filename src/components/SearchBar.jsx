import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'a',
    };
    this.changeText = this.changeText.bind(this);
  }
  changeText = (event) => {
    this.setState({ searchText: event.target.text });
  }
  render() {
    return (
      <form>
        <input type="text" onChange={this.changeText} />
      </form>
    );
  }
}
export default SearchBar;
