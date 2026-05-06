import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Mail, Shield, User as UserIcon, Calendar, 
  LayoutDashboard, ChevronRight, TrendingUp, DollarSign, 
  Award, Bell, Settings, Search, Filter, Download,
  ExternalLink, Trash2, CheckCircle, RefreshCcw, Book
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { User, ContactMessage } from '../types';
import { Link } from 'react-router-dom';

interface AdminProps {
  user: User | null;
}

type AdminTab = 'overview' | 'users' | 'messages' | 'settings';

export default function Admin({ user }: AdminProps) {
  const [activeTab, setActiveTab] = React.useState<AdminTab>('overview');
  const [usersList, setUsersList] = React.useState<User[]>([]);
  const [messages, setMessages] = React.useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch users
      const usersSnap = await getDocs(collection(db, 'users'));
      const fetchedUsers: User[] = [];
      usersSnap.forEach((doc) => {
        fetchedUsers.push(doc.data() as User);
      });
      setUsersList(fetchedUsers);

      // Fetch messages
      const messagesSnap = await getDocs(query(collection(db, 'messages'), orderBy('timestamp', 'desc')));
      const fetchedMessages: ContactMessage[] = [];
      messagesSnap.forEach((doc) => {
        const data = doc.data();
        fetchedMessages.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: data.timestamp?.toDate ? data.timestamp.toDate().toISOString() : data.timestamp
        });
      });
      setMessages(fetchedMessages);
    } catch (err) {
      console.error('Error fetching admin data', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!user || user.role !== 'admin') {
    return (
      <div className="py-32 text-center">
        <Shield className="w-20 h-20 text-brand-accent mx-auto mb-6 opacity-20" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">Acceso Restringido</h1>
        <p className="text-gray-500">Solo el personal administrativo puede acceder a este panel.</p>
      </div>
    );
  }

  const filteredUsers = usersList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Estudiantes Totales', value: usersList.length.toString(), icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Mensajes Nuevos', value: messages.length.toString(), icon: Mail, color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
    { label: 'Ingresos Proyectados', value: `$${(usersList.length * 150).toLocaleString()}`, icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Títulos por Emitir', value: Math.floor(usersList.length * 0.2).toString(), icon: Award, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] pt-6 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-petroleo dark:bg-brand-accent rounded-2xl flex items-center justify-center shadow-xl shadow-petroleo/20 rotate-3">
              <Shield className="w-7 h-7 text-white dark:text-petroleo" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-black text-petroleo dark:text-white uppercase tracking-tighter">Command Center</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sistema Operativo • SkillFor v2.0</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 p-1.5 rounded-[20px] shadow-sm">
            {(['overview', 'users', 'messages', 'settings'] as AdminTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-petroleo dark:bg-brand-accent text-white shadow-lg' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {tab === 'overview' ? 'Resumen' : tab === 'users' ? 'Usuarios' : tab === 'messages' ? 'Mensajes' : 'Config'}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="space-y-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <RefreshCcw className="w-12 h-12 text-brand-accent animate-spin" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Cargando base de datos...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-10"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="bg-white dark:bg-gray-900 p-7 rounded-[35px] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group"
                      >
                        <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] mb-1">{stat.label}</p>
                        <h3 className="text-4xl font-display font-black text-petroleo dark:text-white tracking-tighter">{stat.value}</h3>
                        <div className="mt-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-[10px] font-bold text-green-500 uppercase">+12% vs ayer</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Middle Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[40px] border border-gray-100 dark:border-white/5 p-10">
                      <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-display font-bold text-petroleo dark:text-white">Actividad Reciente</h2>
                        <Link to="/admin/auditoria" className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-2">
                          Ver Auditoría <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="space-y-6">
                         {[1, 2, 3].map((item) => (
                           <div key={item} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-white/5 rounded-3xl border border-transparent hover:border-brand-accent/20 transition-all">
                              <div className="flex items-center gap-5">
                                 <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
                                    <Bell className="w-5 h-5 font-bold" />
                                 </div>
                                 <div>
                                    <p className="font-bold text-gray-800 dark:text-white text-sm">Nuevo estudiante registrado</p>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                       <Calendar className="w-3 h-3" /> Hace 14 minutos • IP: 186.12.XXX.XX
                                    </p>
                                 </div>
                              </div>
                              <span className="text-[10px] bg-green-500 text-white px-3 py-1 rounded-full font-bold uppercase">Success</span>
                           </div>
                         ))}
                      </div>
                    </div>

                    {/* Quick Controls */}
                    <div className="bg-petroleo rounded-[40px] p-10 text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                       <h2 className="text-2xl font-display font-bold mb-10 relative z-10">Quick Tools</h2>
                       <div className="space-y-4 relative z-10">
                          {[
                            { name: 'Generar Reporte PDF', icon: Download },
                            { name: 'Enviar Notificación', icon: Bell },
                            { name: 'Configurar Cursos', icon: Book },
                            { name: 'Soporte Directo', icon: LayoutDashboard },
                          ].map((tool, i) => (
                            <button key={i} className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
                               <div className="flex items-center gap-4">
                                  <tool.icon className="w-5 h-5 text-brand-accent" />
                                  <span className="text-sm font-bold tracking-tight">{tool.name}</span>
                               </div>
                               <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'users' && (
                <motion.div 
                  key="users"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text"
                        placeholder="Buscar por nombre, correo o ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-3xl py-5 pl-16 pr-6 outline-none focus:ring-2 focus:ring-brand-accent text-gray-800 dark:text-white shadow-sm"
                      />
                    </div>
                    <button className="px-8 py-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-3xl text-gray-600 dark:text-gray-300 font-bold text-sm flex items-center gap-3 shadow-sm">
                      <Filter className="w-5 h-5" /> Filtrar
                    </button>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-gray-100 dark:border-white/5 shadow-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left bg-gray-50/50 dark:bg-black/20 border-b border-gray-50 dark:border-white/5">
                            <th className="px-10 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Estudiante e Identidad</th>
                            <th className="px-10 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Rol / Acceso</th>
                            <th className="px-10 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Cursos Activos</th>
                            <th className="px-10 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] text-right">Mantenimiento</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                          {filteredUsers.map((st) => (
                            <tr key={st.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                              <td className="px-10 py-8">
                                <div className="flex items-center gap-5">
                                  <div className="w-14 h-14 bg-hueso dark:bg-white/5 rounded-2xl flex items-center justify-center text-petroleo dark:text-white border dark:border-white/10 group-hover:bg-brand-accent group-hover:text-petroleo transition-colors">
                                    <UserIcon className="w-6 h-6" />
                                  </div>
                                  <div>
                                    <p className="font-display font-bold text-xl text-petroleo dark:text-white leading-none mb-2">{st.name}</p>
                                    <p className="text-xs text-gray-400 font-mono italic">{st.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-10 py-8">
                                <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${st.role === 'admin' ? 'bg-petroleo text-white' : 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'}`}>
                                  {st.role}
                                </span>
                              </td>
                              <td className="px-10 py-8">
                                <div className="flex -space-x-3">
                                  {st.courses?.slice(0, 3).map(c => (
                                    <div key={c.courseId} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-[10px] font-bold text-petroleo dark:text-gray-300 uppercase overflow-hidden">
                                       {c.courseId.substring(0, 2)}
                                    </div>
                                  ))}
                                  {(st.courses?.length || 0) > 3 && (
                                    <div className="w-10 h-10 rounded-full bg-brand-accent border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                      {+(st.courses?.length || 0) - 3}
                                    </div>
                                  )}
                                  {(!st.courses || st.courses.length === 0) && <span className="text-gray-300 italic text-xs">Sin registros</span>}
                                </div>
                              </td>
                              <td className="px-10 py-8 text-right">
                                <div className="flex items-center justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                   <button className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-gray-500 hover:text-brand-primary transition-colors">
                                      <Settings className="w-5 h-5" />
                                   </button>
                                   <button className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-gray-500 hover:text-red-500 transition-colors">
                                      <Trash2 className="w-5 h-5" />
                                   </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'messages' && (
                <motion.div 
                  key="messages"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {messages.map((msg) => (
                    <motion.div 
                      key={msg.id}
                      className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex items-center gap-5">
                             <div className="w-16 h-16 bg-hueso dark:bg-white/5 rounded-2xl flex items-center justify-center text-brand-accent shadow-inner border dark:border-white/10">
                               <Mail className="w-8 h-8" />
                             </div>
                             <div>
                               <h3 className="font-display font-bold text-2xl text-petroleo dark:text-white leading-none mb-2">{msg.name}</h3>
                               <p className="text-xs text-gray-400 font-mono tracking-tighter">{msg.email}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{new Date(msg.timestamp).toLocaleDateString()}</p>
                             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                          </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-black/30 p-8 rounded-[30px] border border-gray-100 dark:border-white/5 mb-10 relative">
                           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed italic">
                             "{msg.message}"
                           </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="flex-1 py-5 bg-petroleo dark:bg-brand-accent text-white dark:text-petroleo rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-xl transition-all shadow-lg shadow-petroleo/20 flex items-center justify-center gap-3">
                            <ExternalLink className="w-5 h-5" /> RESPONDER
                         </button>
                         <button className="p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-2xl text-gray-400 hover:text-green-500 transition-colors">
                            <CheckCircle className="w-6 h-6" />
                         </button>
                      </div>
                    </motion.div>
                  ))}
                  {messages.length === 0 && (
                    <div className="col-span-full py-48 text-center bg-white dark:bg-gray-900 rounded-[50px] border-2 border-dashed border-gray-100 dark:border-white/10 shadow-inner">
                      <div className="w-24 h-24 bg-hueso dark:bg-white/5 rounded-[40px] flex items-center justify-center mx-auto mb-8 border dark:border-white/10">
                        <Mail className="w-12 h-12 text-gray-200 dark:text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-300 mb-2 uppercase">Inbox Vacío</h3>
                      <p className="text-gray-400 italic">No hay comunicaciones pendientes por gestionar.</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-gray-900 rounded-[50px] p-16 shadow-2xl border border-gray-100 dark:border-white/5 max-w-2xl mx-auto text-center"
                >
                   <div className="w-24 h-24 bg-brand-accent/20 rounded-[40px] flex items-center justify-center mx-auto mb-10 text-brand-accent shadow-[0_0_50px_rgba(255,204,41,0.2)] border border-brand-accent/30">
                      <Settings className="w-12 h-12" />
                   </div>
                   <h2 className="text-4xl font-display font-black text-petroleo dark:text-white mb-6 uppercase tracking-tighter italic">Ajustes Globales</h2>
                   <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg leading-relaxed italic">
                      Configuración técnica de la plataforma, gestión de backups y variables de entorno del sistema SkillFor.
                   </p>
                   
                   <div className="grid grid-cols-1 gap-4 mb-12">
                      <button className="flex items-center justify-between p-6 bg-hueso dark:bg-white/5 rounded-3xl border border-transparent hover:border-brand-accent/30 transition-all font-bold text-petroleo dark:text-white">
                         <span>Mantenimiento de Servidor</span>
                         <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </button>
                      <button className="flex items-center justify-between p-6 bg-hueso dark:bg-white/5 rounded-3xl border border-transparent hover:border-brand-accent/30 transition-all font-bold text-petroleo dark:text-white">
                         <span>Backup de Base de Datos</span>
                         <Download className="w-5 h-5 text-gray-400" />
                      </button>
                   </div>

                   <button className="px-12 py-6 bg-petroleo dark:bg-brand-accent text-white dark:text-petroleo rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:shadow-2xl transition-all border dark:border-white/10">
                      Guardar Cambios
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
