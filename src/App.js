import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import RouteTest from './components/RouteTest';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/new'>
          <New />
        </Route>
        <Route path='/edit'>
          <Edit />
        </Route>
        <Route path='/diary'>
          <Diary />
        </Route>
        <RouteTest />
      </Switch>
    </Router> 
  );
}

export default App;
