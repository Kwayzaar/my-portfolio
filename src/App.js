import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        {/* include "exact" after home path so route doesn't stop at slash */}
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        {/* post/:slug placed above /post -> no slug, render posts  */}
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
