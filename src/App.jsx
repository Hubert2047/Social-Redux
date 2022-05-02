import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import Header from './components/Header/Header'
import { headerActions } from './components/Store/header-slice'
import { postActions } from './components/Store/post-slice'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import MarketPlace from './pages/MarketPlace/MarketPlace'
import Media from './pages/Media/Media'
import Register from './pages/Register/Register'
function App() {
    const isLogin = useSelector((state) => state.user.isLogin)
    const dispatch = useDispatch()
    const showPostOptionId = useSelector((state) => state.post.showPostOptionId)
    const isOpenSetting = useSelector((state) => state.header.isOpenSetting)
    const showCommentBoxId = useSelector((state) => state.post.showCommentBoxId)
    const handleShowPoppupArray = [
        {
            action: postActions.setShowPostOptionId,
            value: showPostOptionId,
        },
        {
            action: headerActions.setOpenSetting,
            value: isOpenSetting,
        },
        {
            action: postActions.setShowCommentBoxId,
            value: showCommentBoxId,
        },
    ]

    const handleModal = () => {
        handleShowPoppupArray.forEach((item) => {
            if (item.value !== null) {
                dispatch(item.action(null))
            }
        })
    }

    return (
        <div onClick={handleModal}>
            <Router>
                {isLogin && <Header />}
                <Routes>
                    <Route
                        path='/register'
                        element={isLogin ? <Navigate to='/' /> : <Register />}
                    />
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
                        path='/media'
                        element={
                            isLogin ? (
                                <Media to='/' />
                            ) : (
                                <Navigate to='/register' />
                            )
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
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
