import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
       <Switch>
             <Route exact path='/' component= {LandingPage}/>
            <Route exact path='/home' component= {Home}/>
            <Route exact path='/dog' component= {DogCreate}/> 
             <Route exact path='/dogs/:id' component= {Detail}/> 
          </Switch>
       </BrowserRouter>
    
  );
}

export default App;