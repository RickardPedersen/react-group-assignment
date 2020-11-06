import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'

import CustomerDetailPage from './pages/CustomerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import GuardedRoute from './components/GuardedRoute'

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

  function handleLogout() {
    UserKit.removeToken()
    setTokenIsValid(false)
  }

  return (
    <div>
      <Navbar brand="KAFRB">
        {tokenIsValid && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/login" onClick={handleLogout}>Log out</Link>
          </>
        )}
      </Navbar>
      <Switch>
        <UserContext.Provider value={{currentToken, setCurrentToken}}>
          <Route exact path="/">
            {tokenIsValid ?
              <Redirect to='/home' /> :
              <Redirect to='/login' />
            }
          </Route> 
          <Route path="/login">
            <LoginPage/>
          </Route>
          <CustomerContext.Provider value={{customerDataList, setCustomerDataList}}>
            <GuardedRoute
              path="/customer/:id"
              component={CustomerDetailPage}
              auth={tokenIsValid}
            />
            <GuardedRoute
              path="/home"
              auth={tokenIsValid}
              component={HomePage}
            />
          </CustomerContext.Provider>    
          
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
