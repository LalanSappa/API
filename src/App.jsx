// import calculator from './pages/calculator';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './components/Login/login.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import User from './components/UserData/user.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}
function App() {
    const router = createBrowserRouter([
    {
      path: "/", element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/User', element: <User></User> },
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;