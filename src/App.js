
//import { Counter } from './features/counter/Counter';
import Home from './pages/Home'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Cartpage from './pages/Cartpage'
import Checkout from './pages/Checkout'
import ProductDetailpage from './pages/ProductDetailpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<Loginpage></Loginpage>), 
  },
  {
    path: "/signup",
    element: (<Signuppage></Signuppage>),
  },
  {
    path: "/cart",
    element: (<Cartpage></Cartpage>),
  },
  {
    path: "/checkout",
    element: (<Checkout></Checkout>),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailpage></ProductDetailpage>),
  },
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    {/* <Loginpage></Loginpage> */}
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
