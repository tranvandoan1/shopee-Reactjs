import React from 'react'
import { $ } from '../../../Unti';
import { Footer } from '../Header/Footer';
import { HeaderNavbar } from '../Header/HeaderNavbar';

const HomePage = () => {
    const HomePage = $("#linkCss")
    var head = $("head");
    HomePage.href = './src/Client/Page/Css/HomePage.css';
    head.appendChild(HomePage);
  return (
    <div>
      <HeaderNavbar/>
      <Footer/>
    </div>  
  )
}

export default HomePage