import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

// The following line can be included in your src/index.js or App.js file 
import 'bootstrap/dist/css/bootstrap.min.css';

//layout
import MainLayout from './Layout/MainLayout';

//pages
import { About, Cart, Contact, Home, Product } from './Pages';

//loaders
import { loader as HomeLoader } from './Pages/Home';
import { loader as ProductLoader } from './Pages/Product';


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader
        },
        {
          path: "/Cart",
          element: <Cart />
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader:ProductLoader
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
