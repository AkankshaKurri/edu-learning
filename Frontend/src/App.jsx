import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Sidebar/Sidebar';
import Footer from './components/Homepage/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Features from "./pages/Features";
import FAQs from "./pages/FAQs";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes/Notes";
import Compiler from "./pages/Compiler";
import Certificates from "./pages/Certificates";
import Badges from "./pages/Badges";
import Favourites from "./pages/Favourites";
import Forum from "./pages/Forum";
import UploadVideo from "./pages/UploadVideo";

function App() {
  return (
    <> 
      <Router>
         {/* Sab pages mei navbar diplay hoga */}
         <Navbar/>
         <div className='d-flex'>
            {/* Sab pages mei sidebar display hoga */}
            <SideBar/> 

            <div className="content-area  mx-auto ">
            <Routes>
               {/* Navbar se jo bhi hum click karenge woh page render hoga */}
               <Route path='/' element={<Home/>}/>
               <Route path='/features' element={<Features/>}/>
               <Route path='/courses' element={<Courses/>}/>
               <Route path='/faqs' element={<FAQs/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/signup' element={<SignUp/>}/>

               {/*Sidebar se jo bhi hum click karenge woh page render hoga */}
               <Route path='/dashboard' element={<Dashboard/>}/>
               <Route path='/notes' element={<Notes/>}/>
               <Route path='/compiler' element={<Compiler/>}/>
               <Route path='/certificates' element={<Certificates/>}/>
               <Route path='/badges' element={<Badges/>}/>
               <Route path='/favourites' element={<Favourites/>}/>
               <Route path='/forum' element={<Forum/>}/>
               <Route path='/uploadvideo' element={<UploadVideo/>}/>
            </Routes>
            </div>       
         </div>
         <Footer/>
      </Router>
      
    </>
  );
}

export default App;
