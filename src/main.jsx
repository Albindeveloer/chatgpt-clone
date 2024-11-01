import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/homepage/Homepage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout/>, // common component header includes
    children:[
      {
        path: "/",
        element:<HomePage/>  //homepge just hve heder as common component
      },
      {
        path: "/sign-in/*",
        element:<SignInPage/>
      },
      {
        path: "/sign-up/*",
        element:<SignUpPage/>
      },

      //common component menu br includes in DashboardLayout. and homepge don't hve menu bar
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
