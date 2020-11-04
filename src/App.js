import { Route, Switch } from 'react-router-dom'
import CustomerDetailPage from './pages/CustomerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/customer/:id" component={CustomerDetailPage}></Route>
        <Route exact path="/home">
          <HomePage/>
        </Route>
        <Route exact path="/">
          <LoginPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
