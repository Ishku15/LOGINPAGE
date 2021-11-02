import reactjs from 'react'
import "./App.css"
import AccountBox from "./accountBox/index"
import Blob from './blob';
import Navbar from './navbar/Navbar'
function App() {
  return (
    <>
    <div className="navbar-container">
             <Navbar />
        </div>
    <div className="AppContainer">
        
        <AccountBox />
    </div>
    </>
  );
}

export default App;
