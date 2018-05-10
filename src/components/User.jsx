import React from 'react';

const User = props => (
  <div>
    <img className="profile-img" src={props.account && props.account.profile_img} alt="" />
  </div>
);

export default User;
