import React from 'react';
import { Link } from 'react-router-dom';

// June 12 Make Menu
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clicko = this.clicko.bind(this);
    this.handleFavoriteMenuClick = this.handleFavoriteMenuClick.bind(this);
    this.handleMentionedMenuClick = this.handleMentionedMenuClick.bind(this);
  }

  clicko() {
    console.log('test');
    this.props.getTweets(this.props.accounts[0]);
  }

  //MAY27 from here. add click process. Modify FavTabcontainer and update addTweetToTab for Favorite
  handleFavoriteMenuClick() {
    this.props.getFavoriteTweets(this.props.accounts[0]);
  }
  handleMentionedMenuClick() {
    this.props.getMentionedTweets(this.props.accounts[0]);
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="app-global-nav">
          <ul className="app-nav-menu">
            <li className="app-nav-items">
              <Link to="/" onClick={this.clicko} >Home</Link>
            </li>
            <li className="app-nav-items">
              <Link to="/test">Test</Link>
            </li>
            <li className="app-nav-items">
              <Link to="/favorite" onClick={this.handleFavoriteMenuClick}>Favorite</Link>
            </li>
            <li className="app-nav-items">
              <Link to="/mentioned" onClick={this.handleMentionedMenuClick}>Mentioned</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default SideMenu;
