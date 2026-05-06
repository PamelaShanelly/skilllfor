import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User } from './types';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseSelection from './pages/CourseSelection';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import AdminAuditoria from './pages/AdminAuditoria';
import AdminLogin from './pages/AdminLogin';

import { auth, db } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { recordAuditLog } from './lib/loggingUtils';

export default function App() {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => localStorage.getItem('theme') === 'dark');

  // Firebase Auth sync
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
      setIsLoadingUser(false);
    });
    return () => unsubscribe();
  }, []);

  // Theme toggle
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = React.useCallback(async () => {
    try {
      const email = auth.currentUser?.email;
      await auth.signOut();
      if (email) {
        await recordAuditLog('LOGOUT', `User ${email} logged out`);
      }
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, []);

  // Inactivity Timeout
  React.useEffect(() => {
    if (!user) return;
    
    let timeout: any;
    const INACTIVITY_TIME = 15 * 60 * 1000;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
        window.location.reload();
      }, INACTIVITY_TIME);
    };

    const activities = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'];
    activities.forEach(event => window.addEventListener(event, resetTimeout));
    
    resetTimeout();

    return () => {
      activities.forEach(event => window.removeEventListener(event, resetTimeout));
      clearTimeout(timeout);
    };
  }, [user, handleLogout]);

  if (isLoadingUser) {
    return (
      <div className="min-h-screen bg-petroleo flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className={cn(
        "min-h-screen transition-colors duration-300 flex flex-col",
        isDarkMode ? "bg-gray-950 text-gray-100 dark" : "bg-hueso text-gray-900"
      )}>
        <Navbar user={user} onLogout={handleLogout} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cursos" element={<Courses user={user} setUser={setUser} />} />
            <Route path="/curso/:id" element={<CourseDetail user={user} setUser={setUser} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/contacto" element={<Contact />} />
            
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/registro" element={user ? <Navigate to="/seleccionar-cursos" /> : <Register onLogin={handleLogin} />} />

            {/* Protected Student Routes */}
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/seleccionar-cursos" element={<CourseSelection user={user} setUser={setUser} />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={user?.role === 'admin' ? <Navigate to="/admin" /> : <AdminLogin onLogin={handleLogin} />} />
            <Route path="/admin" element={user?.role === 'admin' ? <Admin user={user} /> : <Navigate to="/admin/login" />} />
            <Route path="/admin/auditoria" element={user?.role === 'admin' ? <AdminAuditoria user={user} /> : <Navigate to="/admin/login" />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
