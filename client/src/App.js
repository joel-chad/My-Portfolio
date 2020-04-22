import React from 'react';
import Nav from './components/Nav'
import './styles/index.css'
import Name from './components/Name';
import About from './components/About';
import Contact from './components/Contact';
import {Route} from 'react-router-dom'
import BlogTimeline from './components/BlogTimeline';
import ProjectTimeline from './components/ProjectTimeline';

function App() {
  return (
    <div className="App" >
      <Nav/>
      <Route exact path='/' component={Name}/>
      <Route path='/home' component={Name}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/projects' component={ProjectTimeline}/>
      <Route path='/blog' component={BlogTimeline}/>
      <div className='relative'>
      <footer className='w-full text-xs pb-0 fixed bottom-0 text-center'>
      <span className='flex text-center text-gray-400'>Social Media icons by <a className='text-gray-700' target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></span>
      </footer>
      </div>
    </div>
  );
}

export default App;
