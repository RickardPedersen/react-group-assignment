import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import CustomerDetailPage from './pages/CustomerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { CustomerContext } from './contexts/CustomerContext'

function App() {
  const [customerDataList, setCustomerDataList] = useState({})
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <CustomerContext.Provider value={{customerDataList, setCustomerDataList}}>
          <Route exact path="/customer/:id" component={CustomerDetailPage}></Route>
          <Route exact path="/home">
            <HomePage/>
          </Route>
        </CustomerContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
