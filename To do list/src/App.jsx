import './App.scss'

import { Home } from "./pages/Home/Home";
// import { Products } from "./pages/Products/Products";
// import { About } from "./pages/Abouut/About";
// import { Contact } from "./pages/Contact/Contact";
// import { Jobs } from "./pages/Jobs/Jobs";
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
                <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/jobs" element={<Jobs />} /> */}
          </Routes>
    </>
  )
}

export default App;
