import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import BdAddress from './components/Contact/BdAddress';
import UsAddress from './components/Contact/UsAddress';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path={'/coins/:coinId'} element={<CoinDetails/>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
