import React from 'react';
import SideMenu from './SideMenu';
import Main from './Main';
import InitLoading from './InitLoading';

// probaably have to bind this, u changed store.js too, so work on it too.
// If you use this.props inside App module, you have to change this expression
// from anonymous function to class or using React.CreaateClass
// Otherwise, your 'this' will indicate window object
// const App = props => (
//   <div className="app">
//     <SideMenu />
//     <Main {...props} />
//   </div>
// );

class App extends React.Component {
  // constructor(props) {
  // super(props);
  // }
  componentDidMount() {
    this.props.subscribeIpcEvent();
    this.props.init();
  }

  render() {
    return (
      this.props.loading
        ?
        <InitLoading />
        :
        <div className="app">
          {console.log('in app section')}
          <SideMenu {...this.props} />
          <Main {...this.props} />
        </div>
    );
  }
}

export default App;
