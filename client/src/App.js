import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/nav/Header'

const App = () =>  (
  <>
    <Header/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>  
    </Switch>
  </>  
  );


export default App;
