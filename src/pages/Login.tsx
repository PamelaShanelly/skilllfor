import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, Mail, Lock, AlertCircle, Eye, EyeOff, User as UserIcon } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { recordAuditLog } from '../lib/loggingUtils';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const [lockUntil, setLockUntil] = React.useState<number | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if currently locked
    if (lockUntil && Date.now() < lockUntil) {
      const waitTime = Math.ceil((lockUntil - Date.now()) / 1000);
      setError(`Cuenta bloqueada temporalmente. Intenta en ${waitTime} segundos.`);
      return;
    }

    if (!email || !password) {
      setError('Error: Los dos datos están mal (Email y Contraseña requeridos)');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        
        // Update last login
        await updateDoc(doc(db, 'users', firebaseUser.uid), {
          lastLogin: serverTimestamp()
        });

        await recordAuditLog('LOGIN', `User ${email} logged in successfully`);

        setAttempts(0);
        onLogin(userData);
        navigate('/dashboard');
      } else {
        setError('No se encontró el perfil del usuario.');
        await recordAuditLog('LOGIN_FAILURE', `User ${email} profile not found`, 'failure');
      }
    } catch (err: any) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      await recordAuditLog('LOGIN_FAILURE', `Login attempt ${newAttempts} failed for ${email}: ${err.message}`, 'failure');
      
      if (newAttempts >= 5) {
        const lockoutTime = 60 * 1000;
        setLockUntil(Date.now() + lockoutTime);
        setError('Demasiados intentos fallidos. Cuenta bloqueada por 1 minuto.');
      } else {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
          setError('Información incorrecta. Los datos no coinciden.');
        } else {
          setError(err.message || 'Error de conexión');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-hueso dark:bg-black py-20 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-petroleo/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-petroleo rounded-[40px] shadow-2xl overflow-hidden border border-white/10 p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-hueso rounded-full flex items-center justify-center border-4 border-brand-accent shadow-lg">
            <UserIcon className="w-10 h-10 text-petroleo" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Bienvenido</h1>
          <p className="text-hueso/60 text-sm">Gestiona tu aprendizaje técnico profesional.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border-l-4 border-red-500 text-red-200 text-xs font-bold flex items-center gap-3 rounded-r-xl">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-hueso/70 uppercase tracking-wider ml-1">Email</label>
            <div className="relative">
                <input 
                  type="email" 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white outline-none focus:border-brand-accent focus:bg-white/10 transition-all placeholder:text-white/20"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hueso/40" />
              </div>
            </div>
  
            <div className="space-y-2">
              <label className="text-xs font-bold text-hueso/70 uppercase tracking-wider ml-1">Contraseña</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white outline-none focus:border-brand-accent focus:bg-white/10 transition-all placeholder:text-white/20"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hueso/40" />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-hueso/40 hover:text-brand-accent"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
  
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-brand-accent text-white rounded-2xl font-bold text-sm tracking-widest shadow-xl hover:bg-white hover:text-petroleo hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {isLoading ? "PROCESANDO..." : "ACCEDER"}
            </button>
          </form>
  
          <div className="mt-10 text-center">
            <p className="text-xs font-bold text-hueso/50">
              ¿No tienes cuenta?{" "}
              <Link to="/registro" className="text-brand-accent hover:underline">
                Regístrate ahora
              </Link>
            </p>
          </div>
      </motion.div>
    </div>
  );
}

