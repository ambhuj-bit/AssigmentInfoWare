import "./App.css";
import Navbar from "./Componets/Navbar";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Slider from "./Componets/Slider";
import Footer from "./Componets/Footer";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import ProductCard from "./Componets/ProductCard";
import { Provider } from "react-redux";
import store from "./Store";
import Home from "./Componets/Home";
import Product from "./Componets/Product";
import ProductDetail from "./Componets/ProductDetail";
import Products from "./Componets/Products";


function App() {
  return (
   <Provider store={store}>
     <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home/login" component={Login}/>
            <Route exact path="/Product" component={Products}/>
            <Route exact path="/Home/login/register" component={Register}/>
            <Route exact path="/Detail/:id" component={ProductDetail}/>
          </Switch>
          <Footer/>
        </div>
      </div>  
     </Router>
  </Provider>
  );
}

export default App;
