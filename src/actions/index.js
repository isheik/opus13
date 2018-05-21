import * as account from './account';
import * as tweets from './tweets';
import * as editorText from './editorText';

let actionCreators;

export default Object.assign(
  account,
  tweets,
  editorText,
);
