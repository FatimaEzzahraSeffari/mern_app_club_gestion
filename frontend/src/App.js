import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Productlist from './components/productlist'
import Signup from './components/signup'
import Login from './components/login'
import Singupad from './components/singupad'
import Loginad from './components/loginad'
import Message from './components/Message';
import Join from './components/join';
import Contact from './components/contact'
import About from './components/about'
import Msgmembertable from './components/msgmembertable';
import Memberstable from './components/memberstable';
import Jointable from './components/jointable';
import Clubmsgtable from './components/clubmsgtable';
import Adminstable from './components/adminstable';
import Addclubtable from './components/addclubtable'
import Add from './components/add'
import Edit from './components/edit'
import Editadd from './components/editadd'
import Editadmin from './components/editadmin'
import Editclubmsg from './components/editclubmsg'
import Editcontact from './components/editcontact'
import Editjoin from './components/editjoin'
import Affichage from './components/affichage'
import Index from './components/index'
import { Description } from './components/Description';
import { AmazonLoginButton } from 'react-social-login-buttons';


function App () {
  return (
  
  <>
<Router>
<Header/>
<Routes>
<Route exact path="/club" element={<Productlist /> }></Route>
<Route path='/product' element={<Description/>}></Route>
<Route path='/register' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signupad' element={<Singupad/>}></Route>
<Route path='/loginad' element={<Loginad/>}></Route>
<Route path='/message' element={<Message/>}></Route>
<Route path='/join' element={<Join/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/msgmembertable' element={<Msgmembertable/>}></Route>
<Route path='/memberstable' element={<Memberstable/>}></Route>
<Route path='/jointable' element={<Jointable/>}></Route>
<Route path='/clubmsgtable' element={<Clubmsgtable/>}></Route>
<Route path='/adminstable' element={<Adminstable/>}></Route>
<Route path='/addclubtable' element={<Addclubtable/>}></Route>
<Route path='/add' element={<Add/>}></Route>
<Route path='edituser/:id' element={<Edit/>}></Route>
<Route path='/editadd/:id' element={<Editadd/>}></Route>
<Route path='/editadmin/:id' element={<Editadmin/>}></Route>
<Route path='/editclubmsg/:id' element={<Editclubmsg/>}></Route>
<Route path='/editcontact/:id' element={<Editcontact/>}></Route>
<Route path='/editjoin/:id' element={<Editjoin/>}></Route>
<Route path='/affichage' element={<Affichage/>}></Route>
<Route path='/' element={<Index/>}></Route>
</Routes>
<Footer/>
</Router>
</>
  );
}
  
  export default App;
