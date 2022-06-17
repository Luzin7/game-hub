import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/home/Home'
import Ajuda from './pages/Ajuda';
import Cadastro from './pages/Cadastro';
import NotFound from './pages/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/ajuda' element={<Ajuda/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    )
  }
}
