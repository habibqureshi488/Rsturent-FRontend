import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
// import Movies from './Pages/Movies'
import MyList from './Pages/MyList'
import Contact from './Pages/Contact'
import ComingSoon from './Pages/NewReleases'
import ProductTable from './Components/Shopping'
import { ItemProvider } from './Context/ItemContext'
// import API from './Components/API'
import Data from './Components/API'
import ThankYou from './Components/Thank'

function App() {
  return (

  
    <>
     <ItemProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/food" element={<Data />} />
      <Route path="/shopping" element={<ProductTable />} />
      <Route path="/thankyou" element={<ThankYou />} />
     
      <Route path="/newreleases" element={<ComingSoon />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/mylist" element={<MyList />} />
   
    </Routes>
    </BrowserRouter>
    </ItemProvider>
    </>
  )
}

export default App