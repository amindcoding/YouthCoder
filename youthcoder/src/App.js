import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ArtikelPage from './pages/ArtikelPage';
import ForumPage from './pages/ForumPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />
        <Route exact path="/articles" element={<ArtikelPage />} />
        <Route exact path="/forum" element={<ForumPage />} />
        <Route exact path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
