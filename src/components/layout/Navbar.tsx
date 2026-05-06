import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, Users2, MessageSquare, LogIn, LogOut, User as UserIcon, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { User } from '../../types';
import { cn } from '../../lib/utils';
import { SITE_CONFIG } from '../../constants/config';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ user, onLogout, isDarkMode, setIsDarkMode }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const platformName = SITE_CONFIG.name;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = [
    { name: 'INICIO', href: '/', icon: Home },
    { name: 'CURSOS', href: '/cursos', icon: BookOpen },
    { name: 'SOBRE', href: '/sobre', icon: Users2 },
    { name: 'CONTACTO', href: '/contacto', icon: MessageSquare },
  ];

  // If in Course View, hide this general navbar as it has its own
  const isCourseView = location.pathname.startsWith('/curso/') && user?.courses?.some(c => location.pathname.includes(c.courseId));
  if (isCourseView) return null;

  return (
    <header className="bg-petroleo dark:bg-black text-white shadow-2xl sticky top-0 z-50 transition-colors duration-300">
      {/* Upper Section with Logo */}
      <div className="max-w-7xl mx-auto px-4 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="bg-brand-accent p-1.5 rounded-lg border-2 border-white/20 group-hover:scale-110 transition-transform">
               <span className="text-white font-black text-xl leading-none">SK</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white leading-none whitespace-nowrap">{SITE_CONFIG.name}</h1>
              <p className="text-[7px] md:text-[8px] font-bold text-white/40 tracking-[0.2em] mt-1 uppercase whitespace-nowrap">{SITE_CONFIG.tagline}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] font-bold tracking-[0.2em] transition-all hover:text-brand-accent",
                  location.pathname === link.href 
                    ? "text-brand-accent" 
                    : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-white/60 hover:text-white transition-all rounded-lg hover:bg-white/5 mr-2"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4 bg-white/5 p-1 px-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <Link to="/dashboard" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white overflow-hidden shadow-inner">
                       {user.profilePic ? (
                         <img src={user.profilePic} alt={user.name} className="w-full h-full object-cover" />
                       ) : (
                         <UserIcon className="w-4 h-4" />
                       )}
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-[10px] font-bold text-white leading-tight uppercase tracking-wider">{user.name}</p>
                      <p className="text-[8px] text-hueso/40 uppercase font-bold tracking-wider">Estudiante</p>
                    </div>
                  </Link>
                  <div className="w-px h-6 bg-white/10 mx-2"></div>
                  <button 
                    onClick={onLogout}
                    className="p-2 text-hueso/40 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="text-[10px] font-bold text-white/60 hover:text-white px-4 py-2 tracking-widest">
                    ENTRAR
                  </Link>
                  <Link to="/registro" className="bg-brand-accent text-white px-5 py-2 rounded-lg text-[10px] font-bold hover:shadow-lg transition-all tracking-widest shadow-xl shadow-brand-accent/20">
                    REGISTRARSE
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/60 hover:text-white"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={cn("w-full h-0.5 bg-current transition-all", isMenuOpen && "rotate-45 translate-y-2")}></span>
                <span className={cn("w-full h-0.5 bg-current transition-all", isMenuOpen && "opacity-0")}></span>
                <span className={cn("w-full h-0.5 bg-current transition-all", isMenuOpen && "-rotate-45 -translate-y-2.5")}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-petroleo dark:bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 p-3 rounded-xl transition-all",
                  location.pathname === link.href 
                    ? "bg-brand-accent/10 text-brand-accent" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest uppercase">{link.name}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5">
              {user ? (
                <div className="space-y-4">
                  <Link 
                    to="/dashboard" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white">
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">{user.name}</p>
                      <p className="text-[10px] text-white/40 uppercase">Mi Perfil</p>
                    </div>
                  </Link>
                  <button 
                    onClick={() => { onLogout(); setIsMenuOpen(false); }}
                    className="w-full flex items-center gap-4 p-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">Cerrar Sesión</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/login" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center p-4 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest"
                  >
                    Entrar
                  </Link>
                  <Link 
                    to="/registro" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center p-4 rounded-xl bg-brand-accent text-white text-xs font-bold uppercase font-bold tracking-widest"
                  >
                    Registro
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </header>
  );
}

