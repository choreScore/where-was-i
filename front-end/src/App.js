import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import User from './components/User';
import Show from './components/Show';



function App() {
const [login, setLogin] = useState(false);
const navigate = useNavigate();




if (login === false){
  navigate('/login')
}


  return (
    <div className = 'app'>
      <Routes>
        <Route path='/login' element={<Login login={login}/>}>
        <Route path='user' element={<User />}>
          <Route path='show' element={<Show />}/>
          </Route>
          </Route>
          </Routes>
    </div>
  )
}

export default App;
