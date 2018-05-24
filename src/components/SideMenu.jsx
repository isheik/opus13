import React from 'react';
import { Link } from 'react-router-dom';

// const SideMenu = () => (
//   <div className="sidebar">
//     <nav className="app-global-nav">
//       <ul className="app-nav-menu">
//         <li className="app-nav-items">
//           <Link to="/" onClick={console.log(this.props.accounts[0])}>Home</Link>
//         </li>
//         <li className="app-nav-items">
//           <Link to="/test">Test</Link>
//         </li>
//       </ul>
//     </nav>
//   </div>
// );
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clicko = this.clicko.bind(this);
  }

  clicko() {
    console.log('test');
    this.props.getTweets(this.props.accounts[0]);
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
              <Link to="/favorite">Favorite</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default SideMenu;
