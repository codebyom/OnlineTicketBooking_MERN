import Admin from './adminpages/Admin';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './PUBLIC/components/headers/Header'
import MainPublicPgae from './PUBLIC/mainpage/MainPublicPgae'
import PageNotFound from './PUBLIC/components/pagenotFound/PageNotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPublicPgae/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*'element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
