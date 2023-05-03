import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Success from "./pages/Success";

const App = () => {
  const user=true;
  const ProtectedRoute =   ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const LoginRoute = ({children})=>{
    if(user){
      return <Navigate to="/"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="/success" element={<ProtectedRoute><Success/></ProtectedRoute>}/>
      <Route path="/register" element={<LoginRoute><Register/></LoginRoute>}/>
      <Route path="/login" element={<LoginRoute><Login/></LoginRoute>}/>
    </Routes>
    </BrowserRouter>   
  );
};

export default App;