import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'
import MarketPlace from './pages/MarketPlace/MarketPlace'
import Register from './pages/Register/Register'

function App() {
    const isLogin = useSelector((state) => state.user.isLogin)
    return (
        <Router>
            <Routes>
                <Route
                    path='/register'
                    element={isLogin ? <Navigate to='/' /> : <Register />}
                />
                <Route path='/' element={<Layout />}>
                    <Route
                        path='/'
                        element={
                            isLogin ? <Home /> : <Navigate to='/register' />
                        }
                    />
                    <Route
                        path='home'
                        element={
                            isLogin ? <Home /> : <Navigate to='/register' />
                        }
                    />
                    <Route
                        path='marketPlace'
                        element={
                            isLogin ? (
                                <MarketPlace />
                            ) : (
                                <Navigate to='/register' />
                            )
                        }
                    />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App
