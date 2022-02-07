import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/register" element={<RegisterPage />}/>
    </Routes>
    </>
  );
}

export default App;
