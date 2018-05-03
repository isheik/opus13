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
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.props.postTweet(this.state.text);
      this.setState({ text: '' });
    }
  }
  render() {
    return (
      <form>
        <textarea name="" id="" cols="30" rows="5" value={this.state.text} onChange={this.changeText} onKeyDown={this.handleKeyPress} />
      </form>
    );
  }
}

export default Editor;
