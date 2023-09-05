import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/lounge'
import Travelers from './Components/Travelers/Travelers'
import Subscribers from './Components/Subscribers/Subscribers'
import Footer from './Components/Footer/Footer'
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>




const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/> 
      
      
      

    </div>
  )
}

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
export default App

