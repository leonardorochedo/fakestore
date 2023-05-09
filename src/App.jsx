// LIB'S
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Slide } from "react-awesome-reveal";

// Pages
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { CategoryProducts } from "./pages/CategoryProducts/CategoryProducts";

function App() {
  return (
    <BrowserRouter>
      <Slide>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/category/:category" element={<CategoryProducts />} />
        </Routes>
      </Slide>
    </BrowserRouter>
  )
}

export default App
