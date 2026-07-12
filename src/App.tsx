import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream text-charcoal font-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
