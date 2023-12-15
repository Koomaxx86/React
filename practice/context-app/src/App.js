import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" element={ <Home />}></Route>
    <Route path="/login" element={ <Login />}></Route>
    <Route path="/join" element={ <Join />}></Route>
    <Route path="/user" element={ <User />}></Route>
    <Route path="/about" element={ <About />}></Route>
    </BrowserRouter>
  );
}

export default App;
