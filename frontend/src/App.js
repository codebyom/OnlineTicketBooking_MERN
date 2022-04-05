import Admin from './adminpages/Admin';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './PUBLIC/components/headers/Header'
import MainPublicPgae from './PUBLIC/mainpage/MainPublicPgae'
import PageNotFound from './PUBLIC/components/pagenotFound/PageNotFound'
import Signup from './PUBLIC/components/signup/Signup';
import LoginForm from './PUBLIC/components/loginform/LoginForm'
import BusList from './PUBLIC/components/buslist/BusList'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPublicPgae/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*'element={<PageNotFound/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/result' element={<BusList/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
