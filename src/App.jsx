import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

// The following line can be included in your src/index.js or App.js file 
import 'bootstrap/dist/css/bootstrap.min.css';

//layout
import MainLayout from './Layout/MainLayout';

//pages
import { Cart, Home, Product } from './Pages';

//loaders
import { loader as HomeLoader } from './Pages/Home';


function App() {
 
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children: [
        {
          index:true,
          element: <Home/>,
          loader:HomeLoader
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        },
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
