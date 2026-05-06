import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { UserPlus, Mail, Lock, User as UserIcon, MapPin, GraduationCap, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { recordAuditLog } from '../lib/loggingUtils';
import { User, RegisteredCourse } from '../types';

interface RegisterProps {
  onLogin: (user: User) => void;
}

export default function Register({ onLogin }: RegisterProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      // 1. Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const firebaseUser = userCredential.user;

      // 2. Prepare user data for Firestore
      const newUser: User = {
        id: firebaseUser.uid,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        role: formData.email === 'pamelapayanocaceres@gmail.com' ? 'admin' : 'student',
        courses: []
      };

      // 3. Save to Firestore
      try {
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          ...newUser,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, `users/${firebaseUser.uid}`);
      }

      await recordAuditLog('REGISTER', `New user registered: ${formData.email}`);

      onLogin(newUser);
      navigate('/seleccionar-cursos');
    } catch (err: any) {
      await recordAuditLog('REGISTER_FAILURE', `Registration failed for ${formData.email}: ${err.message}`, 'failure');
      if (err.code === 'auth/email-already-in-use') {
        setError('El correo ya está registrado.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError('Este dominio no está autorizado en Firebase. Añade skillfor1.vercel.app a los dominios autorizados en la Consola de Firebase.');
      } else if (err.message?.includes('400')) {
        setError('Error de configuración (400). Verifica dominios autorizados y métodos de autenticación en Firebase.');
      } else {
        setError(err.message || 'Error al registrarse');
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-petroleo rounded-[40px] shadow-2xl overflow-hidden border border-white/10 relative z-10"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Brand/Info */}
          <div className="md:w-1/3 bg-white/5 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10">
            <GraduationCap className="w-16 h-16 text-brand-accent mb-4" />
            <h1 className="text-2xl font-display font-bold text-white">SkillFor</h1>
            <p className="text-[10px] font-bold text-hueso/50 tracking-[0.2em] mt-2 uppercase text-center">Únete a la excelencia técnica</p>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white mb-2">Crear Cuenta</h2>
            <p className="text-hueso/60 text-sm mb-8">Completa tus datos para comenzar tu formación.</p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border-l-4 border-red-500 text-red-200 text-xs font-bold flex items-center gap-3 rounded-r-xl">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-hueso/50 uppercase tracking-widest ml-1">Nombre</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-brand-accent transition-all"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hueso/30" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-hueso/50 uppercase tracking-widest ml-1">Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-brand-accent transition-all"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hueso/30" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-hueso/50 uppercase tracking-widest ml-1">Dirección</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-brand-accent transition-all"
                    placeholder="Tu dirección completa"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hueso/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-hueso/50 uppercase tracking-widest ml-1">Contraseña</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-brand-accent transition-all"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hueso/30" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-hueso/50 uppercase tracking-widest ml-1">Confirmar</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-brand-accent transition-all"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-hueso/30 hover:text-brand-accent"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-white hover:text-petroleo hover:scale-[1.02] transition-all disabled:opacity-50 mt-4"
              >
                {isLoading ? "Creando..." : "Crear Cuenta"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs font-bold text-hueso/50">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="text-brand-accent hover:underline">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

