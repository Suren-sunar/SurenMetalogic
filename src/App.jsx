import React from 'react'
import { AvailableVacancies, Benifits, Cares, Footer, Navbar, Navigate, SubscriptionForm, WeBelieveIn } from './Pages'
import "./App.css"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Navigate/>
      <WeBelieveIn/>
      <Benifits/>
      <Cares/>
      <AvailableVacancies/>
      <SubscriptionForm/>
      <Footer/>
    </div>
  )
}

export default App
