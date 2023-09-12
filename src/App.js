import './App.css';
import Navbars from './components/Navbar';
import Card from './components/Card';
import Content from './components/Content';
import Moda from './components/Moda';
import AvSearch from'./components/AvSearch';
import Footer from'./components/Footer';
// import Avancede from'./components/Avancede';




function App() {
  return (
    <div className="App bg-slate-100">
      <Navbars />
      <AvSearch /> 
      {/* <Avancede/>  */}
      <Card />
      <Content />
      <Moda />
      <Footer/>
    
    </div>
  );
  
}

export default App;