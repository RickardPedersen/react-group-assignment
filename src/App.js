import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import CustomerDetailPage from './pages/CustomerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
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
      <Switch>
        <UserContext.Provider value={{currentToken, setCurrentToken}}>
          <Route path="/login">
            <LoginPage/>
          </Route>
          {tokenIsValid ? 
            <CustomerContext.Provider value={{customerDataList, setCustomerDataList}}>
              <Route path="/customer/:id" component={CustomerDetailPage}></Route>
              <Route path="/home">
                <HomePage/>
              </Route>
            </CustomerContext.Provider>
            : 
            <Route path="/*">
              {history.push('/login')}
            </Route>
          }          
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;

// <Route path="/*">
//   {history.push('/login')}
// </Route>
