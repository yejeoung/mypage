import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
//yarn add react-router-dom@5
import MainContent from './main';
import ContactUs from './subComponents/ContactUs';
import Kakaomap from './map';
// yarn add gh-pages
// npm install gh-pages

function App() {
  return (
    <div className='body'>
      <header>
        <div className='inbox'>
          <h1 className='logo'><Link to="/">LOGO</Link></h1>
          <nav className='nav'>
            <ul>
              <li><Link to="/map">mail</Link></li>
              <li>menu1</li>
              <li>menu1</li>
              <li><Link to="/subComponents/ContactUs">menu1</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Route path="/" exact={true} component={MainContent} />
        <Route path="/subComponents/ContactUs" component={ContactUs} />
        <Route path="/map" component={Kakaomap} />
      </div>
    </div>
  );
}

export default App;