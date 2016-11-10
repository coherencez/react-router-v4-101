import React, { Component } from 'react'
import { render } from 'react-dom'

// 1. import a few components
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import App from './App';
import './index.css';

class Home extends Component {
  render() {
    return (
      <h1>Hello From The Home Page</h1>
    )
  }
}
class About extends Component {
  render() {
    return (
      <h1>Hello From The About Page</h1>
    )
  }
}
class NotFound extends Component {
  render() {
    return (
      <h1>Sorry not found!</h1>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            {/* 6. Use the parent's matched pathname to link relatively */}
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/react`}>React</Link></li>
          </ul>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/react" component={App} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    )
  }
}

render(
  <Index />,
  document.getElementById('root')
);
