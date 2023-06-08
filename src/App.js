import './App.css';
import ProductCrud from './components/ProductCrud';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Login from './pages/Login';
import Welcome from './pages/Welcome';


function App() {
  let component
  switch (window.location.pathname) {
   case "/":
     component = <Welcome />
     break;
   case "/about" :
     component = <About />
     break;
   case "/productCrud":
     component = <ProductCrud />
     break; 
     case "/contact" :
     component = <Contact/>
     break;
     
   case "/login" :
     component = <Login/>
     break;
  default:
     break;
  }
 return (
   <div>
     
     <Header/>
     <div className='container'>
        {component}
     </div>
   </div>
 );
}

export default App;
