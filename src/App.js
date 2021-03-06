import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Home} />
          <Route path="/trending" component={Trending} />

  </Switch>
)

export default App
