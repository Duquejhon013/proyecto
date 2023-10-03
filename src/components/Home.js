
import React from 'react';
import Navbars from './components_home/Navbar';
import AvSearch from'./components_home/AvSearch';
import Card from './components_home/Card';
// import Content from './Content';
import Moda from './components_home/Moda';
import Footer from'./components_home/Footer';


export function Home() {
  return (
    <div className="Home bg-slate-100">

      <Navbars />
      <AvSearch /> 
      {/* <Avancede/>  */}
      <Card />
      {/* <Content /> */}
      <Moda />
      <Footer/>
    </div>
  );
}

export default Home;
