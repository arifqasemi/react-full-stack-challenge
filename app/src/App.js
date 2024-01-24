import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';



const router = createBrowserRouter([
  // {path:'/',element: <Nav/>,children:[
    { path: '/', element: <Dashboard /> },
      { path: 'login', element: <Login /> },
      // { path: 'update/:id', element: <Update /> }
  // ]}
])
function App() {
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>

    </>
  );
}

export default App;
