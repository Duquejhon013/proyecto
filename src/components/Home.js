
import React from 'react';
import Navbars from './Navbar';
import Card from './Card';
// import Content from './Content';
import Moda from './Moda';
import AvSearch from'./AvSearch';
import Footer from'./Footer';


export function Home() {
  return (
    <div className="App bg-slate-100">

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
