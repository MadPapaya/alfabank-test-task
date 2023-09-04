import React, {createRef} from 'react'
import {Provider} from 'react-redux'
import {store} from "./store";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import {
  EditProfileBioPage,
  EditProfileEmailPage,
  EditProfileLoginPage,
  EditProfilePage, EditProfilePhonePage,
  EditProfilePhotoPage,
  HomePage,
  ProfilePage,
  Page404
} from "./pages"
import './index.css'

export const routes = [
  {path: '/', name: 'Лучшие предложения для тебя', element: <HomePage/>, nodeRef: createRef()},
  {path: '/profile', name: 'Профиль', backLink: '/', element: <ProfilePage/>, nodeRef: createRef()},
  {path: '/profile/edit', name: 'Редактировать профиль', backLink: '/profile', element: <EditProfilePage/>, nodeRef: createRef()},
  {path: '/profile/edit/photo', name: 'Редактировать фото профиля', backLink: '/profile/edit', element: <EditProfilePhotoPage/>, nodeRef: createRef()},
  {path: '/profile/edit/login', name: 'Редактировать логин', backLink: '/profile/edit', element: <EditProfileLoginPage/>, nodeRef: createRef()},
  {path: '/profile/edit/email', name: 'Редактировать E-mail', backLink: '/profile/edit', element: <EditProfileEmailPage/>, nodeRef: createRef()},
  {path: '/profile/edit/phone', name: 'Редактировать номер телефона', backLink: '/profile/edit', element: <EditProfilePhonePage/>, nodeRef: createRef()},
  {path: '/profile/edit/bio', name: 'Редактировать описание', backLink: '/profile/edit', element: <EditProfileBioPage/>, nodeRef: createRef()},
  {path: '*', name: '404', backLink: '/', element: <Page404/>, nodeRef: createRef()}
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
;
