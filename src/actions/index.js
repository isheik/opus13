import * as account from './account';
import * as tweets from './tweets';
import * as editorText from './editorText';
import * as reply from './reply';
import * as loading from './loading';

let actionCreators;

export default Object.assign(
  account,
  tweets,
  editorText,
  reply,
  loading,
);
