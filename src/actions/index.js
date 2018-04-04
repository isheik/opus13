import * as account from './account';
import * as tweets from './tweets';

let actionCreators;

export default Object.assign(
  actionCreators,
  account,
  tweets,
);
