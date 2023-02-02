import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Provider } from 'react-redux';
import store from './app/store'

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<Home />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
