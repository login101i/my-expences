import React from 'react'

import { Balance } from './components/Balance'
import { IncomeExpences } from './components/IncomeExpences'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css'

function App() {
  return (
    <div>
      <GlobalProvider>
        {/* <Header /> */}
        <div className="container">
          <Balance />
          <IncomeExpences />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  )
}

export default App
