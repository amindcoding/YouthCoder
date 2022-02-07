import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <JumbotronComponent />
      <Routes>
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
