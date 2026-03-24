import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { BoardPage } from './pages/BoardPage';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { useAuth } from './features/auth/useAuth'; // tu hook actual

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="oz-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/boards"
            element={
              <ProtectedRoute>
                <BoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/boards/:boardId"
            element={
              <ProtectedRoute>
                <BoardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;