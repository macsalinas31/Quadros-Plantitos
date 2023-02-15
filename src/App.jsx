import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route, Link} from 'react-router-dom'
import Mainlayout from './Layouts/Mainlayout';
import Error404 from './Pages/Error404';
import Journal from './Pages/Journal';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Searchpage from './Pages/Searchpage';
import Login from './Pages/authentication/Login';
import BasicLayout from './Layouts/BasicLayout';
import Register from './Pages/authentication/Register';
import ForgotPassword from './Pages/authentication/ForgotPassword';
import ResetPassword from './Pages/authentication/ResetPassword';

function App() {

  return (
    <>
    
      <Routes>
        <Route element={<Mainlayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/journal' element={<Journal/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/searchpage' element={<Searchpage/>} />
        </Route>
        <Route element={<BasicLayout/>} >
         
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/forgotPassword' element={<ForgotPassword/>} />
       <Route path='/resetPassword' element={<ResetPassword/>} />


       </Route>
        <Route path='*' element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App
