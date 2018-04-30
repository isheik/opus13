import React from 'react';

class PostEditor extends React.Component {
  state = {
    text: '',
  }
  render() {
    return (
      <div>
        <div>iconimg</div>
        <textarea name="" id="" cols="30" rows="5" />
        <button>POST</button>
      </div>
    );
  }
}

export default PostEditor;
