import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
