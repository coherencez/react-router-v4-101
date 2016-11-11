import React from 'react'
import { render } from 'react-dom'

// 1. import a few components
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import App from './App';

import 'jquery';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './index.css';


const SubRoute = () => (
  <h1>HEY SUB ROUTE</h1>
)

const Home = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to={`/subroute1`}>SUB</Link></li>
      </ul>
      <h1>Hello From The Home Page</h1>
      <Match pattern="/:id" component={SubRoute} />
    </div>
  </BrowserRouter>
)
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
