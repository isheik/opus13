import React from 'react';

class PostEditor extends Component {
  state = {
    text: "",
  }
  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>POST</button>
      </div>
    );
  }
}

export default PostEditor;
