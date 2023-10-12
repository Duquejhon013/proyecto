import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Entro from './components/Entro';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Avancede from'./components/Avancede';


function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ENTRO' element={<Entro/>}/>
      </Routes>
    </Router>
    </div>
  );
  
  
}

export default App;