import './App.css';
import logo from './logo.svg';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT"  logoSRC={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Content />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
