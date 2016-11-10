import React from 'react'
import { render } from 'react-dom'

// 1. import a few components
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import App from './App';
import './index.css';

const Home = () => (<h1>Hello From The Home Page</h1>)
const About = () => (<h1>Hello From The About Page</h1>)
const NotFound = () => (<h1>Sorry not found!</h1>)

const Index = () => (
      <BrowserRouter>
        <div>
          <ul>
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

render(
  <Index />,
  document.getElementById('root')
);
