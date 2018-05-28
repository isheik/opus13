import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // text: '',
    // };
  }
  changeText = (event) => {
    // this.setState({ text: event.target.value });
    this.props.setText(event.target.value);
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      // this.setState({ text: this.state.text.replace('\n', '<br>') });
      this.props.setText(this.props.text.replace('\n', '<br>'));
      // TODO: Transform URLs to Hyperlinks
      this.props.postTweet(this.props.text, this.props.replyToID);
      // this.setState({ text: '' });
      this.props.setText('');
    }
    console.log(this.props.replyToID);
    // if (event.key === 'Enter' && event.shiftKey) {
    // event.preventDefault();
    // this.setState({ text: `${this.state.text}` });
    // event.preventDefault();
    // }
  }
  render() {
    return (
      <form>
        <textarea className="post-text-area" name="" id="" value={this.props.text} onChange={this.changeText} onKeyPress={this.handleKeyPress} />
      </form>
    );
  }
}

export default Editor;
