import './App.css';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">    
      <Route path="/home">
        <Home />
      </Route >
      <Route exact path="/"   component={Landing}>
        <Landing></Landing>
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>

    </div>
  );
}

export default App;
