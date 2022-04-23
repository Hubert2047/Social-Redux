
import { BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
function App() {    
    return ( 
      <Router>
            <Header/>
            <Routes >
                  <Route path="/" element={<Home/>}/>
                  <Route path="/marketPlace" element={<MarketPlace/>}/>
                  <Route path="*" element={<Error/>}/>
            </Routes>             
      </Router>      
    )
}

export default App;