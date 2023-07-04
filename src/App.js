import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Login from "./pages/Login"
import FAQ from "./pages/Faq"


function App() { 
  return ( 
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/products" element={<Products />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App; 