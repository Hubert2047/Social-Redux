import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'
import MarketPlace from './pages/MarketPlace/MarketPlace'
import Register from './pages/Register/Register'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    <Route path='marketPlace' element={<MarketPlace />} />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App
