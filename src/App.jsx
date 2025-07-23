import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch'
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import Head from './components/Head'
import Body from './components/Body'
import {Provider} from "react-redux"
import store from '../utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainContainer from './components/MainContainer'


  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"/watch",
        element:<Watch/>
      },
      {
        path:"/demo1",
        element:<Demo1/>
      },
       {
        path:"/demo2",
        element:<Demo2/>
      }
    ]
  }])
function App() {
  return (
    <Provider store={store}>
      
     <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
}

{/*
  head
  body
    sidebar
     menuitems
    maincontainer
     buttonlist
     videocontainer
      videocard

   */}
export default App
 