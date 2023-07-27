import Layout from "./Layout/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pges/Home';
import About from './pges/About';
import Contact from './pges/Contact';
import Menu from './pges/Menu';
import PageNotFound from './pges/PageNotFound';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="/about" element={ <About /> }/>
      <Route path="/menu" element={ <Menu /> }/>
      <Route path="*" element={ <PageNotFound /> }/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
