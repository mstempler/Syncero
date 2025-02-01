import logo from './logo.svg';
import './App.css';
import Header from './common/header';
import Footer from './common/footer';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './pages/register'; // Import your Register page
import Login from './pages/login'; 
import  Home from './pages/home'; // Import your Login page
import Essential from './pages/essential-home-services';
import Outdoor from './pages/outdoor-upkeep';
import Health from './pages/health';
import Maintenance from './pages/home-maintenance';
import Remodeling from './pages/remodeling';
import Result from './pages/result';
import Building from './pages/home-building';
import Found from './pages/404';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Found />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/essential-home-services" element={<Essential />} />
            <Route path="/outdoor-upkeep" element={<Outdoor />} />
            <Route path="/healthy-at-home" element={<Health />} />
           
            <Route path="/home-maintenance" element={<Maintenance />} />
           
            <Route path="/home-remodeling" element={<Remodeling />} />
            <Route path="/instant-result" element={<Result />} />
            <Route path="/Home-building" element={<Building />} />
            <Route path="/404-found" element={<Found />} />
            {/* Add other routes here as needed */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
