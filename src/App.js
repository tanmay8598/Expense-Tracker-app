import React from 'react'
import AddTranscation from './components/AddTranscation'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TranscationList from './components/TranscationList'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TranscationList />
        <AddTranscation />
      </div>
    </>
  )
}

export default App
