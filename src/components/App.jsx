import React from 'react';
import SideMenu from './SideMenu';
import Main from './Main';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { message: "something" };
//     }

//     onChange(e) {
//         this.setState( {message: e.target.value} );
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <input type="text" onChange = { this.onChange.bind(this) } />
//                     <p>{ this.state.message }</p>
//                 </div>
//                 <div>
//                     <h1>Simple app</h1>
//                     <ul className="header">
//                         <li>Home</li>
//                         <li>Stuff</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div className="content">
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }
// probaably have to bind this, u changed store.js too, so work on it too.
// If you use this.props inside App module, you have to change this expression
// from anonymous function to class or using React.CreaateClass
// Otherwise, your 'this' will indicate window object
const App = props => (
  <div className="app">
    <SideMenu />
    <Main {...props} />
  </div>
);

export default App;
