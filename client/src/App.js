import React from 'react'
import style from './App.module.css'
import Home from './Component/Home';
import Nav from './Component/Nav';
import About from './Component/About';
import Footer from './Component/Footer';
const App = () => {
  return (
    <>
      <Nav />
      <section id='home' className={style}><Home /></section>
      <section id='about'><About /></section>
      <Footer />
    </>
  )
}
export default App;
