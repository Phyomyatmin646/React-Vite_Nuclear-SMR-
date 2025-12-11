import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Location from './pages/location/location.jsx';
import DataCenter from './pages/electricity/DataCenter.jsx';
import Grid from './pages/electricity/Grid.jsx';
import LocationDataCenter from './pages/agriculture/DataCenter.jsx';
import Farms from './pages/agriculture/Farms.jsx';
import Kalay from './pages/agriculture/Kalay.jsx';
import MainLongyi from './pages/agriculture/Main-longyi.jsx';
import LocationGrid from './pages/agriculture/Grid.jsx';
import Mutation from './pages/agriculture/Mutation.jsx';
import SoilErosion from './pages/agriculture/SoilErosion.jsx';
import Htantlan from './pages/agriculture/Hantlan.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/data-center" element={<DataCenter />} />
        <Route path="/agriculture/data-center" element={<LocationDataCenter />} />
        <Route path="/agriculture/farms" element={<Farms />} />
        <Route path="/agriculture/thantlang" element={<Htantlan />} />
        <Route path="/agriculture/kalay" element={<Kalay />} />
        <Route path="/agriculture/tedim" element={<MainLongyi />} />
        <Route path="/agriculture/grid" element={<LocationGrid />} />
        <Route path="/radiation/mutation" element={<Mutation />} />
        <Route path="/radiation/soil-erosion" element={<SoilErosion />} />
      </Routes>
    </div>
  );
}

export default App;
