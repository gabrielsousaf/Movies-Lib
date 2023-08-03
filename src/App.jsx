import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
      <div className='App'>
        <Navbar />
        <Outlet />
      </div>
  );
}

export default App
