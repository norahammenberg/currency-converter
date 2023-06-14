import './App.css';
import {Route, Routes} from 'react-router-dom';// for routing
//All pages
import Home from './pages/home';
import CurrencyConvert from  './pages/currencyconverter';
import About from './pages/about';
import NotFound from  './pages/notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/currencyconverter" element={<CurrencyConvert />} />
        <Route path="/page/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
