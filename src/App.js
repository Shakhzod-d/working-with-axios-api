// import Photos from './components/Photos';
// import SassTutorial from './sassFiles/SassTutorial';
import Blog from './Blog';
import About from './About';
import Nav from './Nav';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        {' '}
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </Switch>
          {/* <About /> */}
          {/* <SassTutorial />
        <Photos /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is Home page</p>
    </div>
  );
};

export default App;
