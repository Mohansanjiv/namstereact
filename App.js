import { React } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Body from './src/components/Body'
import Header from './src/components/Header'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Login from './src/components/Login'
import Header from './src/components/Header'
import ResturantMenu from './src/components/ResturantMenu'


const AppLayout = () => {
  return (
    <>
      <div style={{ marginTop: '150px' }}>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/resturant/:resId',
        element: <ResturantMenu/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
