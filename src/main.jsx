import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/homepage/Homepage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout/>, // common component header includes
    children:[
      //homepge just hve heder as common component
      {
        path: "/",
        element:<HomePage/>  
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
            path:"/dashboard/chat/:id",
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
