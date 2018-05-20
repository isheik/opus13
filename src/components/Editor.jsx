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
      this.setState({ text: this.state.text.replace('\n', '<br>') });
      // TODO: Transform URLs to Hyperlinks
      this.props.postTweet(this.state.text);
      this.setState({ text: '' });
    }
    // if (event.key === 'Enter' && event.shiftKey) {
    // event.preventDefault();
    // this.setState({ text: `${this.state.text}` });
    // event.preventDefault();
    // }
  }
  render() {
    return (
      <form>
        <textarea className="post-text-area" name="" id="" value={this.state.text} onChange={this.changeText} onKeyPress={this.handleKeyPress} />
      </form>
    );
  }
}

export default Editor;
