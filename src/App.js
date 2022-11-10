// import logo from './logo.svg';
import './input.css'
import './App.css';
import Dashboard from './component/Dashboard'
import Form from './component/Form';
import Data from './component/Data';
import { Route , Switch } from 'react-router-dom';


function App() {
  return (
<>
<Switch>
<Route path='/data'>
  <Data />
</Route>
<Route exact path='/'>
  <Dashboard />
</Route>
<Route path='/form'>
  <Form />
</Route>

</Switch>
    
</>


  );
}

export default App;
