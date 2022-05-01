import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import Header from './components/Header/Header'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import MarketPlace from './pages/MarketPlace/MarketPlace'
import Register from './pages/Register/Register'
import { postActions } from './components/Store/post-slice'
import { headerActions } from './components/Store/header-slice'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'
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
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject)
    }
    return (
        <div onClick={handleModal}>
            {chosenEmoji ? (
                <input type='text' value={chosenEmoji.emoji} />
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker
                onEmojiClick={onEmojiClick}
                groupNames={{
                    smileys_people: 'hehe',
                    animals_nature: 'cute dogs and also trees',
                    food_drink: 'milkshakes and more',
                    travel_places: 'I love trains',
                    activities: 'lets play a game',
                    objects: 'stuff',
                    symbols: 'more stuff',
                    flags: 'fun with flags',
                    recently_used: 'did I really use those?!',
                }}
                // skinTone={SKIN_TONE_MEDIUM_DARK}
            />

            {/* <Router>
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
            </Router> */}
        </div>
    )
}

export default App
