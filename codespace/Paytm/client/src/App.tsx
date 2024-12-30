import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dash from './pages/Dash';
import Balance from './pages/Balance';
import Send from './pages/Send';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/api/signup",
      element: <><Signup /></>
    },
    {
      path: "/api/login",
      element: <><Login /></>
    }, {
      path: "/profile",
      element: <><Dash /></>
    },
    {
      path: "/api/balance",
      element: <><Balance /></>
    }, {
      path: "/api/transfer",
      element: <><Send /></>
    }

  ])

return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;


