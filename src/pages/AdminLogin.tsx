import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { recordAuditLog } from '../lib/loggingUtils';
import { ShieldCheck, Mail, Lock, ArrowRight, Server, Globe } from 'lucide-react';
import { User } from '../types';

interface AdminLoginProps {
  onLogin: (user: User) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const data = userDoc.data() as User;
        if (data.role !== 'admin') {
          await auth.signOut();
          setError('Acceso denegado: Esta cuenta no tiene privilegios de administrador.');
          setIsLoading(false);
          return;
        }

        await updateDoc(doc(db, 'users', firebaseUser.uid), {
          lastLogin: serverTimestamp()
        });

        await recordAuditLog('ADMIN_LOGIN', `Admin ${email} logged in successfully`);

        onLogin(data);
        navigate('/admin');
      } else {
        await auth.signOut();
        setError('No se encontró el perfil administrativo.');
        await recordAuditLog('ADMIN_LOGIN_FAILURE', `Admin ${email} profile not found`, 'failure');
      }
    } catch (err: any) {
      await recordAuditLog('ADMIN_LOGIN_FAILURE', `Admin login failed for ${email}: ${err.message}`, 'failure');
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Credenciales administrativas incorrectas.');
      } else {
        setError(err.message || 'Error de conexión con el servidor central.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-petroleo/40 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 relative z-10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-brand-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-brand-accent/30 shadow-[0_0_20px_rgba(255,204,41,0.2)]">
            <ShieldCheck className="w-10 h-10 text-brand-accent" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Acceso Central</h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-none">Administración SkillFor</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-8 text-xs font-bold text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">ID Administrador / Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:ring-2 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-700"
                placeholder="usuario@skillfor.edu.do"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Contraseña de Seguridad</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:ring-2 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-700"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-accent text-petroleo py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 group"
          >
            {isLoading ? 'VERIFICANDO...' : (
              <>
                AUTENTICAR SISTEMA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Server className="w-4 h-4 text-gray-600" />
            <span className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Server Status: Online</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Ubicación: RD</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
