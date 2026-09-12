import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import User from './component/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path : "",
//         element : <Home />
//       }, {
//         path : "about",
//         element : <About />
//       }
//     ]
//   },
// ]);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="user/:id" element={<User />} />
  </Route>
));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      
  </StrictMode>,
)
