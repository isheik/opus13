import React from 'react';

class Editor extends React.Component {
  state = {
    text: '',
  }
  render() {
    return (
      <form>
        <textarea name="" id="" cols="30" rows="5" onKeyDown={this.props.handleKeyPress} />
      </form>
    );
  }
}

export default Editor;
