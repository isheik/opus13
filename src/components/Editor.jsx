import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  changeText = (event) => {
    this.setState({ text: event.target.value });
  }
  handleKeyPress = (event) => {
    // event.preventDefault();

    if (event.key === 'Enter') {
      this.props.postTweet(this.state.text);
    }
  }
  render() {
    return (
      <form>
        <textarea name="" id="" cols="30" rows="5" onChange={this.changeText} onKeyDown={this.handleKeyPress} />
      </form>
    );
  }
}

export default Editor;
