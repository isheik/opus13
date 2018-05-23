const reply = (state = null, action) => {
  switch (action.type) {
    case 'SET_IN_REPLY_TO':
      return action.replyToID;
    default:
      return state;
  }
};

export default reply;

