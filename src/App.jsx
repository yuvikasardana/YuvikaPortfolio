import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/Contact'
import Portfolio from './components/portfolio'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
         <Route path='portfolio' element={<Portfolio/>}/>
       
        </Route>
      </Routes>
    </>
  )
}

export default App
