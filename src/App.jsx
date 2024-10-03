import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Posts from './Posts';

function App() {
  return (
    <BrowserRouter>
        <div>
          <ui>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> 
            <li><Link  to={"/posts?fname=Phuriphat&lname=Nokkhumthong"}>Post Greeting</Link></li>   
            <li><Link  to={"/posts/1"}>Post ID 1</Link></li>   
            <li><Link  to={"/posts/2"}>Post ID </Link></li>        
          </ui>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path='/posts/:id' element={<Posts/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
 
export default App;
 