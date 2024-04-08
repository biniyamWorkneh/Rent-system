import './App.css';
import Sidebar from './Sidebar';
import RouterPage from "./Router"
// // import RouterPage from './Router';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import House from "./components/House";
// import Login from "./components/Login";
// import Signup from './components/Signup';
// import Footer from './components/Footer';
const  App = ()=> {
  return (
      <>
        <RouterPage/> 
         <Sidebar />
      {/* <Navbar/>
        <House/>
        <Service/>
        <Login/>
        <Signup/>
        <Footer/> */}

      </>
  );
}

export default App;