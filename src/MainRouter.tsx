import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import LoginView from './features/login/views/loginView';

const SECRET_CODE = '26032025';
const CODE_LENGTH = SECRET_CODE.length;

const MainRouter: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [code, setCode] = useState('');
  const [isWrongCode, setIsWrongCode] = useState(false);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const handleKeyPress = (digit: string) => {
    if (code.length < CODE_LENGTH) {
      setCode(code + digit);
      setIsWrongCode(false);
    }
  };

  const handleLogin = () => {
    if (code === SECRET_CODE) {
      setIsAuthenticated(true);
    } else {
      setIsWrongCode(true);
      setCode('');
      setTimeout(() => setIsWrongCode(false), 1000);
    }
  };

  const handleClear = () => {
    if (code.length > 0) {
      setCode(code.slice(0, -1));
    }
    setIsWrongCode(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCode('');
    setIsWrongCode(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginView
                code={code}
                isWrongCode={isWrongCode}
                handleKeyPress={handleKeyPress}
                handleLogin={handleLogin}
                handleClear={handleClear}
                CODE_LENGTH={CODE_LENGTH}
              />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <App onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
