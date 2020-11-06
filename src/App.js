import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory, Link } from 'react-router-dom'

import CustomerDetailPage from './pages/CustomerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'

import { CustomerContext } from './contexts/CustomerContext'
import { UserContext } from './contexts/UserContext'
import UserKit from './data/UserKit'

function App() {
  const [customerDataList, setCustomerDataList] = useState({})
  const [tokenIsValid, setTokenIsValid] = useState(false)
  const [currentToken, setCurrentToken] = useState(UserKit.getToken())
  const history = useHistory()

  useEffect(() => {
    UserKit.verifyToken()
    .then(res => res.json())
    .then(data => {
      if(data.token === UserKit.getToken()) {
        setTokenIsValid(true)
        setCurrentToken(data.token)
        history.push('/home')
      }
    })
  }, [currentToken])

  return (
    <div>
      <Navbar brand="KEFRB">
        <Link to="/home">Home</Link>
        <Link to="/" onClick={() => UserKit.removeToken()}>Log out</Link>
      </Navbar>
      <Switch>
        <UserContext.Provider value={{currentToken, setCurrentToken}}>
          <Route exact path="/">
            <LoginPage/>
          </Route>
          {tokenIsValid ? 
            <CustomerContext.Provider value={{customerDataList, setCustomerDataList}}>
              <Route exact path="/customer/:id" component={CustomerDetailPage}></Route>
              <Route exact path="/home">
                <HomePage/>
              </Route>
            </CustomerContext.Provider>
            : 
            <Route path="/*">
              {history.push('/')}
            </Route>
          }          
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
