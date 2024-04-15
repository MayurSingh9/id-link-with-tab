 import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './Navbar';



 export default function App() {
   return (
      <>
         
        <Router>
        <Navbar/>
            <Routes>
            <Route
                        exact
                        path="/tab1"
                        element={<Tab1 />}
                    />
  
                  <Route
                  path="/tab2"
                  element={<Tab2 />}
                  />   
                      <Route
                  path="/tab3"
                  element={<Tab3 />}
                  />   
                      <Route
                  path="/tab4"
                  element={<Tab4 />}
                  />    
            </Routes>

        </Router>

      </>
   )
 }
 