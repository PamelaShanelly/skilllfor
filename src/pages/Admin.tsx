import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Mail, Shield, User as UserIcon, Calendar, 
  LayoutDashboard, ChevronRight, TrendingUp, DollarSign, 
  Award, Bell, Settings, Search, Filter, Download,
  ExternalLink, Trash2, CheckCircle, RefreshCcw, Book, Lock
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
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <div className="relative">
          <Shield className="w-32 h-32 text-brand-accent mb-8 opacity-20 animate-pulse" />
          <Lock className="w-12 h-12 text-brand-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <h1 className="text-4xl font-black text-white mb-4 font-display uppercase tracking-tighter text-center">Acceso de Alta Seguridad</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center italic">Solo personal con credenciales nivel 10 puede visualizar estos registros cifrados.</p>
        <Link to="/" className="px-12 py-5 bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">Regresar a la superficie</Link>
      </div>
    );
  }

  const filteredUsers = usersList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Estudiantes Totales', value: usersList.length.toString(), icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Mensajes Nuevos', value: messages.length.toString(), icon: Mail, color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
    { label: 'Ingresos Históricos', value: `$${(usersList.length * 150).toLocaleString()}`, icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
    { label: 'Certificaciones', value: Math.floor(usersList.length * 0.15).toString(), icon: Award, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ];

  return (
    <div className="min-h-screen bg-black pt-6 pb-24 selection:bg-brand-accent selection:text-petroleo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-[28px] flex items-center justify-center shadow-2xl border border-white/10 relative group">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <Shield className="w-10 h-10 text-brand-accent relative z-10" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black text-white uppercase tracking-tighter italic">Admin Portal</h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_#C8A15E]"></div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Núcleo SkillFor • Sistema de Control</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-[32px] backdrop-blur-3xl shadow-2xl">
            {(['overview', 'users', 'messages', 'settings'] as AdminTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-[22px] font-black text-[10px] uppercase tracking-[0.2em] transition-all border ${
                  activeTab === tab 
                    ? 'bg-brand-accent border-brand-accent text-petroleo shadow-[0_0_30px_rgba(200,161,94,0.4)]' 
                    : 'text-white/40 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'overview' ? 'Resumen' : tab === 'users' ? 'Usuarios' : tab === 'messages' ? 'Inbox' : 'Settings'}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="space-y-12">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-48 space-y-8">
              <div className="relative">
                <RefreshCcw className="w-16 h-16 text-brand-accent animate-spin opacity-50" />
                <div className="absolute inset-0 bg-brand-accent/20 blur-2xl rounded-full"></div>
              </div>
              <p className="text-white/20 font-black uppercase tracking-[0.5em] text-xs">Desencriptando Registros...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="space-y-16"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[45px] border border-white/5 shadow-2xl hover:border-brand-accent/20 transition-all group overflow-hidden relative"
                      >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                           <stat.icon className="w-32 h-32" />
                        </div>
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-[20px] mb-8 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform`}>
                          <stat.icon className="w-7 h-7" />
                        </div>
                        <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] mb-2">{stat.label}</p>
                        <h3 className="text-5xl font-display font-black text-white tracking-tighter leading-none">{stat.value}</h3>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
                             <TrendingUp className="w-3 h-3 text-green-500" />
                             <span className="text-[10px] font-black text-green-500 uppercase">+12%</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Middle Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-[#0a0a0a] rounded-[50px] border border-white/5 p-12 shadow-inner">
                      <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-display font-black text-white uppercase italic">Registros en Tiempo Real</h2>
                        <Link to="/admin/auditoria" className="px-6 py-3 bg-white/5 text-[10px] font-black text-brand-accent hover:bg-white/10 rounded-2xl transition-all border border-white/5 uppercase tracking-widest flex items-center gap-3">
                          Terminal <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="space-y-4">
                         {[1, 2, 3, 4].map((item) => (
                           <div key={item} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 rounded-[30px] transition-all group">
                              <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-brand-accent transition-colors">
                                    <Bell className="w-6 h-6" />
                                 </div>
                                 <div>
                                    <p className="font-black text-white text-base tracking-tight mb-1">Actividad detectada en servidor</p>
                                    <p className="text-[10px] text-white/30 uppercase font-black tracking-widest flex items-center gap-4">
                                       <Calendar className="w-4 h-4" /> 06 MAY 2026 • 15:52 • ID: #SK442
                                    </p>
                                 </div>
                              </div>
                              <div className="px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-[9px] font-black uppercase tracking-widest">Active</div>
                           </div>
                         ))}
                      </div>
                    </div>

                    {/* Quick Controls */}
                    <div className="bg-gradient-to-b from-brand-accent to-[#A8864B] rounded-[50px] p-12 text-petroleo relative overflow-hidden shadow-[0_0_100px_rgba(200,161,94,0.2)]">
                       <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mb-40"></div>
                       <div className="relative z-10">
                          <h2 className="text-3xl font-display font-black mb-12 uppercase italic leading-none">Power Tools</h2>
                          <div className="space-y-4">
                             {[
                               { name: 'Exportar Base de Datos', icon: Download },
                               { name: 'Difusión de Notificaciones', icon: Bell },
                               { name: 'Central de Cursos', icon: Book },
                               { name: 'Soporte de Élite', icon: LayoutDashboard },
                             ].map((tool, i) => (
                               <button key={i} className="w-full flex items-center justify-between p-6 bg-petroleo/10 hover:bg-petroleo/20 rounded-[28px] border border-petroleo/5 transition-all group">
                                  <div className="flex items-center gap-5">
                                     <tool.icon className="w-6 h-6 text-petroleo" />
                                     <span className="text-[13px] font-black uppercase tracking-tight">{tool.name}</span>
                                  </div>
                                  <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                               </button>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'users' && (
                <motion.div 
                  key="users"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-white/30" />
                      <input 
                        type="text"
                        placeholder="BUSCAR EN LA MATRIX..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-[35px] py-7 pl-20 pr-10 outline-none focus:ring-4 focus:ring-brand-accent/20 text-white font-bold text-lg placeholder:text-white/10 shadow-2xl transition-all"
                      />
                    </div>
                    <button className="px-10 py-7 bg-white/5 border border-white/10 rounded-[35px] text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-white/10 transition-all">
                      <Filter className="w-6 h-6 text-brand-accent" /> Filtros
                    </button>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-[60px] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left bg-white/[0.02] border-b border-white/5">
                            <th className="px-12 py-10 text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Identidad Digital</th>
                            <th className="px-12 py-10 text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Estado Acceso</th>
                            <th className="px-12 py-10 text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Proyectos Activos</th>
                            <th className="px-12 py-10 text-[10px] font-black text-white/30 uppercase tracking-[0.5em] text-right">Opciones</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {filteredUsers.map((st) => (
                            <tr key={st.id} className="hover:bg-brand-accent/[0.02] transition-colors group">
                              <td className="px-12 py-12">
                                <div className="flex items-center gap-8">
                                  <div className="w-20 h-20 bg-black border-2 border-white/5 rounded-[30px] flex items-center justify-center text-white/20 group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-all relative overflow-hidden">
                                    <UserIcon className="w-10 h-10 relative z-10" />
                                  </div>
                                  <div>
                                    <p className="font-display font-black text-2xl text-white uppercase italic mb-2 tracking-tighter leading-none">{st.name}</p>
                                    <p className="text-xs text-white/20 font-mono italic tracking-tighter lowercase">{st.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-12 py-12">
                                <span className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl border ${
                                  st.role === 'admin' 
                                    ? 'bg-brand-accent text-petroleo border-brand-accent' 
                                    : 'bg-white/5 text-white/60 border-white/10'}`}>
                                  {st.role}
                                </span>
                              </td>
                              <td className="px-12 py-12">
                                <div className="flex -space-x-4">
                                  {st.courses?.slice(0, 4).map(c => (
                                    <div key={c.courseId} className="w-12 h-12 rounded-[18px] bg-black border-2 border-white/10 flex items-center justify-center text-[10px] font-black text-white/60 uppercase group-hover:border-brand-accent/40 transition-all overflow-hidden relative">
                                       <span className="relative z-10">{c.courseId.substring(0, 2)}</span>
                                    </div>
                                  ))}
                                  {(st.courses?.length || 0) > 4 && (
                                    <div className="w-12 h-12 rounded-[18px] bg-brand-accent border-2 border-black flex items-center justify-center text-[10px] font-black text-petroleo relative z-20">
                                      +{st.courses!.length - 4}
                                    </div>
                                  )}
                                  {(!st.courses || st.courses.length === 0) && <span className="text-white/10 font-black italic text-[10px] uppercase tracking-widest">N/A</span>}
                                </div>
                              </td>
                              <td className="px-12 py-12 text-right">
                                <div className="flex items-center justify-end gap-5">
                                   <button className="w-14 h-14 bg-white/5 rounded-2xl text-white/30 hover:text-brand-accent hover:bg-white/10 transition-all flex items-center justify-center border border-white/5">
                                      <Settings className="w-6 h-6" />
                                   </button>
                                   <button className="w-14 h-14 bg-white/5 rounded-2xl text-white/30 hover:text-red-500 hover:bg-red-500/10 transition-all flex items-center justify-center border border-white/5">
                                      <Trash2 className="w-6 h-6" />
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  {messages.map((msg) => (
                    <motion.div 
                      key={msg.id}
                      className="bg-[#0a0a0a] p-12 rounded-[60px] border border-white/5 flex flex-col justify-between group relative overflow-hidden shadow-2xl hover:border-brand-accent/30 transition-all"
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                          <div className="flex items-center gap-6">
                             <div className="w-20 h-20 bg-black border border-white/10 rounded-[28px] flex items-center justify-center text-brand-accent relative group-hover:border-brand-accent/40 transition-all">
                               <Mail className="w-10 h-10" />
                               <div className="absolute -top-2 -right-2 w-5 h-5 bg-brand-accent rounded-full border-4 border-[#0a0a0a]"></div>
                             </div>
                             <div>
                               <h3 className="font-display font-black text-3xl text-white uppercase italic leading-none mb-2 tracking-tighter">{msg.name}</h3>
                               <p className="text-xs text-white/30 font-mono tracking-tighter lowercase">{msg.email}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-[11px] text-white/40 font-black uppercase tracking-widest mb-1 italic">{new Date(msg.timestamp).toLocaleDateString()}</p>
                             <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                          </div>
                        </div>
                        <div className="bg-white/[0.01] p-10 rounded-[40px] border border-white/5 mb-12 relative overflow-hidden">
                           <p className="text-white/60 text-xl leading-relaxed italic relative z-10 font-medium">
                             "{msg.message}"
                           </p>
                        </div>
                      </div>
                      <div className="flex gap-5 relative z-10">
                         <button className="flex-[2] py-6 bg-brand-accent text-petroleo rounded-[25px] font-black text-[11px] uppercase tracking-[0.3em] hover:shadow-[0_0_50px_rgba(200,161,94,0.4)] transition-all flex items-center justify-center gap-4">
                            <ExternalLink className="w-6 h-6" /> RESPONDER
                         </button>
                         <button className="flex-1 p-6 bg-white/5 border border-white/10 rounded-[25px] text-white/20 hover:text-green-400 hover:border-green-400/30 transition-all flex items-center justify-center">
                            <CheckCircle className="w-7 h-7" />
                         </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0a0a0a] rounded-[80px] p-24 shadow-[0_100px_200px_rgba(0,0,0,1)] border border-white/5 max-w-4xl mx-auto text-center relative overflow-hidden"
                >
                   <div className="w-28 h-28 bg-brand-accent/10 rounded-[45px] flex items-center justify-center mx-auto mb-12 text-brand-accent border border-brand-accent/20">
                      <Settings className="w-14 h-14" />
                   </div>
                   <h2 className="text-5xl font-display font-black text-white mb-8 uppercase tracking-tighter italic">Infraestructura Core</h2>
                   <p className="text-white/30 mb-16 text-xl leading-relaxed italic max-w-2xl mx-auto">
                      Gestión administrativa del backend y parches de seguridad.
                   </p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                      <button className="flex flex-col items-center justify-center p-12 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-accent/40 transition-all group">
                         <RefreshCcw className="w-10 h-10 text-brand-accent mb-6" />
                         <span className="font-black text-white uppercase tracking-widest">Reboot Server</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-12 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-accent/40 transition-all group">
                         <Download className="w-10 h-10 text-brand-accent mb-6" />
                         <span className="font-black text-white uppercase tracking-widest">Dump Database</span>
                      </button>
                   </div>

                   <button className="px-20 py-8 bg-brand-accent text-petroleo rounded-[30px] font-black text-sm uppercase tracking-[0.5em] hover:shadow-[0_0_60px_rgba(200,161,94,0.5)] transition-all">
                      Aplicar Configuraciones
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
