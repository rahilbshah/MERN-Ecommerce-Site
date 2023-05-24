import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user=useSelector(state=>state.user.currentUser);
  const ProtectedRoute =   ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="/success" element={<ProtectedRoute><Success/></ProtectedRoute>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>   
  );
};

export default App;