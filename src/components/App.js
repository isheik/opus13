import React from "react";
import { render } from "react-dom";
import SideMenu from "./SideMenu";

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

const App = () => (
    <div>
        <SideMenu />
    </div>
);

export default App;
