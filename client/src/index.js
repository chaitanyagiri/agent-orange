const React = require('react');
const ReactDOM = require('react-dom');

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, PharmoMaps</p>
      </div>
    )
  }
}

ReactDOM.render(<Home></Home>, document.getElementById('app'));
