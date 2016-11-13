import React from 'react'
import { render } from 'react-dom'
import GoogleMap from 'google-map-react'
// 1. import a few components
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import App from './App';

import 'jquery';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './index.css';

class Home extends React.Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
    places: ['one', 'two', 'three', 'four', 'five']
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: 'space-around'}}>
        <div className="mapdiv" style={{ height: "90vh", width: 750 }}>
          <GoogleMap
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom} />
        </div>
        <div style={{height: "90vh", width: 750, overflowY: "scroll", padding: 10 }}>
          {this.props.places.map((place, i) =>
            <div className="col s12 m6" key={i}>
              <div className="card blue-grey darken-1 boxShadow">
                <div className="card-content white-text">
                  <span className="card-title">{place}</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                  <a className="waves-effect waves-light btn"><i className="material-icons">phone</i></a>
                  <a className="waves-effect waves-light btn" style={{background: 'red'}}><i className="material-icons">delete</i></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
const About = () => (<h1>Hello From The About Page</h1>)
const NotFound = () => (<h1>Sorry not found!</h1>)

const Index = () => (
      <BrowserRouter>
        <div>
          <nav>
            <div className="nav-wrapper">
              <Link className="brand-logo" to={`/`}>Logo</Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/react`}>React</Link></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/react`}>React</Link></li>
              </ul>
            </div>

            </nav>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/react" component={App} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    )

render(
  <Index />,
  document.getElementById('root')
);
