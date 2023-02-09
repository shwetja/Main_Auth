import NavBar from "./Components/Layout/NavBar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Add from "./Components/Pages/User/Add";
import Show from "./Components/Pages/User/Show";
import Update from "./Components/Pages/User/Update";
import Delete from "./Components/Pages/User/Delete";
import Register from "./Components/Pages/User/Register";
import Login from "./Components/Pages/User/Login";
import Success from "./Components/Pages/User/Success";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
            <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/user/add" element={<Add />}/>
              <Route path="/user/show" element={<Show />}/>
              <Route path="/user/update/:userId" element={<Update />}/>
              <Route path="/user/delete/:userId" element={<Delete />}/>
              <Route path="/user/register" element={<Register/>} />
              <Route path="/user/login" element={<Login/>} />
              <Route path="/user/success" element={<Success/>} />
            </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;


