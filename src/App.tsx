
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import TokenPage from './pages/tokenPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </Router>
  );
}

export default App;