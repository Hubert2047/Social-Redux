import React from 'react'
import Error from '../../pages/error/Error';
import { 
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Home from '../../pages/home/Home';
import MarketPlace from '../../pages/marketPlace/MarketPlace';

export default function AnimatedRountes() {
  const location = useLocation()
  return (
        <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/marketPlace" element={<MarketPlace/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
        </AnimatePresence>
  )
}
