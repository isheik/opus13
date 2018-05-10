import React from 'react';

const User = props => (
  <div>
    <img src={props.account && props.account.profile_img} alt="" />
  </div>
);

export default User;
